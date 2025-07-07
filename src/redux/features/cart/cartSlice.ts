import { TCartItem } from '@/types/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type CartState = {
  items: TCartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<TCartItem>) {
      const exists = state.items.find(item => item._id === action.payload._id);
      if (exists) {
        exists.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i._id === action.payload);
      if (item) item.quantity++;
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i._id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i._id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    }
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
