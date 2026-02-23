import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/coffee-beans-close.jpg"
          alt="Close-up of premium roasted coffee beans"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">
          Experience the Taste
        </p>
        <h2 className="font-serif text-4xl font-bold text-background md:text-6xl text-balance">
          Ready to Taste Ethiopia's Finest?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/80">
          Discover the rich flavors that have been cherished for generations. From Gera's highlands to your cup.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Shop Coffee
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-background/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-background/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
