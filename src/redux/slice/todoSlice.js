import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTask: [
    {
      id: 0,
      task: 'Поприбирати',
      completed: false,
      deleted: false,
    },
    {
      id: 1,
      task: 'Постірати одяг',
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      task: 'Купити продукти',
      completed: false,
      deleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoTask: (state, actions) => {
      const addTodo = {
        id: Math.floor(Math.random(36).toString().substring(5)),
        task: actions.payload,
        completed: false,
        deleted: false,
      };
      state.allTask = [...state.allTask, addTodo];
    },

    completedTask: (state, action) => {
      const task = state.allTask.find((el) => el.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },

    deletedTask: (state) => {
      state.allTask.filter((el) => {
        if (el.completed === true) {
          el.deleted = true;
        }
      });
    },
  },
});

export const { addTodoTask, completedTask, deletedTask } = todoSlice.actions;

export default todoSlice.reducer;
