import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class NewTodoContainer extends Component {
    constructor(props)
    {
        super(props);
        this.handleAddNewTodo = this.handleAddNewTodo.bind(this);
    }

    handleAddNewTodo (e)
    {
        e.preventDefault();
        const { dispatch } = this.props
        dispatch(actions.saveTodo(this.todoText.value));
        this.todoText.value = '';
    }
  render() {
    return (
      <div>
          <h2>Add New Todo</h2>
          <form onSubmit={this.handleAddNewTodo}>
            <input type="text" placeholder="Enter your todo here" ref={(input) => this.todoText = input }/>
            <button type="submit">Add</button>
          </form>
      </div>
    );
  }
}

export default connect()(NewTodoContainer);
