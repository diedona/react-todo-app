import React from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import Axios from 'axios';

class TodoContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            todos: [],
        }
    }

    handleChange = (changedTodo) => {
        this.setState({
            todos: updateTodos(changedTodo, this.state.todos)
        });
    }

    handleDelete = (deletedTodo) => {
        this.setState({
            todos: deleteTodo(deletedTodo, this.state.todos)
        });
    }

    async addTodo(title) {
        const newTodo = { title: title, completed: false };
        const { data } = await Axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
        data.id = uuidv4();
        this.setState({
            todos: [...this.state.todos, data]
        });
    }

    async componentDidMount() {
        //const { data } = await Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        const { data } = await Axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _limit: 10
            }
        });
        this.setState({
            todos: data
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
        if (todo.id === changedTodo.id)
            todo.completed = !changedTodo.completed;

        return todo;
    });
}

function deleteTodo(deletedTodo, todos) {
    return todos.filter(todo => todo.id !== deletedTodo.id);
}