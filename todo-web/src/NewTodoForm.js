import React, {Component} from 'react';

class NewTodoForm extends Component
{
    constructor(props) {
        super(props);
        this.updateTodoText = this.updateTodoText.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.state = { todoText: '', enableAdd: false };
    }

    updateTodoText (e){
        this.setState({ todoText: e.target.value, enableAdd: e.target.value !== '' });    
    }

    handleAddTodo (e) {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({ todoText: '', enableAdd: false });
    }

    render () {
        return (
            <div>
                <h2>Add New Todo</h2>
                <form>
                    <input type="text" placeholder="Enter todo text here" 
                    value={this.state.todoText}
                    onChange={this.updateTodoText}
                    />
                    <button onClick={this.handleAddTodo} disabled={!this.state.enableAdd}>ADD</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;