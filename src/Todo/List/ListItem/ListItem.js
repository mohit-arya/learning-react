import React from 'react';
import './ListItem.css';

function ListItem(props) {
    const todo = props.todo;
    const filter = props.filter;

    const onDelete = function () {
        props.onDelete(todo);
    }

    const onStatusChange = function () {
        props.onStatusChange(todo);
    }

    if (filter === 'all' || (filter === 'completed' && todo.completed) || (filter === 'active' && !todo.completed)) {
        return (
            <div className={!todo.completed ? 'list-item' : 'list-item-strikeThru'}>
                <input onChange={onStatusChange} checked={todo.completed} type="checkbox" />
                {todo.value}
                <span onClick={onDelete}>Delete</span>
            </div>
        )
    }

    return null;
}

export default ListItem;