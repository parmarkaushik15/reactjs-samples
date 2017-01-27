import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        {this.props.todo.text}
      </div>
    );
  }
}

export default Todo;
