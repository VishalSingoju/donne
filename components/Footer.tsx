import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-mud text-mustard-cream">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-heading text-3xl font-bold text-mustard">Donne</p>
          <p className="mt-3 max-w-xs text-sm text-mustard-cream/80">
            Pure, certified-organic food from farms we know, delivered with care.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">Shop</p>
          <ul className="space-y-2 text-mustard-cream/80">
            <li><Link href="/shop">All products</Link></li>
            <li><Link href="/shop?cat=Honey%20%26%20Sweeteners">Honey &amp; sweeteners</Link></li>
            <li><Link href="/shop?cat=Gift%20Hampers">Gift hampers</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">Say hello</p>
          <ul className="space-y-2 text-mustard-cream/80">
            <li>hello@donne.example</li>
            <li>Mon–Sat, 9am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-mustard-cream/60">
        © {new Date().getFullYear()} Donne Organic Store · Demo build
      </div>
    </footer>
  );
}
