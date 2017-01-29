import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';

class TodoListContainer extends Component {
  render() {
        const todos = this.props.todos.map((todo) => {
           return <TodoItem key={todo.id} todo={todo}/> 
        });
    return (
      <div>
          <table className={"table"}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                    <th>Completed</th>                    
                </tr>
            </thead>
            <tbody>
                {todos}
            </tbody>
          </table>
      </div>
    );
  }
}

export default TodoListContainer;
