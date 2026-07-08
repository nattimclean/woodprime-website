"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`New quote request from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nCity: ${data.get("city")}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-espresso">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-stone/30 px-3 py-2 text-sm focus:border-brass focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-espresso">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-stone/30 px-3 py-2 text-sm focus:border-brass focus:outline-none"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="mb-1 block text-sm font-medium text-espresso">
            City
          </label>
          <input
            id="city"
            name="city"
            className="w-full rounded-md border border-stone/30 px-3 py-2 text-sm focus:border-brass focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-espresso">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-md border border-stone/30 px-3 py-2 text-sm focus:border-brass focus:outline-none"
          >
            <option>Home Renovation</option>
            <option>Basement Renovation</option>
            <option>Handyman Services</option>
            <option>Patio, Deck, Fence or Pergola</option>
            <option>Other / Not sure</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-espresso">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-stone/30 px-3 py-2 text-sm focus:border-brass focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-brass px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-brass-light sm:w-auto"
      >
        Send Request
      </button>
      {submitted && (
        <p className="text-sm text-stone">
          Opening your email client to send this request. You can also reach us directly by phone or WhatsApp.
        </p>
      )}
    </form>
  );
}
