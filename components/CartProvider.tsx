"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, Product } from "@/lib/products";

type Line = { slug: string; qty: number };
type DetailedLine = { product: Product; qty: number };

type CartContextType = {
  lines: DetailedLine[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);
const KEY = "donne-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Line[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, loaded]);

  const value = useMemo<CartContextType>(() => {
    const lines: DetailedLine[] = items
      .map((i) => ({ product: getProduct(i.slug)!, qty: i.qty }))
      .filter((l) => l.product);
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.qty * l.product.price, 0),
      add: (slug, qty = 1) =>
        setItems((prev) => {
          const found = prev.find((i) => i.slug === slug);
          if (found)
            return prev.map((i) =>
              i.slug === slug ? { ...i, qty: i.qty + qty } : i
            );
          return [...prev, { slug, qty }];
        }),
      setQty: (slug, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.slug !== slug)
            : prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
        ),
      remove: (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)),
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
