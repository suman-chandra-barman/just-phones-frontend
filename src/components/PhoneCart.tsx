'use client';

import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const PhoneCart = () => {
  return (
    <div className="group relative card bg-base-100 rounded-xl overflow-hidden transition-shadow duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
      {/* Wishlist Icon - Top Right (Only on hover) */}
      <button
        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity bg-white shadow p-1 rounded-full"
        title="Add to wishlist"
      >
        <AiOutlineHeart size={20} className="text-[#ff4c11]" />
      </button>

      <Link href={`/phones/${1}`} className="flex flex-col h-full">
        <figure className="p-4">
          <img
            src={"https://www.mobiledokan.com/media/xiaomi-poco-f7-silver-official-image.webp"}
            alt={"Tecno Spark 40"}
            className="rounded-xl h-40 object-contain transition-transform duration-300 group-hover:scale-120"
          />
        </figure>

        <div className="card-body pt-0">
          <h2 className="card-title text-lg">Tecno Spark 40</h2>
          <p className="text-[#ff4c11] text-lg">
            <span className="font-bold">৳ </span>
            <span className="font-semibold">{1000.00}</span>
          </p>
        </div>
      </Link>
      {/* Add to Cart Button */}
      <button className="btn btn-sm bg-[#ff4c11] text-white w-full rounded-b-xl">
        Add to Cart
      </button>
    </div>
  );
};

export default PhoneCart;
