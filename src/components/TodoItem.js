import React from 'react';

function TodoItem(props) {
    return (
        <li>
            <input type="checkbox"
                onChange={() => props.handleChange(props.todo)}
                checked={props.todo.completed} />

            {props.todo.title}
            
            <button>Delete</button>
        </li>
    );
}

export default TodoItem;