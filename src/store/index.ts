import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import loadingReducer from './slices/loadingSlice';

// Load cart state from localStorage
// const loadState = () => {
//   try {
//     const serialized = localStorage.getItem('cart');
//     return serialized ? JSON.parse(serialized) : undefined;
//   } catch (err) {
//     return undefined;
//   }
// };

const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
  },
});
// Save to localStorage on change
store.subscribe(() => {
  try {
    const serialized = JSON.stringify(store.getState().cart);
    localStorage.setItem('cart', serialized);
  } catch (err) {
    // Ignore write errors
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
