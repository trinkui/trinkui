"use client";

import { useEffect, useState } from "react";

interface TrinkLogoProps {
  /** "icon" = just the T mark, "full" = full wordmark */
  variant?: "icon" | "full";
  /** Height in pixels */
  height?: number;
  className?: string;
  /** Force a specific theme instead of auto-detecting */
  theme?: "dark" | "light";
}

/**
 * trink-ui logo component.
 * Auto-detects dark/light mode and shows the appropriate version.
 * - `variant="icon"` — just the "t" mark
 * - `variant="full"` — full "trink·ui" wordmark
 */
export function TrinkLogo({
  variant = "icon",
  height = 28,
  className,
  theme,
}: TrinkLogoProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (theme) {
      setIsDark(theme === "dark");
      return;
    }
    // Auto-detect
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [theme]);

  if (variant === "icon") {
    return (
      <img
        src="/logo-icon.svg"
        alt="trink-ui"
        height={height}
        width={height}
        className={className}
        style={{
          height,
          width: height,
          filter: isDark ? "invert(1)" : "none",
        }}
      />
    );
  }

  // Full wordmark
  return (
    <img
      src={isDark ? "/logo-white.svg" : "/logo-dark.svg"}
      alt="trink-ui"
      height={height}
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
