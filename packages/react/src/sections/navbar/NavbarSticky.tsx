"use client";

import React, { forwardRef, useEffect, useState } from "react";
import type { NavbarBaseProps } from "./navbar.types";
import { NavbarSimple } from "./NavbarSimple";
import { cn } from "../../utils/cn";

/**
 * Sticky navbar variant that fixes to the top of the viewport with blur effect.
 * Adds a scroll-based shadow when the user scrolls past the top of the page.
 *
 * @example
 * <NavbarSticky
 *   brandName="Acme"
 *   links={[{ label: "Features", href: "#features" }]}
 *   primaryAction={{ label: "Get Started", href: "/signup" }}
 * />
 */
export const NavbarSticky = forwardRef<HTMLElement, NavbarBaseProps>(
  (
    {
      sticky = true,
      blur = true,
      bordered = true,
      className,
      ...props
    },
    ref
  ) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <NavbarSimple
        ref={ref}
        sticky={sticky}
        blur={blur}
        bordered={bordered}
        className={cn(
          scrolled && "shadow-[var(--trinkui-shadow-md,0_4px_12px_rgb(0_0_0/0.08))]",
          className
        )}
        {...props}
      />
    );
  }
);

NavbarSticky.displayName = "NavbarSticky";
