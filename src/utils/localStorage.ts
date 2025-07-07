
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

export const saveCartToLocalStorage = (state: any) => {
  try {
    const serializedCart = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedCart);
  } catch (e) {
    console.error("Could not save cart", e);
  }
};
