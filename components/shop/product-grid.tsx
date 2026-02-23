"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Yirgacheffe Select",
    description:
      "Bright and floral with vibrant citrus notes and a clean, tea-like finish. Sourced from the renowned Yirgacheffe region.",
    price: 850,
    weight: "250g",
    roast: "Light",
    origin: "Yirgacheffe",
    rating: 4.9,
    reviews: 128,
    image: "/images/product-yirgacheffe.jpg",
    tag: "Best Seller",
    category: "single-origin",
  },
  {
    id: 2,
    name: "Gera Highland",
    description:
      "Full-bodied with rich chocolate undertones and wild berry sweetness. From the misty highlands of Gera.",
    price: 780,
    weight: "250g",
    roast: "Medium",
    origin: "Gera",
    rating: 4.8,
    reviews: 96,
    image: "/images/product-gera.jpg",
    tag: "Single Origin",
    category: "single-origin",
  },
  {
    id: 3,
    name: "Heritage Blend",
    description:
      "Our signature blend marrying the brightness of Yirgacheffe with the depth of Gera beans. Perfectly balanced.",
    price: 720,
    weight: "250g",
    roast: "Medium",
    origin: "Blend",
    rating: 4.7,
    reviews: 204,
    image: "/images/product-blend.jpg",
    tag: "Signature",
    category: "blend",
  },
  {
    id: 4,
    name: "Reserve Dark Roast",
    description:
      "Bold and intense with smoky caramel notes and a velvety finish. For those who prefer a deeper roast.",
    price: 920,
    weight: "250g",
    roast: "Dark",
    origin: "Gera",
    rating: 4.9,
    reviews: 73,
    image: "/images/product-reserve.jpg",
    tag: "Premium",
    category: "single-origin",
  },
  {
    id: 5,
    name: "Morning Ritual",
    description:
      "A lively medium-light roast perfect for starting your day. Fruity acidity with honey sweetness.",
    price: 680,
    weight: "250g",
    roast: "Medium-Light",
    origin: "Yirgacheffe",
    rating: 4.6,
    reviews: 158,
    image: "/images/product-yirgacheffe.jpg",
    tag: "Popular",
    category: "blend",
  },
  {
    id: 6,
    name: "Ceremony Special",
    description:
      "Crafted to honor the Ethiopian coffee ceremony tradition. Complex, aromatic, and unforgettable.",
    price: 1100,
    weight: "500g",
    roast: "Medium-Dark",
    origin: "Gera & Yirgacheffe",
    rating: 5.0,
    reviews: 42,
    image: "/images/product-blend.jpg",
    tag: "Limited Edition",
    category: "blend",
  },
];

const categories = [
  { value: "all", label: "All Coffee" },
  { value: "single-origin", label: "Single Origin" },
  { value: "blend", label: "Blends" },
];

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors",
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-secondary"
              )}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </span>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group rounded-sm border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-sm bg-foreground/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-background">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-accent whitespace-nowrap">
                    {product.price} ETB
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-sm bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                    {product.roast} Roast
                  </span>
                  <span className="rounded-sm bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                    {product.origin}
                  </span>
                  <span className="rounded-sm bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                    {product.weight}
                  </span>
                </div>

                {/* Rating + CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
