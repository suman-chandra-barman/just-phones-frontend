'use client';

import { addToCart } from "@/redux/features/cart/cartSlice";
import { addToWishlist } from "@/redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TPhone } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";

const PhoneCart = ({phone} : {phone:TPhone}) => {
  const dispatch = useAppDispatch();
  const { _id, name, image, price, previousPrice } = phone;

  return (
    <div className="group relative card bg-white rounded-xl overflow-hidden transition-shadow duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
      {/* Wishlist*/}
      <button
        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity bg-white shadow p-1 rounded-full"
        title="Add to wishlist"
      >
        <AiOutlineHeart 
          onClick={() => {
            dispatch(addToWishlist({ _id, name, image, price }));
            toast.success(`${name} added to wishlist!`);
          }}
          size={20} 
          className="text-[#ff4c11]" 
        />
      </button>

      <Link href={`/phones/${_id}`} className="flex flex-col h-full">
        <figure className="p-4">
          <Image
            src={image}
            alt={name}
            height={160}
            width={240}
            className="rounded-xl h-40 object-contain transition-transform duration-500 group-hover:scale-120"
          />
        </figure>

        <div className="card-body pt-0">
          <h2 className="card-title text-lg">{name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-[#ff4c11] text-lg">
              <span className="font-bold">৳ </span>
              <span className="font-semibold">{price}</span>
            </span>
            {previousPrice  && <span className="line-through text-gray-500 text-sm">
              <span className="font-bold">৳ </span>
              <span className="font-semibold">{previousPrice}</span>
            </span>}
          </div>
        </div>
      </Link>
      {/* Add to Cart Button */}
      <button 
        className="btn btn-sm bg-[#ff4c11] text-white w-full rounded-b-xl"
        onClick={() => {
           dispatch(addToCart({ _id, name, image, price, quantity: 1 }));
            toast.success(`${name} added to cart!`);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PhoneCart;
