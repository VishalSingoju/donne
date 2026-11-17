import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const trust = [
  { icon: "✅", title: "Certified organic", text: "Every product shows its certification and origin." },
  { icon: "🌱", title: "Farm sourced", text: "Bought directly from growers we know by name." },
  { icon: "📦", title: "Eco packaging", text: "Plastic-light, recyclable and compostable wraps." },
  { icon: "🚚", title: "Fresh to your door", text: "Packed within 48 hours, delivered in your slot." },
];

const stories = [
  { name: "Aarti M.", text: "The honey tastes like real honey. Packaging is so neat and the delivery was right on time." },
  { name: "Rohan S.", text: "Finally an organic store I trust. I can see exactly where everything comes from." },
  { name: "Meera K.", text: "Gifted the welcome hamper to my mother. She loved it, and so did I." },
];

export default function Home() {
  const best = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-mustard-cream">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="badge bg-white">100% certified organic</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Pure food, grown with care.
            </h1>
            <p className="mt-5 max-w-md text-lg text-mud">
              Honest organic staples from farms we know, packed fresh and
              brought to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">
                Shop now
              </Link>
              <Link href="/#why" className="btn-secondary">
                Why Donne
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-mustard shadow-soft sm:h-96 sm:w-96">
            <span className="text-8xl sm:text-9xl">🍯</span>
            <span className="absolute left-2 top-10 text-5xl sm:text-6xl">🌾</span>
            <span className="absolute bottom-8 right-0 text-5xl sm:text-6xl">🥜</span>
            <span className="absolute bottom-2 left-10 text-4xl sm:text-5xl">🌿</span>
            <span className="absolute right-4 top-6 text-4xl sm:text-5xl">🍵</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-x pt-20">
        <h2 className="text-3xl font-bold">Shop by category</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={`/shop?cat=${encodeURIComponent(c.name)}`}
              className="card flex flex-col items-center gap-2 p-6 text-center transition hover:-translate-y-1 hover:bg-mustard-cream"
            >
              <span className="text-4xl">{c.emoji}</span>
              <span className="text-sm font-semibold text-mud">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="container-x pt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Best sellers</h2>
          <Link href="/shop" className="text-sm font-semibold text-mud underline">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {best.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Why Donne */}
      <section id="why" className="mt-20 bg-mustard-cream py-16">
        <div className="container-x">
          <h2 className="text-center text-3xl font-bold">Why Donne</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="card p-6 text-center">
                <div className="text-4xl">{t.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-mud">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="container-x pt-20">
        <h2 className="text-3xl font-bold">Kind words</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <figure key={s.name} className="card p-6">
              <p className="text-mud-deep">“{s.text}”</p>
              <figcaption className="mt-4 text-sm font-semibold text-mud">
                {s.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-x pt-20">
        <div className="rounded-card bg-mustard px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Get 10% off your first basket</h2>
          <p className="mt-2 text-mud-deep">
            Join the Donne list for seasonal picks and farm stories.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              className="flex-1 rounded-btn border-0 px-4 py-3 text-mud-deep focus:outline-none focus:ring-2 focus:ring-mud"
            />
            <button type="button" className="rounded-btn bg-mud px-6 py-3 font-semibold text-white hover:bg-mud-deep">
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
