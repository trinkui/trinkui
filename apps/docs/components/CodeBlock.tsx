"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[rgb(var(--trinkui-border)/0.5)]",
        "bg-[#0a0a0f] text-sm",
        "transition-shadow duration-300",
        "hover:border-[rgb(var(--trinkui-border)/0.8)] hover:shadow-[0_0_20px_rgba(129,140,248,0.04)]",
        className
      )}
    >
      {/* Header bar */}
      {filename && (
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] px-4 py-2.5">
          <span className="text-xs text-[rgb(var(--trinkui-muted)/0.7)]">{filename}</span>
        </div>
      )}

      {/* Language badge */}
      <span
        className={cn(
          "absolute right-12 top-3 rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
          "bg-[rgba(255,255,255,0.05)] text-[rgb(var(--trinkui-muted)/0.5)]",
          "border border-[rgba(255,255,255,0.04)]",
          filename && "top-12"
        )}
      >
        {language}
      </span>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className={cn(
          "absolute right-3 top-3 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200",
          "border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[rgb(var(--trinkui-muted))]",
          "hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[rgb(var(--trinkui-fg))]",
          "opacity-0 group-hover:opacity-100",
          filename && "top-12"
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            {/* Checkmark icon */}
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Copied</span>
          </>
        ) : (
          <>
            {/* Copy icon */}
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Copy</span>
          </>
        )}
      </button>

      {/* Code */}
      <pre className="overflow-x-auto p-4">
        <code className={`language-${language}`}>
          {showLineNumbers
            ? lines.map((line, i) => (
                <span key={i} className="table-row">
                  <span className="table-cell select-none pr-4 text-right text-xs text-[rgba(255,255,255,0.12)]">
                    {i + 1}
                  </span>
                  <span className="table-cell text-[#e4e4e7]">{line}{"\n"}</span>
                </span>
              ))
            : <span className="text-[#e4e4e7]">{code}</span>
          }
        </code>
      </pre>
    </div>
  );
}
