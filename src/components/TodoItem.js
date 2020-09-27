import React from 'react';

const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
}

function TodoItem(props) {
    const { completed, title } = props.todo;
    return (
        <li className="todo-item">
            <input type="checkbox"
                onChange={() => props.handleChange(props.todo)}
                checked={completed} />
            <button onClick={() => props.handleDelete(props.todo)}>
                Delete
            </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>
    );
}

export default TodoItem;