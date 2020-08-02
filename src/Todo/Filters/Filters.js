import React from 'react';
import './Filters.css';

const Filters = function (props) {
    const filter = props.filter;
    return (
        <div>
            <div className={filter === 'all' ? 'active' : ''} onClick={() => props.updateFilter('all')}>All</div>
            <div className={filter === 'active' ? 'active' : ''} onClick={() => props.updateFilter('active')}>Active</div>
            <div className={filter === 'completed' ? 'active' : ''} onClick={() => props.updateFilter('completed')}>Completed</div>
        </div>
    )
}

export default Filters;