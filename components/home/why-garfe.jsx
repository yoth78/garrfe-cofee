import { Leaf, Heart, Shield, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Nearly 100 Years of Heritage",
    description:
      "Our family has been cultivating and trading Ethiopian coffee since 1930 E.C., passed down through three generations.",
  },
  {
    icon: Heart,
    title: "Direct Farmer Relationships",
    description:
      "We work directly with smallholder farmers in the Gera region, ensuring fair compensation and sustainable practices.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description:
      "Our commitment to sustainability means ethical sourcing from farm to cup, preserving the land for future generations.",
  },
  {
    icon: Shield,
    title: "Quality at Every Stage",
    description:
      "Hand-selected, carefully processed beans with quality control at every stage from harvest to your cup.",
  },
];

export function WhyGarfe() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Why Garfe Coffee
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-sm border border-border bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
