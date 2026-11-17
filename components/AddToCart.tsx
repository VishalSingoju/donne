"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-btn border border-mud/30 bg-white">
        <button
          aria-label="Decrease quantity"
          className="px-4 py-3 text-lg text-mud"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <span className="w-8 text-center font-semibold">{qty}</span>
        <button
          aria-label="Increase quantity"
          className="px-4 py-3 text-lg text-mud"
          onClick={() => setQty((q) => q + 1)}
        >
          +
        </button>
      </div>
      <button
        className="btn-primary"
        onClick={() => {
          add(slug, qty);
          setAdded(true);
          setTimeout(() => setAdded(false), 1800);
        }}
      >
        {added ? "Added ✓" : "Add to cart"}
      </button>
      {added && (
        <Link href="/cart" className="text-sm font-semibold text-mud underline">
          View cart
        </Link>
      )}
    </div>
  );
}
