"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  title?: string;
  showLastName?: boolean;
}

export function ContactForm({
  title = "Send us a message",
  showLastName = true,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("firstName")) newErrors.firstName = "Name is required";
    if (!data.get("email")) newErrors.email = "Email is required";
    if (!data.get("message")) newErrors.message = "Message is required";

    const email = data.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800">
          Thank you for your inquiry!
        </h3>
        <p className="mt-2 text-green-700">
          Our team will review your information and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h3 className="text-xl font-semibold text-iepci-navy">{title}</h3>
      <div className={`grid gap-4 ${showLastName ? "sm:grid-cols-2" : ""}`}>
        <div>
          <Input
            name="firstName"
            placeholder="Your name"
            aria-label="Name"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
          )}
        </div>
        {showLastName && (
          <Input
            name="lastName"
            placeholder="Your last name"
            aria-label="Last name"
          />
        )}
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your email address"
          aria-label="Email"
          aria-invalid={!!errors.email}
          required
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Enter your message"
          aria-label="Message"
          aria-invalid={!!errors.message}
          required
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Submit
      </Button>
    </form>
  );
}
