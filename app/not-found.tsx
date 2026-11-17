import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <p className="text-6xl">🌾</p>
      <h1 className="mt-4 text-3xl font-bold">We couldn't find that page</h1>
      <Link href="/shop" className="btn-primary mt-8">
        Back to the shop
      </Link>
    </div>
  );
}
