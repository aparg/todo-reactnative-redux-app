import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload.id);
      state.todos = [
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          done: false,
        },
        ...state.todos,
      ];
    },
    removeTodo: (state, action) => {
      console.log({state});
      state.todos = state.todos.filter(todo => todo.id != action.payload);
      console.log(state);
    },
  },
});

export const {addTodo, removeTodo} = todosSlice.actions;

export default todosSlice.reducer;
