import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact | Garfe Coffee",
  description:
    "Get in touch with Garfe Coffee. We'd love to hear from you about our Ethiopian coffee, partnerships, or any inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground md:text-7xl text-balance">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            We&apos;d love to hear from you. Whether it&apos;s about our coffee, partnerships, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
