import React, {Component} from 'react';
import './App.css';
import * as constants from './Constants';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import 'whatwg-fetch'

class App extends Component {

    constructor(props) {
        super(props);
        this.loadTodos = this.loadTodos.bind(this);
        this.state = {
            todos: []
        };
    }

    loadTodos() {
        var self = this;
        fetch(constants.API_ROOT_PATH + "/todos")
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                self.setState({todos: json._embedded.todos});
            })
            .catch(function (ex) {
                console.log('Failed to load Todos', ex)
            });

    }

    componentDidMount() {
        this.loadTodos();
    }

    addTodo(text) {
        var self = this;
        fetch(constants.API_ROOT_PATH + '/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: text, done: false})
        }).then(function () {
            self.loadTodos();
        })
            .catch(function (ex) {
                console.log('Failed to save Todo', ex)
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
                    <TodoList todos={this.state.todos}/>
                </div>
            </div>
        );
    }
}

export default App;
