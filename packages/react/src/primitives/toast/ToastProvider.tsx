"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { AnimatePresence } from "motion/react";
import type {
  ToastContextValue,
  ToastEntry,
  ToastOptions,
  ToastProviderProps,
} from "./toast.types";
import { Toast } from "./Toast";

let toastCounter = 0;

const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * Provider that enables toast notifications throughout the application.
 * Wrap your app with `<ToastProvider>` and use `useToast()` to trigger toasts.
 *
 * @example
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);

  const toast = useCallback((options: ToastOptions) => {
    const id = `trinkui-toast-${++toastCounter}`;
    const entry: ToastEntry = { ...options, id };
    setToasts((prev) => [...prev, entry]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast container */}
      <div
        aria-live="polite"
        aria-label="Notifications"
        className="fixed bottom-4 right-4 z-[9999] flex flex-col-reverse gap-2 pointer-events-none"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((entry) => (
            <Toast key={entry.id} entry={entry} onRemove={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = "ToastProvider";

/**
 * Hook to trigger toast notifications.
 * Must be used within a `<ToastProvider>`.
 *
 * @example
 * const { toast } = useToast();
 * toast({ title: "Saved!", variant: "success" });
 */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a <ToastProvider>");
  }
  return ctx;
}
