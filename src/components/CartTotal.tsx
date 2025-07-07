"use client";
import { useAppSelector } from "@/redux/hooks";

const CartTotal = () => {
  const { items } = useAppSelector(state => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-6 p-4 bg-base-200 rounded-lg text-right">
      <h2 className="text-xl font-semibold">Total: <span className="text-[#ff4c11]">৳ {total.toFixed(2)}</span></h2>
    </div>
  );
};

export default CartTotal;
