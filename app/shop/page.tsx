import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const metadata = { title: "Shop | Donne" };

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-x py-20">Loading…</div>}>
      <ShopClient />
    </Suspense>
  );
}
