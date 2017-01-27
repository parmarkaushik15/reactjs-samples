import React, { Component } from 'react';
import './App.css';
import * as constants from './Constants';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props);
    this.loadTodos = this.loadTodos.bind(this);
    this.state = {
      todos : []
    };
  }

loadTodos() {
    var self = this;
      $.getJSON( constants.API_ROOT_PATH + "/todos", function( data ) {
          self.setState({todos: data._embedded.todos});
        }
    );
}
componentDidMount() {
  this.loadTodos();
}
 
addTodo (text) {
  var self = this;
    $.ajax({
      type: 'POST',
      url: constants.API_ROOT_PATH + '/todos',
      data: JSON.stringify ({text : text, done: false}),
      success: function(data) { self.loadTodos(); },
      contentType: "application/json",
      dataType: 'json'
    });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List</h2>
        </div>
        <div className="App-intro">
           <NewTodoForm addTodo={this.addTodo.bind(this)}/>
           <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
