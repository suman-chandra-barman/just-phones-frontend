import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWishlistItem } from "@/types/common";

const initialState: TWishlistItem[] = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<TWishlistItem>) => {
      const exists = state.find((item) => item._id === action.payload._id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item._id !== action.payload);
    },
    clearWishlist: () => [],
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
