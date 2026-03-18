"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { CodeBlock } from "./CodeBlock";

interface ComponentPreviewProps {
  /** The component to preview */
  children: React.ReactNode;
  /** Source code to display */
  code: string;
  /** Preview container class */
  className?: string;
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[rgb(var(--trinkui-border)/0.6)]",
        "bg-[rgb(var(--trinkui-surface)/0.4)] backdrop-blur-sm",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className
      )}
    >
      {/* Tab bar */}
      <div className="flex items-center gap-1 border-b border-[rgb(var(--trinkui-border)/0.5)] px-4 py-2">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "relative rounded-lg px-3 py-1.5 text-[13px] font-medium capitalize transition-all duration-200",
              tab === t
                ? "bg-[rgb(var(--trinkui-primary)/0.12)] text-[rgb(var(--trinkui-primary))] shadow-[0_0_12px_rgba(129,140,248,0.08)]"
                : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-secondary-fg))] hover:bg-[rgb(var(--trinkui-border)/0.3)]"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="transition-all duration-200">
        {tab === "preview" ? (
          <div
            className={cn(
              "relative bg-[rgb(var(--trinkui-bg))] p-0",
              "bg-dot-grid"
            )}
          >
            {children}
          </div>
        ) : (
          <CodeBlock code={code} language="tsx" className="rounded-none border-0 shadow-none" />
        )}
      </div>
    </div>
  );
}
