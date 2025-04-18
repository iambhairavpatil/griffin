import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: { id: number; quantity: number; product: any }[];
  isCartVisible: boolean;
}

const initialState: CartState = {
  items: [],
  isCartVisible: false, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    closeCart: (state) => {
      state.isCartVisible = false; 
    },
    toggleCartVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible; 
    },
  },
});

export const { addToCart, removeFromCart, closeCart, toggleCartVisibility } = cartSlice.actions;

export default cartSlice.reducer;
