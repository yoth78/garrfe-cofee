import type { Metadata } from "next";
import { ShopHero } from "@/components/shop/shop-hero";
import { ProductGrid } from "@/components/shop/product-grid";

export const metadata: Metadata = {
  title: "Shop | Garfe Coffee",
  description:
    "Browse our collection of premium Ethiopian coffees from the Gera and Yirgacheffe regions. Hand-selected, carefully processed beans.",
};

export default function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ProductGrid />
    </main>
  );
}
