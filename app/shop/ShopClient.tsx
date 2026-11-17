"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function ShopClient() {
  const params = useSearchParams();
  const [cat, setCat] = useState(params.get("cat") ?? "All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("popular");

  const list = useMemo(() => {
    let out = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (p.name + p.category + p.tags.join(" "))
          .toLowerCase()
          .includes(q.toLowerCase())
    );
    if (sort === "low") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "high") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "popular")
      out = [...out].sort((a, b) => Number(!!b.bestseller) - Number(!!a.bestseller));
    return out;
  }, [cat, q, sort]);

  const chips = ["All", ...categories.map((c) => c.name)];

  return (
    <div className="container-x py-12">
      <h1 className="text-4xl font-bold">Shop</h1>
      <p className="mt-2 text-mud">Organic staples, honestly sourced.</p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search honey, rice, tea…"
          aria-label="Search products"
          className="w-full rounded-btn border border-mud/20 bg-white px-4 py-3 md:max-w-sm focus:outline-none focus:ring-2 focus:ring-mustard"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
          className="rounded-btn border border-mud/20 bg-white px-4 py-3"
        >
          <option value="popular">Most popular</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              cat === c
                ? "bg-mustard text-mud-deep"
                : "bg-mustard-cream text-mud hover:bg-mustard-soft"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-mud">
          Nothing here yet. Your basket is feeling light 🌾
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
