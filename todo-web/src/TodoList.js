import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        var todos = this.props.todos.map((todo) => {
            return <Todo key={todo.id} todo={todo}/>
        });
        return (
            <div className="todoList">
                {todos}
            </div>
        );
    }
}

export default TodoList;
