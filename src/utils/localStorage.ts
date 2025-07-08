/* eslint-disable @typescript-eslint/no-explicit-any */

// cart 
export const loadCartFromLocalStorage = () => {
  try {
    if (typeof window === "undefined") {
      return undefined;
    }

    const cartsData = localStorage.getItem("cart");
    if (cartsData === null) return undefined;
    return JSON.parse(cartsData);
  } catch (error) {
    console.error("Could not load cart", error);
    return undefined;
  }
};

export const saveCartToLocalStorage = (cart:any) => {
  try {
    if (typeof window === "undefined") {
      return undefined;
    }

    const cartsData = JSON.stringify(cart);
    localStorage.setItem("cart", cartsData);
  } catch (error) {
    console.error("Could not save cart", error);
  }
};

// wishlist
export const loadWishlistFromLocalStorage = () => {
  try {
    if (typeof window === "undefined") {
      return undefined;
    }

    const wishlistData = localStorage.getItem("wishlist");
    return wishlistData ? JSON.parse(wishlistData) : [];
  } catch (error) {
    console.error("Failed to load wishlist", error);
    return [];
  }
};

export const saveWishlistToLocalStorage = (wishlist:any) => {
  try {
    if (typeof window === "undefined") {
      return undefined;
    }

    const wishlistData = JSON.stringify(wishlist);
    localStorage.setItem("wishlist", wishlistData);
  } catch (error) {
    console.error("Failed to save wishlist", error);
  }
};



