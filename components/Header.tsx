"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-mustard-cream bg-white/90 backdrop-blur">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mustard text-lg">
            🌾
          </span>
          <span className="font-heading text-2xl font-bold text-mud">Donne</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-mud sm:gap-8">
          <Link href="/shop" className="hover:text-mustard-dark">
            Shop
          </Link>
          <Link href="/#why" className="hidden hover:text-mustard-dark sm:inline">
            Why Donne
          </Link>
          <Link href="/#stories" className="hidden hover:text-mustard-dark sm:inline">
            Stories
          </Link>
          <Link
            href="/cart"
            className="relative rounded-btn bg-mustard px-4 py-2 font-semibold text-mud-deep transition hover:bg-mustard-dark hover:text-white"
          >
            Cart
            {count > 0 && (
              <span className="ml-2 rounded-full bg-mud px-2 py-0.5 text-xs text-white">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
