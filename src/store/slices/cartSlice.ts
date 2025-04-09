import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: number;
}

const initialState: CartState = {
  items: 2, // example default
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<number>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = cartSlice.actions;
export default cartSlice.reducer;
