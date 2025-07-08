/* eslint-disable @typescript-eslint/no-explicit-any */

// cart 
export const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) return undefined;
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not load cart", e);
    return undefined;
  }
};

export const saveCartToLocalStorage = (cart:any) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

// wishlist
export const loadWishlistFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load wishlist from localStorage:", error);
    return [];
  }
};

export const saveWishlistToLocalStorage = (wishlist:any) => {
  try {
    const data = JSON.stringify(wishlist);
    localStorage.setItem("wishlist", data);
  } catch (error) {
    console.error("Failed to save wishlist to localStorage:", error);
  }
};



