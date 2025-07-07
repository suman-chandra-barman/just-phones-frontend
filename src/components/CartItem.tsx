"use client";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { TCartItem } from "@/types/common";
import toast from "react-hot-toast";

const CartItem = ({ item }:{item:TCartItem}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 items-center border border-gray-200 p-4 rounded-lg shadow-sm">
      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-[#ff4c11] font-medium">৳ {item.price}</p>
        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => dispatch(decrementQuantity(item._id))} className="btn btn-sm">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item._id))} className="btn btn-sm">+</button>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(removeFromCart(item._id));
            toast.success(`${item.name} removed from cart!`);
          }}
          className="btn btn-sm btn-error text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
