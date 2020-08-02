import React from 'react';
import styles from './List.css';
import ListItem from './ListItem/ListItem';

function List(props) {
    const todos = props.todos;

    return (
        <div className="listContainer">
            {
                todos.map(todo => {
                    return <ListItem filter={props.filter} onStatusChange={props.onStatusChange} onDelete={props.onDelete} todo={todo} />
                })
            }
        </div>
    )

}

export default List;