"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

const FREE_DELIVERY_AT = 30;
const DELIVERY_FEE = 3.5;

export default function CartPage() {
  const { lines, subtotal, setQty, remove, clear } = useCart();
  const router = useRouter();

  const delivery =
    lines.length === 0 || subtotal >= FREE_DELIVERY_AT ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  if (lines.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <p className="text-6xl">🧺</p>
        <h1 className="mt-4 text-3xl font-bold">Your basket is feeling light</h1>
        <p className="mt-2 text-mud">Add a few organic goodies to get started.</p>
        <Link href="/shop" className="btn-primary mt-8">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-12">
      <h1 className="text-4xl font-bold">Your cart</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-4">
          {lines.map(({ product, qty }) => (
            <li key={product.slug} className="card flex items-center gap-4 p-4">
              <div className="flex h-20 w-20 flex-none items-center justify-center rounded-btn bg-mustard-cream text-4xl">
                {product.emoji}
              </div>
              <div className="flex-1">
                <Link href={`/product/${product.slug}`} className="font-heading text-lg font-semibold">
                  {product.name}
                </Link>
                <p className="text-sm text-mud/70">
                  {product.unit} · {formatPrice(product.price)}
                </p>
                <button
                  onClick={() => remove(product.slug)}
                  className="mt-1 text-xs text-clay underline"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center rounded-btn border border-mud/30">
                <button className="px-3 py-2" aria-label="Decrease" onClick={() => setQty(product.slug, qty - 1)}>−</button>
                <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                <button className="px-3 py-2" aria-label="Increase" onClick={() => setQty(product.slug, qty + 1)}>+</button>
              </div>
              <p className="w-20 text-right font-bold text-mud">
                {formatPrice(product.price * qty)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="card h-fit p-6">
          <h2 className="text-xl font-bold">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Delivery</dt>
              <dd>{delivery === 0 ? "Free" : formatPrice(delivery)}</dd>
            </div>
            {delivery > 0 && (
              <p className="rounded-btn bg-mustard-cream p-2 text-xs text-mud">
                Add {formatPrice(FREE_DELIVERY_AT - subtotal)} more for free delivery.
              </p>
            )}
            <div className="flex justify-between border-t border-mud/10 pt-3 text-lg font-bold">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <button
            className="btn-primary mt-6 w-full"
            onClick={() => {
              clear();
              router.push("/order-success");
            }}
          >
            Place demo order
          </button>
          <p className="mt-3 text-center text-xs text-mud/70">
            Demo checkout. No payment is taken.
          </p>
        </aside>
      </div>
    </div>
  );
}
