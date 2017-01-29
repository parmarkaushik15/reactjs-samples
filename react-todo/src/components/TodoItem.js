import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
      const todo = this.props.todo;
    return (
      <tr>
          <td>{todo.id}</td>
          <td>{todo.text}</td>
          <td>{todo.completed}</td>
      </tr>
    );
  }
}

export default TodoItem;
