---
name: build-forms
description: Build forms with trink-ui form components (Input, Select, Textarea, Checkbox, validation)
---

# Build Forms

## Available Form Components

```tsx
import {
  Form, FormField,
  Input, Textarea, Select,
  Checkbox, Switch, RadioGroup, Slider,
  Autocomplete, Calendar, DatePicker, NumberInput, InputOTP,
  Button,
} from "@trinkui/react";
```

## Contact Form

```tsx
"use client";

import { useState } from "react";
import { Input, Textarea, Select, Button } from "@trinkui/react";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // validate and submit
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        label="Name"
        placeholder="Your name"
        required
        error={errors.name}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
        error={errors.email}
      />
      <Select
        label="Budget"
        placeholder="Select budget range"
        options={[
          { label: "Under $10K", value: "10k" },
          { label: "$10K - $50K", value: "50k" },
          { label: "$50K+", value: "50k+" },
        ]}
      />
      <Textarea
        name="message"
        label="Message"
        placeholder="Tell us about your project"
        rows={4}
      />
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
```

## Login Form

```tsx
<form className="space-y-4">
  <Input name="email" label="Email" type="email" required />
  <Input name="password" label="Password" type="password" required />
  <div className="flex items-center justify-between">
    <Checkbox label="Remember me" />
    <a href="/forgot" className="text-sm">Forgot password?</a>
  </div>
  <Button type="submit" fullWidth>Sign In</Button>
</form>
```

## Settings Form

```tsx
<form className="space-y-6">
  <RadioGroup
    label="Plan"
    options={[
      { label: "Free", value: "free", description: "Basic features" },
      { label: "Pro", value: "pro", description: "All features" },
    ]}
    defaultValue="free"
  />
  <Switch label="Email notifications" defaultChecked />
  <Switch label="Marketing emails" />
  <Slider label="Volume" defaultValue={75} showValue />
  <Button type="submit">Save Changes</Button>
</form>
```

## Newsletter Signup (Inline)

```tsx
<div className="flex gap-2">
  <Input placeholder="Enter your email" className="flex-1" />
  <Button>Subscribe</Button>
</div>
```

## Validation Patterns

### HTML5 native
```tsx
<Input required minLength={2} maxLength={50} />
<Input type="email" required />
<Input type="url" pattern="https?://.+" />
```

### Custom with error state
```tsx
const [error, setError] = useState("");

<Input
  label="Username"
  error={error}
  onChange={(e) => {
    const val = e.target.value;
    if (val.length < 3) setError("Min 3 characters");
    else if (!/^[a-z0-9]+$/.test(val)) setError("Lowercase and numbers only");
    else setError("");
  }}
/>
```

## Component Props Quick Reference

| Component | Key Props |
|-----------|-----------|
| `Input` | `label`, `hint`, `error`, `size`, `variant`, `leftSlot`, `rightSlot` |
| `Textarea` | `label`, `hint`, `error`, `size`, `variant`, `rows` |
| `Select` | `options`, `label`, `error`, `placeholder`, `onChange` |
| `Checkbox` | `label`, `description`, `checked`, `onChange`, `color` |
| `Switch` | `label`, `checked`, `onChange`, `size` |
| `RadioGroup` | `options`, `label`, `value`, `onChange`, `orientation` |
| `Slider` | `min`, `max`, `step`, `label`, `showValue`, `color` |
