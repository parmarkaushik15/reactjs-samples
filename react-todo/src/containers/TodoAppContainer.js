import React, { Component } from 'react';
import NewTodoContainer from './NewTodoContainer';
import TodoListContainer from './TodoListContainer';
import * as actions from '../actions';
import { connect } from 'react-redux';

class TodoAppContainer extends Component {
    
    componentWillMount()
    {
        const { dispatch } = this.props
        dispatch(actions.fetchTodos())

    }

  render() {
    return (
      <div>
          <NewTodoContainer />
          <TodoListContainer todos={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoAppContainer);
