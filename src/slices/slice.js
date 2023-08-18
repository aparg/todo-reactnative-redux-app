import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  todos: [],
  editMode: false,
  editId: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          selectedImage: action.payload.selectedImage,
        },
        ...state.todos,
      ];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.payload);
    },
    setEditMode: (state, action) => {
      state.editMode = true;
      state.editId = action.payload;
    },
    editTodo: (state, action) => {
      state.todos.forEach(todo => {
        if (todo.id === state.editId) {
          todo.title = action.payload.title;
          todo.description = action.payload.description;
          todo.selectedImage = action.payload.selectedImage;
        }
      });
      state.editMode = false;
      state.editId = null;
    },
    deleteAll: (state, action) => {
      state.todos = [];
    },
  },
});

export const {addTodo, removeTodo, setEditMode, editTodo, deleteAll} =
  todosSlice.actions;

export default todosSlice.reducer;
