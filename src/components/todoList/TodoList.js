import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { completedTask, deletedTask } from '../../redux/slice/todoSlice';
import './TodoListStyle.scss';

const ToDoList = () => {
  const { allTask } = useSelector(({ todo }) => todo);
  const { onSelectRadio } = useSelector(({ filter }) => filter);

  const dispatch = useDispatch();

  const handleCompletedTask = (id) => {
    dispatch(completedTask(id));
  };

  const hanldeDeletedTask = () => {
    dispatch(deletedTask());
  };

  const filterTask = () => {
    let task = [];
    if (onSelectRadio === 'All') {
      task = allTask.filter(
        (el) => (el.completed === true || el.completed === false) && el.deleted === false,
      );
    }

    if (onSelectRadio === 'Completed') {
      task = allTask.filter((el) => el.completed === true && el.deleted === false);
    }

    if (onSelectRadio === 'Active') {
      task = allTask.filter((el) => el.completed === false && el.deleted === false);
    }

    if (onSelectRadio === 'Deleted') {
      task = allTask.filter((el) => el.deleted === true);
    }
    return task;
  };

  return (
    <div className="todo__list">
      {filterTask().map((el, index) => (
        <div className="todo__list-item" key={el.id}>
          <label>
            <input
              type="checkbox"
              defaultChecked={el.completed === true}
              onClick={() => handleCompletedTask(el.id)}
            />
            {el.task}
          </label>
        </div>
      ))}
      <button onClick={hanldeDeletedTask}>Clear completed tasks</button>
    </div>
  );
};

export default ToDoList;
