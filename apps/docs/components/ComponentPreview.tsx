"use client";

import { useState } from "react";
import { cn } from "@trinkui/react";
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
        "overflow-hidden rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))]",
        className
      )}
    >
      {/* Tab bar */}
      <div className="flex border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "px-4 py-2 text-sm font-medium capitalize transition-colors",
              tab === t
                ? "border-b-2 border-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary))]"
                : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div className="bg-[rgb(var(--trinkui-bg))] p-0">{children}</div>
      ) : (
        <CodeBlock code={code} language="tsx" className="rounded-none border-0" />
      )}
    </div>
  );
}
