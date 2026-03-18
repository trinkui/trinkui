---
name: use-primitives
description: Use trink-ui primitive components (Button, Input, Modal, Table, etc.) in React projects
---

# Use Primitive Components

## Available Primitives

All imported from `@trinkui/react`:

### Form & Input
```tsx
import { Input, Select, Textarea, Checkbox, Switch, RadioGroup, Slider, Autocomplete, Calendar, DatePicker, NumberInput, InputOTP, Form, FormField } from "@trinkui/react";
```

### Feedback & Overlay
```tsx
import { Modal, Drawer, Dropdown, Tooltip, Popover, Toast, ToastProvider, useToast, Alert, Spinner, Progress, CircularProgress } from "@trinkui/react";
```

### Data Display
```tsx
import { Table, Card, CardHeader, CardBody, CardFooter, Avatar, AvatarGroup, Badge, Chip, Code, Skeleton, User, Listbox, Accordion } from "@trinkui/react";
```

### Navigation
```tsx
import { Tabs, Pagination, Breadcrumbs, Link, Kbd } from "@trinkui/react";
```

### Layout & Visual
```tsx
import { Button, Divider, Spacer, Image, Snippet, ScrollShadow } from "@trinkui/react";
```

## Common Patterns

### Button with variants
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button loading>Loading...</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Input with validation
```tsx
<Input
  label="Email"
  placeholder="you@example.com"
  error={errors.email}
  hint="We'll never share your email"
/>
```

### Modal
```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)} title="Confirm">
  <p>Are you sure?</p>
  <footer>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={handleConfirm}>Confirm</Button>
  </footer>
</Modal>
```

### Table with sorting
```tsx
<Table
  columns={[
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
  ]}
  data={users}
  striped
  hoverable
/>
```

### Toast notifications
```tsx
// Wrap app with provider
<ToastProvider>
  <App />
</ToastProvider>

// Use in any component
const { toast } = useToast();
toast({ title: "Saved!", variant: "success" });
toast({ title: "Error", description: "Something went wrong", variant: "danger" });
```

### Tabs
```tsx
<Tabs
  items={[
    { key: "tab1", label: "Overview", content: <Overview /> },
    { key: "tab2", label: "Settings", content: <Settings /> },
    { key: "tab3", label: "Billing", content: <Billing /> },
  ]}
  variant="underline"
/>
```

### Form with validation
```tsx
<Form onValidSubmit={(data) => console.log(data)}>
  <FormField label="Name" required>
    <Input name="name" required placeholder="Your name" />
  </FormField>
  <FormField label="Email" required>
    <Input name="email" type="email" required placeholder="you@example.com" />
  </FormField>
  <FormField label="Message">
    <Textarea name="message" rows={4} placeholder="Your message" />
  </FormField>
  <Button type="submit">Send</Button>
</Form>
```

## Props Pattern

Every component supports:
- `className` — additional CSS classes (merged with `cn()`)
- `ref` — forwarded via `forwardRef`
- Native HTML attributes are spread to the root element
