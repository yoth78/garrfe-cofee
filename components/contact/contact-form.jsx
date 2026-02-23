"use client";

import React from "react"

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-border bg-card p-16 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <Send className="h-7 w-7 text-accent" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-card-foreground">
          Thank You!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your message has been received. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
        Send Us a Message
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Fill out the form below and we&apos;ll respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-xs font-medium uppercase tracking-wider text-foreground"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Your first name"
              className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-xs font-medium uppercase tracking-wider text-foreground"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Your last name"
              className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-wider text-foreground"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-xs font-medium uppercase tracking-wider text-foreground"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            defaultValue=""
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="general">General Inquiry</option>
            <option value="order">Order Question</option>
            <option value="wholesale">Wholesale Partnership</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xs font-medium uppercase tracking-wider text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Send className="h-4 w-4" />
          Send Message
        </button>
      </form>
    </div>
  );
}
