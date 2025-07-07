"use client";
import { useAppSelector } from "@/redux/hooks";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";

const CartPage = () => {
  const { items } = useAppSelector(state => state.cart);

  return (
    <section className="container mx-auto px-4 my-10 bg-base-100">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          <CartTotal />
        </>
      )}
    </section>
  );
};

export default CartPage;
