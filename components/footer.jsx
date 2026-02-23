import Link from "next/link";
import { Phone, MapPin, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                GARFE
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Proudly Ethiopian coffee company with roots stretching back nearly a century. Honoring the past while brewing for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Coffee Origins */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-50">
              Our Origins
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Coffee className="h-4 w-4 flex-shrink-0" />
                Yirgacheffe Region
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Coffee className="h-4 w-4 flex-shrink-0" />
                Gera Region
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-50">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                0921 555 888
              </li>
              <li className="text-sm opacity-70">
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} Garfe Coffee Company. All rights reserved. Established 1930 E.C.
          </p>
        </div>
      </div>
    </footer>
  );
}
