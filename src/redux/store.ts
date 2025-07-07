import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";

import { loadCartFromLocalStorage, loadWishlistFromLocalStorage, saveCartToLocalStorage, saveWishlistToLocalStorage } from "@/utils/localStorage";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    
  },
  preloadedState: {
    cart: loadCartFromLocalStorage(),
    wishlist: loadWishlistFromLocalStorage(),
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
    devTools:true
});

store.subscribe(() => {
  const state = store.getState();
  saveCartToLocalStorage(state.cart);
  saveWishlistToLocalStorage(state.wishlist);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
