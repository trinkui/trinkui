"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

interface Heading {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll("main h2");
      const collected: Heading[] = [];

      elements.forEach((el) => {
        const text = el.textContent || "";
        if (!text.trim()) return;

        let id = el.id;
        if (!id) {
          id = slugify(text);
          el.id = id;
        }

        collected.push({ id, text: text.trim() });
      });

      setHeadings(collected);
      setActiveId("");
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  }

  if (headings.length === 0) return null;

  return (
    <aside
      className="hidden xl:block w-[200px] shrink-0"
      aria-label="Table of contents"
    >
      <div className="sticky top-14 py-10 pl-6 pr-4">
        <p className="mb-4 text-xs font-medium text-[rgb(var(--trinkui-muted))]">
          On this page
        </p>
        <ul className="space-y-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li key={heading.id}>
                <button
                  onClick={() => handleClick(heading.id)}
                  className={cn(
                    "block w-full text-left py-1 text-[13px] leading-snug transition-colors duration-150",
                    isActive
                      ? "text-[rgb(var(--trinkui-primary))] font-medium"
                      : "text-[rgb(var(--trinkui-muted)/0.6)] hover:text-[rgb(var(--trinkui-fg))]"
                  )}
                >
                  {heading.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
