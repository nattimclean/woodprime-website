"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      city: data.get("city"),
      service: data.get("service"),
      message: data.get("message"),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
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
        disabled={status === "sending"}
        className="w-full rounded-md bg-brass px-6 py-3 text-sm font-semibold text-espresso transition hover:bg-brass-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Request"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-medium text-green-700">
          Thanks! Your request has been sent — we'll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-700">
          Something went wrong sending your request. Please call or WhatsApp us instead at {SITE.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
