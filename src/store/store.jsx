import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todosReducer from '../slices/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let combinedReducer = combineReducers({
  todos: todosReducer,
});
const persistedTodosReducer = persistReducer(persistConfig, combinedReducer);

const persistedTodosStore = configureStore({
  reducer: persistedTodosReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default persistedTodosStore;
