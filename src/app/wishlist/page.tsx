'use client';

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeFromWishlist } from "@/redux/features/wishlist/wishlistSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { TWishlistItem } from "@/types/common";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const wishlist = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  const handleAddToCart = (item:TWishlistItem) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item._id));
    toast.success(`${item.name} moved to cart!`);
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist(id));
    toast.error("Item removed from wishlist");
  };

  return (
    <section className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow p-4 rounded-xl">
              <Link href={`/phones/${item._id}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-40"
                />
              </Link>
              <div className="mt-2 space-y-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-[#ff4c11] font-bold">৳{item.price}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-sm bg-[#ff4c11] text-white"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WishlistPage;
