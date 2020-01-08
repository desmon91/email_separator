import React, { Component } from "react";
import { Icon, Label, TextArea } from "semantic-ui-react";

const LabelContoh = ({ names, deleteHandler }) => {
  if (names.length > 0) {
    return names.map(name => {
      return (
        <Label key={name.toString()}>
          {name}
          <Icon name="delete" onClick={() => deleteHandler(name)} />
        </Label>
      );
    });
  } else return <></>;
};

class Example extends Component {
  state = {
    typing: "",
    split: "",
    names: []
  };

  deleteHandler = name => {
    const names = this.state.names;
    const new_names = names.filter(item => item !== name);
    this.setState({ names: new_names });
  };
  changeHandler = e => {
    this.setState({ typing: e.target.value });
    this.setState(prevState => ({
          names: [...prevState.names, ...this.state.typing.split(",")]
        }));
    console.log(this.state.names);
  };

  render() {
    return (
      <div>
        <TextArea type="text" onChange={this.changeHandler} >
          <LabelContoh
          names={this.state.names}
          deleteHandler={this.deleteHandler}
          />
        </TextArea>
      </div>
    );
  }
}

export default Example;
