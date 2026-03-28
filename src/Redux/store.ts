import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Auth/Reducer';
// You will import your slices here later, e.g.:
// import authReducer from './Auth/AuthSlice';

const rootReducer = combineReducers({
  // This is where you connect your logic
  // auth: authReducer,
  // product: productReducer,

  auth: authReducer
});

export const store = configureStore({
  reducer: rootReducer, 
  // Thunk and DevTools are already included by default!
});

// These two lines are CRITICAL for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;