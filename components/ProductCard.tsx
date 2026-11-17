"use client";

import Link from "next/link";
import { formatPrice, Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/product/${product.slug}`}
        className="relative flex h-44 items-center justify-center bg-mustard-cream text-7xl"
      >
        <span className="transition group-hover:scale-110">{product.emoji}</span>
        <span className="badge absolute left-3 top-3 bg-white">Organic</span>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-mud/70">{product.category}</p>
        <Link
          href={`/product/${product.slug}`}
          className="mt-1 font-heading text-lg font-semibold leading-snug text-mud-deep"
        >
          {product.name}
        </Link>
        <p className="text-sm text-mud/70">{product.unit}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-mud">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => add(product.slug)}
            className="rounded-btn bg-mustard px-4 py-2 text-sm font-semibold text-mud-deep transition hover:bg-mustard-dark hover:text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
