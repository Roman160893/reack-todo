import React from 'react';

import TodoFilters from './components/todoFilters/TodoFilters';
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/todoList/TodoList';
import './App.scss';

const App = () => (
  <div className="wrapper todo">
    <div className="container">
      <div className="todo__title">Todo List</div>
      <AddTodo />
      <TodoFilters />
      <TodoList />
    </div>
  </div>
);

export default App;
