import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Setup development environment",
                    completed: true
                },
                {
                    id: 2,
                    title: "Develop website and add content",
                    completed: false
                },
                {
                    id: 3,
                    title: "Deploy to live server",
                    completed: false
                }
            ]
        }
    }

    handleChange = (changedTodo) => {
        //console.log("clicked ", changedTodo);
        this.setState({
            todos: updateTodos(changedTodo, this.state.todos)
        });
    }

    handleDelete = (deletedTodo) => {
        console.log("deleted", deletedTodo);
        this.setState({
            todos: deleteTodo(deletedTodo, this.state.todos)
        });
    }

    render() {
        return (
            <div>
                <Header />
                <InputTodo />
                <TodoList 
                    todos={this.state.todos} 
                    handleChange={this.handleChange}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }

}

export default TodoContainer;

function updateTodos(changedTodo, todos) {
    return todos.map(todo => {
        if(todo.id === changedTodo.id)
            todo.completed = !changedTodo.completed;
        
        return todo;
    });
}

function deleteTodo(deletedTodo, todos) {
    return todos.filter(todo => todo.id !== deletedTodo.id);
}