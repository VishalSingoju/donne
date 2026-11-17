import Link from "next/link";

export const metadata = { title: "Order placed | Donne" };

export default function OrderSuccess() {
  return (
    <div className="container-x py-24 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-mustard text-5xl">
        ✓
      </div>
      <h1 className="mt-6 text-4xl font-bold">Thank you!</h1>
      <p className="mx-auto mt-3 max-w-md text-mud">
        Your demo order has been placed. In the live store you would now get a
        confirmation by email and SMS, plus live tracking from packed to
        delivered.
      </p>
      <Link href="/shop" className="btn-primary mt-8">
        Keep shopping
      </Link>
    </div>
  );
}
