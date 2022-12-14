import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from '../../redux/slice/todoFilterSlice';
import { filters } from '../../utils/variable';
import './TodoFiltersStyle.scss';

const TodoFilters = () => {
  const { onSelectRadio } = useSelector(({ filter }) => filter);

  const dispatch = useDispatch();

  const handleValueRadio = (e) => {
    dispatch(selectFilter(e.target.value));
  };

  return (
    <div className="todo__filter">
      {filters.map((el, index) => (
        <label key={index}>
          <input
            type="radio"
            name={el.name}
            value={el.value}
            checked={onSelectRadio === el.value}
            onChange={(e) => handleValueRadio(e)}
          />
          {el.value}
        </label>
      ))}
    </div>
  );
};

export default TodoFilters;
