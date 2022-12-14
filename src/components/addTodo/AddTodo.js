import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoTask } from '../../redux/slice/todoSlice';

import './AddTodoStyle.scss';

const AddTodo = () => {
  const [toDoValue, setToDoValue] = useState('');

  const dispatch = useDispatch();

  const handleInputValue = (event) => {
    setToDoValue(event.target.value);
  };

  const addToDo = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.type === 'click') {
      setToDoValue('');
      if (toDoValue) {
        dispatch(addTodoTask(toDoValue));
      }
    }
  };

  return (
    <div className="todo__input">
      <input
        value={toDoValue}
        onChange={(e) => handleInputValue(e)}
        placeholder="add new todo..."
        onKeyDown={(e) => addToDo(e)}
      />
      <button onClick={addToDo}>submit</button>
    </div>
  );
};

export default AddTodo;
