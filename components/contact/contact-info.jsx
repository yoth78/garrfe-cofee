import { Phone, MapPin, Clock, Coffee } from "lucide-react";

const info = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["0921 555 888"],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Addis Ababa, Ethiopia"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM"],
  },
  {
    icon: Coffee,
    title: "Our Origins",
    lines: ["Gera Region", "Yirgacheffe Region"],
  },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Contact Information
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Reach out to us through any of the following channels.
      </p>

      <div className="flex flex-col gap-8">
        {info.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {item.title}
              </h3>
              {item.lines.map((line) => (
                <p
                  key={line}
                  className="mt-1 text-sm leading-relaxed text-muted-foreground"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Map placeholder */}
      <div className="mt-12 aspect-[4/3] rounded-sm border border-border bg-secondary flex items-center justify-center overflow-hidden">
        <div className="text-center px-6">
          <MapPin className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
          <p className="font-serif text-lg font-semibold text-foreground">
            Addis Ababa, Ethiopia
          </p>
          <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
            Garfe Coffee Headquarters
          </p>
        </div>
      </div>
    </div>
  );
}
