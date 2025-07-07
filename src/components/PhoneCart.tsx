'use client';

import { TPhone } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const PhoneCart = ({phone} : {phone:TPhone}) => {

  return (
    <div className="group relative card bg-white rounded-xl overflow-hidden transition-shadow duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
      {/* Wishlist*/}
      <button
        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity bg-white shadow p-1 rounded-full"
        title="Add to wishlist"
      >
        <AiOutlineHeart size={20} className="text-[#ff4c11]" />
      </button>

      <Link href={`/phones/${phone._id}`} className="flex flex-col h-full">
        <figure className="p-4">
          <Image
            src={phone.image}
            alt={phone.name}
            height={160}
            width={240}
            className="rounded-xl h-40 object-contain transition-transform duration-500 group-hover:scale-120"
          />
        </figure>

        <div className="card-body pt-0">
          <h2 className="card-title text-lg">{phone.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-[#ff4c11] text-lg">
              <span className="font-bold">৳ </span>
              <span className="font-semibold">{phone.price}</span>
            </span>
            {phone.previousPrice  && <span className="line-through text-gray-500 text-sm">
              <span className="font-bold">৳ </span>
              <span className="font-semibold">{phone.previousPrice}</span>
            </span>}
          </div>
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
