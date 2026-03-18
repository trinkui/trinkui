import type { ReactNode } from "react";

export type ToastVariant = "default" | "success" | "warning" | "danger";

export interface ToastOptions {
  /** Title text displayed prominently */
  title: string;
  /** Optional description text below the title */
  description?: string;
  /** Visual variant indicating the toast type */
  variant?: ToastVariant;
  /** Auto-dismiss duration in milliseconds (default: 5000) */
  duration?: number;
}

export interface ToastEntry extends ToastOptions {
  /** Unique identifier for the toast instance */
  id: string;
}

export interface ToastContextValue {
  /** Function to display a new toast notification */
  toast: (options: ToastOptions) => void;
}

export interface ToastProviderProps {
  /** Application content to wrap */
  children: ReactNode;
}

export interface ToastProps {
  /** The toast data to render */
  entry: ToastEntry;
  /** Callback fired when the toast should be removed */
  onRemove: (id: string) => void;
}
