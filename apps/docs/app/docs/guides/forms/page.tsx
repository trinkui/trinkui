import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function FormsGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Forms & Validation
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Build accessible, validated forms using trink-ui primitives. This guide covers
          Input, Select, Textarea, and Button components for common landing page forms
          like contact forms and newsletter signups.
        </p>
      </div>

      {/* Available form primitives */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Available form primitives
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          trink-ui provides the following form-related primitives, all with consistent styling
          and full keyboard accessibility:
        </p>
        <div className="space-y-2">
          {[
            { name: "Input", desc: "Text input with label, placeholder, and error states" },
            { name: "Textarea", desc: "Multi-line text input with auto-resize support" },
            { name: "Select", desc: "Dropdown select with custom styling" },
            { name: "Checkbox", desc: "Checkbox with label text" },
            { name: "RadioGroup", desc: "Group of radio buttons for single selection" },
            { name: "Switch", desc: "Toggle switch for boolean values" },
            { name: "Button", desc: "Submit and action buttons with loading states" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <code className="shrink-0 rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1.5 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.name}
              </code>
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Basic input usage */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Basic input usage
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Input
          </code>{" "}
          component supports labels, placeholders, helper text, and error messages:
        </p>
        <CodeBox
          code={`import { Input } from "@trinkui/react";

<Input
  label="Email address"
  type="email"
  placeholder="you@example.com"
  required
/>

<Input
  label="Full name"
  placeholder="John Doe"
  helperText="Enter your name as it appears on your ID."
/>

<Input
  label="Username"
  placeholder="johndoe"
  error="This username is already taken."
/>`}
        />
      </div>

      {/* HTML5 validation */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          HTML5 native validation
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui inputs pass through all standard HTML attributes, so you can use native
          browser validation with{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            required
          </code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            pattern
          </code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            minLength
          </code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            maxLength
          </code>, and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            type
          </code>:
        </p>
        <CodeBox
          code={`<Input
  label="Phone number"
  type="tel"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  placeholder="123-456-7890"
  required
/>

<Input
  label="Password"
  type="password"
  minLength={8}
  required
/>`}
        />
      </div>

      {/* Custom validation */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Custom validation with onChange
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          For more control, use React state to validate on change and display errors dynamically:
        </p>
        <CodeBox
          title="ContactForm.tsx"
          code={`"use client";

import { useState } from "react";
import { Input } from "@trinkui/react";

export function EmailInput() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);

    if (value && !value.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }

  return (
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={handleChange}
      error={error}
      placeholder="you@company.com"
      required
    />
  );
}`}
        />
      </div>

      {/* Error state display */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Error state display
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          When you pass an{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            error
          </code>{" "}
          string to any form primitive, it automatically applies a red border, displays the
          error message below the input, and sets{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            aria-invalid=&quot;true&quot;
          </code>{" "}
          for screen readers. The error is associated with the input via{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            aria-describedby
          </code>.
        </p>
        <CodeBox
          code={`// Error state — red border + error message shown
<Input
  label="Website"
  type="url"
  error="Please enter a valid URL starting with https://"
/>

// Valid state — no error
<Input
  label="Website"
  type="url"
  value="https://example.com"
/>`}
        />
      </div>

      {/* Complete form example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Complete contact form example
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Here is a full contact form with name, email, budget select, message textarea,
          and a submit button with loading state:
        </p>
        <CodeBox
          title="components/ContactForm.tsx"
          code={`"use client";

import { useState } from "react";
import { Input, Textarea, Button } from "@trinkui/react";

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-6 text-center">
        <p className="font-medium text-green-600">Message sent!</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Name"
          placeholder="John Doe"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          error={errors.name}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          error={errors.email}
          required
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[rgb(var(--trinkui-fg))]">
          Budget
        </label>
        <select
          value={data.budget}
          onChange={(e) => setData({ ...data, budget: e.target.value })}
          className="w-full rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))]"
        >
          <option value="">Select a budget range</option>
          <option value="5k">Under $5,000</option>
          <option value="10k">$5,000 - $10,000</option>
          <option value="25k">$10,000 - $25,000</option>
          <option value="50k">$25,000+</option>
        </select>
      </div>

      <Textarea
        label="Message"
        placeholder="Tell us about your project..."
        rows={5}
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        error={errors.message}
        required
      />

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}`}
        />
      </div>

      {/* Newsletter form */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Inline newsletter signup
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          For a simpler form like a newsletter signup, combine an Input with a Button in a flex row:
        </p>
        <CodeBox
          code={`<form className="flex gap-3">
  <Input
    type="email"
    placeholder="Enter your email"
    className="flex-1"
    required
  />
  <Button type="submit" variant="primary">
    Subscribe
  </Button>
</form>`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          You can also use the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            NewsletterBanner
          </code>{" "}
          or{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            NewsletterSplit
          </code>{" "}
          section components which include this pattern out of the box.
        </p>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to build responsive layouts that look great on all screen sizes.
        </p>
        <Link
          href="/docs/guides/responsive"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Responsive Design Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
