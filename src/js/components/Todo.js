import React from "react";

export default class Todo extends React.Component{
  render() {
    const { id, text, complete } = this.props;
    return (
      <div class="col-md-4">
        <h2>Todo</h2>
        <ul>
          <li>id: {id}</li>
          <li>text: {text}</li>
          <li>complete: {complete}</li>
        </ul>
      </div>
    )
  }
}
