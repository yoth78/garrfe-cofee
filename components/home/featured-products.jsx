import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Yirgacheffe Select",
    description: "Bright, floral, and citrusy with a clean finish",
    price: "850 ETB",
    image: "/images/product-yirgacheffe.jpg",
    tag: "Best Seller",
  },
  {
    name: "Gera Highland",
    description: "Rich body with notes of chocolate and wild berries",
    price: "780 ETB",
    image: "/images/product-gera.jpg",
    tag: "Single Origin",
  },
  {
    name: "Heritage Blend",
    description: "Our signature blend combining Gera and Yirgacheffe beans",
    price: "720 ETB",
    image: "/images/product-blend.jpg",
    tag: "Signature",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Our Collection
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Featured Coffee
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href="/shop"
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
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
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-sm font-semibold text-accent">
                    {product.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
