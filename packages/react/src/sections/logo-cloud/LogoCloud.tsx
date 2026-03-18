"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import type { LogoCloudBaseProps, LogoItem } from "./logo-cloud.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { FadeIn } from "../../animation/FadeIn";
import { cn } from "../../utils/cn";

export interface LogoCloudProps extends LogoCloudBaseProps {}

function LogoImage({ logo }: { logo: LogoItem }) {
  const img = (
    <img
      src={logo.src}
      alt={logo.name}
      className={cn(
        "h-8 w-auto max-w-[120px] object-contain",
        "grayscale opacity-50",
        "transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      )}
    />
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={logo.name}
        className="flex items-center justify-center"
      >
        {img}
      </a>
    );
  }

  return <div className="flex items-center justify-center">{img}</div>;
}

/**
 * Logo cloud section displaying partner / customer logos.
 * Supports a static wrapping flex row or an infinite CSS marquee scroll.
 * Logos are grayscale by default and become full color on hover.
 * Marquee is disabled when prefers-reduced-motion is set.
 *
 * @example
 * <LogoCloud
 *   label="Trusted by teams at"
 *   logos={[
 *     { src: "/logos/acme.svg", name: "Acme Corp" },
 *     { src: "/logos/globex.svg", name: "Globex" },
 *   ]}
 *   marquee
 * />
 */
export const LogoCloud = forwardRef<HTMLElement, LogoCloudProps>(
  (
    {
      label,
      logos,
      theme,
      animated = true,
      marquee = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) =>
        setPrefersReducedMotion(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }, []);

    const Wrapper = animated ? FadeIn : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: true } : {};

    const shouldMarquee = marquee && !prefersReducedMotion;

    // Duplicate logos for seamless loop
    const displayLogos: LogoItem[] = shouldMarquee
      ? [...logos, ...logos]
      : logos;

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="md"
        surface
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <Container size="xl">
          <div className="flex flex-col items-center gap-8">
            {/* Label */}
            {label && (
              <Wrapper {...(wrapperProps as object)} delay={0}>
                <p className="text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-muted))]">
                  {label}
                </p>
              </Wrapper>
            )}

            {/* Logos */}
            {shouldMarquee ? (
              /* Marquee mode */
              <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[rgb(var(--trinkui-surface))] to-transparent"
                />
                {/* Right fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[rgb(var(--trinkui-surface))] to-transparent"
                />
                <div
                  ref={trackRef}
                  className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-12 py-2"
                  style={{
                    animation: "trinkui-marquee 30s linear infinite",
                  }}
                >
                  {displayLogos.map((logo, index) => (
                    <LogoImage key={`${logo.name}-${index}`} logo={logo} />
                  ))}
                </div>

                {/* Keyframe injection */}
                <style>{`
                  @keyframes trinkui-marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                  }
                `}</style>
              </div>
            ) : (
              /* Static wrapping flex row */
              <Wrapper {...(wrapperProps as object)} delay={0.05}>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                  {logos.map((logo, index) => (
                    <LogoImage key={`${logo.name}-${index}`} logo={logo} />
                  ))}
                </div>
              </Wrapper>
            )}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

LogoCloud.displayName = "LogoCloud";
