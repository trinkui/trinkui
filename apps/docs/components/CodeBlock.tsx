"use client";

import { useState } from "react";
import { cn } from "@trinkui/react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))]",
        "bg-[#0d1117] text-sm",
        className
      )}
    >
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between border-b border-[rgb(var(--trinkui-border)/0.3)] px-4 py-2">
          <span className="text-xs text-slate-400">{filename}</span>
          <span className="text-xs text-slate-500">{language}</span>
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className={cn(
          "absolute right-3 top-3 rounded-md px-2.5 py-1 text-xs font-medium transition-all",
          "border border-slate-600 bg-slate-800 text-slate-300",
          "hover:border-slate-500 hover:text-white",
          filename && "top-10"
        )}
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Code */}
      <pre className="overflow-x-auto p-4">
        <code className={`language-${language} text-slate-200`}>{code}</code>
      </pre>
    </div>
  );
}
