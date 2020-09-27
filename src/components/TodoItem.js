import React from 'react';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <input type="checkbox"
                onChange={() => props.handleChange(props.todo)}
                checked={props.todo.completed} />
            <button onClick={() => props.handleDelete(props.todo)}>
                Delete
            </button>
            
            {props.todo.title}
        </li>
    );
}

export default TodoItem;