import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="Ethiopian coffee ceremony setup with traditional jebena and freshly roasted beans"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 pt-40">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-background/70 mb-6">
            Established 1930 E.C.
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-background md:text-7xl lg:text-8xl text-balance">
            Exceptional Coffee, Rooted in Heritage
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/80">
            From the highlands of Ethiopia to your cup. Nearly a century of passion, tradition, and the finest hand-selected beans.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Explore Our Coffee
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-sm border border-background/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-background/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/10 bg-foreground/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-background/50">Origin</span>
            <span className="text-sm font-medium text-background">Gera & Yirgacheffe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-background/50">Heritage</span>
            <span className="text-sm font-medium text-background">Nearly 100 Years</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-background/50">Approach</span>
            <span className="text-sm font-medium text-background">Direct Trade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
