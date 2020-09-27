import React from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            todos: [
                {
                    id: uuidv4(),
                    title: "Setup development environment",
                    completed: true
                },
                {
                    id: uuidv4(),
                    title: "Develop website and add content",
                    completed: false
                },
                {
                    id: uuidv4(),
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
        //console.log("deleted", deletedTodo);
        this.setState({
            todos: deleteTodo(deletedTodo, this.state.todos)
        });
    }

    addTodo(title) {
        const id = uuidv4();
        this.setState({
            todos: [...this.state.todos, { id: id, title: title, completed: false}]
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodo={(title) => this.addTodo(title)} />
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