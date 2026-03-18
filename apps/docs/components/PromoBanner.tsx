"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || scrolled) return null;

  return (
    <div
      className={cn(
        "relative z-50 flex items-center justify-center gap-3 overflow-hidden",
        "border-b border-[rgb(var(--trinkui-border)/0.3)]",
        "bg-[rgb(var(--trinkui-bg))] px-4 py-2.5",
        "transition-all duration-300"
      )}
    >
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 blur-2xl"
      >
        <div
          className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[rgb(var(--trinkui-primary)/0.15)] to-[rgb(167_139_250/0.1)]"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 blur-2xl"
      >
        <div
          className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[rgb(var(--trinkui-accent)/0.12)] to-[rgb(var(--trinkui-primary)/0.08)]"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>

      {/* Content */}
      <span className="text-sm text-[rgb(var(--trinkui-muted))]">
        40+ landing page components for React
      </span>

      <a
        href="/components"
        className={cn(
          "relative inline-flex items-center gap-1.5 overflow-hidden rounded-full p-px",
          "text-sm font-medium text-[rgb(var(--trinkui-fg))]"
        )}
      >
        {/* Spinning gradient border */}
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgb(var(--trinkui-primary))_0%,rgb(var(--trinkui-accent))_50%,rgb(var(--trinkui-primary))_100%)]" />
        <span className="inline-flex items-center gap-1 rounded-full bg-[rgb(var(--trinkui-bg))] px-3 py-1 text-xs font-medium backdrop-blur-sm hover:bg-[rgb(var(--trinkui-surface))] transition-colors">
          Browse now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </a>

      {/* Dismiss */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[rgb(var(--trinkui-muted)/0.5)] hover:text-[rgb(var(--trinkui-fg))] transition-colors"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
