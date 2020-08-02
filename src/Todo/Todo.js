import React, { useState } from 'react';
import Input from './Input/Input';
import List from './List/List';
import Filters from './Filters/Filters';

function Todo() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = function (todo) {
    setTodos([...todos, todo]);
  }

  const onDelete = function (todo) {
    setTodos(todos.filter(t => t !== todo));
  }

  const onStatusChange = function (todo) {
    const updatedTodos = todos.map(t => {
      if (t === todo) {
        return {
          value: todo.value,
          completed: !todo.completed
        }
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <Input addTodo={addTodo} />
      <List filter={filter} onStatusChange={onStatusChange} onDelete={onDelete} todos={todos} />
      <Filters filter={filter} updateFilter={setFilter}/>
    </div>
  );
}

export default Todo;
