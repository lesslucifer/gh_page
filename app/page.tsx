import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";

import { CheckoutForm } from "@/components/forms/checkout-form";
import { createOrder } from "@/app/actions";

const sampleCartItems = [
  {
    id: "1",
    name: "Gạo ST25",
    price: 145000,
    quantity: 1,
    size: "5Kg",
    image: "/images/products/tui-gao.png",
  },
  {
    id: "2",
    name: "Gạo ST24",
    price: 300000,
    quantity: 2,
    size: "10Kg",
    image: "/images/products/tui-gao.png",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <div className="py-10 bg-blue-1">
        <CheckoutForm onSubmit={createOrder} cartItems={sampleCartItems} />
      </div>
    </main>
  );
}
