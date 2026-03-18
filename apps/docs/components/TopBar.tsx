"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { TrinkLogo } from "./TrinkLogo";
import { SearchModal } from "./SearchModal";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates/saas" },
];

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 h-14",
          "border-b border-[rgb(var(--trinkui-border)/0.5)]",
          "bg-[rgb(var(--trinkui-bg)/0.8)] backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center gap-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <TrinkLogo variant="icon" height={22} />
            <span className="text-sm font-semibold">
              <span className="text-[rgb(var(--trinkui-fg))]">trink</span>
              <span className="text-[#338EF7]">-ui</span>
            </span>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Nav links */}
          <nav className="flex items-center gap-1 mr-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/docs" && pathname.startsWith("/docs")) ||
                (link.href === "/components" && pathname.startsWith("/components")) ||
                (link.href === "/templates/saas" && pathname.startsWith("/templates"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-[rgb(var(--trinkui-primary))] font-medium"
                      : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-1.5",
              "border border-[rgb(var(--trinkui-border)/0.5)]",
              "bg-[rgb(var(--trinkui-surface)/0.6)]",
              "text-sm text-[rgb(var(--trinkui-muted)/0.7)]",
              "hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-border)/0.3)]",
              "transition-all duration-150",
              "w-56"
            )}
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="flex-1 text-left">Search...</span>
            <kbd className="hidden sm:inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium border border-[rgb(var(--trinkui-border)/0.5)] bg-[rgb(var(--trinkui-bg)/0.5)] text-[rgb(var(--trinkui-muted)/0.5)]">
              Ctrl K
            </kbd>
          </button>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* GitHub */}
          <a
            href="https://github.com/trinkui/trinkui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              "text-[rgb(var(--trinkui-muted))]",
              "hover:text-[rgb(var(--trinkui-fg))]",
              "transition-colors duration-150"
            )}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
