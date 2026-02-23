import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Leaf, Users, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Garfe Coffee",
  description:
    "Learn about Garfe Coffee's nearly century-long heritage of cultivating and trading the finest Ethiopian coffee from Gera and Yirgacheffe regions.",
};

const timeline = [
  {
    year: "1930 E.C.",
    title: "The Beginning",
    description:
      "Our grandparents began cultivating and trading coffee as a family tradition in the Ethiopian highlands.",
  },
  {
    year: "1960s E.C.",
    title: "Growing Roots",
    description:
      "Our father expanded the family legacy by selling Yirgacheffe coffee beans in Addis Ababa, bringing highland coffee to the city.",
  },
  {
    year: "2008 E.C.",
    title: "Garfe Coffee Founded",
    description:
      "Building on generations of knowledge, Garfe Coffee Company was officially established to serve the Ethiopian market.",
  },
  {
    year: "Today",
    title: "Brewing the Future",
    description:
      "We continue to honor our heritage while innovating and expanding, committed to quality, sustainability, and authentic Ethiopian coffee.",
  },
];

const values = [
  {
    icon: Coffee,
    title: "Quality Focus",
    description: "Hand-selected, carefully processed beans at every stage.",
  },
  {
    icon: Users,
    title: "Direct Trade",
    description: "Fair and transparent compensation for our farming partners.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Sustainable farming practices preserving land for generations.",
  },
  {
    icon: Globe,
    title: "Authentic Origins",
    description: "Proudly sourced from Gera and Yirgacheffe regions of Ethiopia.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/coffee-farm.jpg"
            alt="Ethiopian coffee farm landscape in the Gera region"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 pt-40">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-5xl font-bold text-background md:text-7xl text-balance">
            About Garfe Coffee
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
            A proudly Ethiopian coffee company with roots that stretch back nearly a century.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Our Mission
              </p>
              <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
                Bringing the Finest Ethiopian Coffee to Discerning Palates
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                At Garfe Coffee, our mission is simple yet profound: to bring the world&apos;s finest Ethiopian coffee to discerning palates while creating sustainable livelihoods for the farmers who grow it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Exceptional coffee begins with exceptional farming. We work directly with smallholder farmers in the Gera region of Ethiopia, one of the historic birthplaces of coffee cultivation, dating back over a thousand years.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {[
                  "Fair and transparent compensation",
                  "Sustainable farming practices",
                  "Consistent, high-quality coffee beans",
                  "Ethical sourcing from farm to cup",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="/images/about-heritage.jpg"
                alt="Coffee heritage in Ethiopia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Our Journey
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              A Legacy Through Time
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative rounded-sm border border-border bg-card p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              What We Believe
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage quote */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="font-serif text-2xl font-medium leading-relaxed text-primary-foreground md:text-3xl text-balance">
            &ldquo;Coffee is not just our business; it is our inheritance. From farm knowledge passed through generations to modern market practices, Garfe Coffee blends tradition and innovation.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/60">
              The Garfe Family
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
