import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";

import { CheckoutForm } from "@/components/forms/checkout-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <div className="py-10 bg-blue-1">
        <CheckoutForm />
      </div>
    </main>
  );
}
