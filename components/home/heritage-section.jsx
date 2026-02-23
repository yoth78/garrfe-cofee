import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeritageSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/about-heritage.jpg"
              alt="Ethiopian coffee farm in the Yirgacheffe region at golden hour"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Our Heritage
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              A Legacy Nearly a Century in the Making
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Our story began in 1930 E.C., when our grandparents cultivated and traded coffee as a family tradition. Passed down through generations, this passion for coffee grew stronger when our father began selling Yirgacheffe coffee beans in Addis Ababa.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Building on this legacy, Garfe Coffee Company was officially established in 2008 E.C. Today, we serve the Ethiopian market with a deep commitment to quality, heritage, and sustainability.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <span className="font-serif text-3xl font-bold text-accent md:text-4xl">
                  90+
                </span>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Years of Heritage
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-accent md:text-4xl">
                  2
                </span>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Coffee Regions
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-accent md:text-4xl">
                  3
                </span>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Generations
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
              >
                Read Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
