import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  return { title: p ? `${p.name} | Donne` : "Donne" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const related = products
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .concat(products.filter((x) => x.category !== p.category))
    .slice(0, 4);

  return (
    <div className="container-x py-12">
      <Link href="/shop" className="text-sm text-mud underline">
        ← Back to shop
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="flex h-80 items-center justify-center rounded-card bg-mustard-cream text-[9rem] shadow-soft md:h-[28rem]">
          {p.emoji}
        </div>

        <div>
          <span className="badge">{p.certification}</span>
          <h1 className="mt-4 text-4xl font-bold">{p.name}</h1>
          <p className="mt-1 text-mud">{p.unit}</p>
          <p className="mt-4 text-3xl font-bold text-mud">{formatPrice(p.price)}</p>
          <p className="mt-5 text-mud-deep">{p.description}</p>

          <AddToCart slug={p.slug} />

          <dl className="mt-10 grid grid-cols-2 gap-4 rounded-card bg-white p-5 text-sm shadow-soft">
            <div>
              <dt className="text-mud/70">Origin</dt>
              <dd className="font-semibold">{p.origin}</dd>
            </div>
            <div>
              <dt className="text-mud/70">Certification</dt>
              <dd className="font-semibold">{p.certification}</dd>
            </div>
            <div>
              <dt className="text-mud/70">Category</dt>
              <dd className="font-semibold">{p.category}</dd>
            </div>
            <div>
              <dt className="text-mud/70">Good to know</dt>
              <dd className="font-semibold">{p.tags.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </div>

      <h2 className="mt-20 text-2xl font-bold">You may also like</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((r) => (
          <ProductCard key={r.slug} product={r} />
        ))}
      </div>
    </div>
  );
}
