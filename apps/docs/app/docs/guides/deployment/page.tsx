import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DeploymentGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Deployment
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Deploy your trink-ui landing page to production. This guide covers Vercel, Netlify,
          Cloudflare Pages, and static export options.
        </p>
      </div>

      {/* Vercel */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Vercel
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Vercel is the recommended platform for Next.js projects. It auto-detects your
          framework, builds, and deploys with zero configuration:
        </p>
        <div className="space-y-3">
          <CodeBox
            title="Terminal"
            code={`# Install Vercel CLI
npm install -g vercel

# Deploy from your project directory
vercel

# Deploy to production
vercel --prod`}
          />
        </div>
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Alternatively, connect your Git repository to Vercel and every push to{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            main
          </code>{" "}
          will trigger an automatic deployment. Preview deployments are created for pull requests.
        </p>
        <div className="mt-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
          <p className="font-medium text-[rgb(var(--trinkui-fg))]">Vercel settings</p>
          <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
            No special build settings needed. Vercel detects Next.js automatically.
            Build command:{" "}
            <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
              next build
            </code>
            . Output directory:{" "}
            <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
              .next
            </code>.
          </p>
        </div>
      </div>

      {/* Netlify */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Netlify
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Netlify supports Next.js via its adapter. Connect your repository and configure
          the build settings:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Netlify build settings</p>
            <div className="mt-2 space-y-1 text-sm text-[rgb(var(--trinkui-muted))]">
              <p>
                Build command:{" "}
                <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                  next build
                </code>
              </p>
              <p>
                Publish directory:{" "}
                <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                  .next
                </code>
              </p>
            </div>
          </div>
          <CodeBox
            title="Terminal"
            code={`# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod`}
          />
        </div>
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Install the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            @netlify/plugin-nextjs
          </code>{" "}
          plugin for full Next.js support including API routes, ISR, and middleware.
        </p>
      </div>

      {/* Cloudflare Pages */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Cloudflare Pages
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Cloudflare Pages supports Next.js with the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            @cloudflare/next-on-pages
          </code>{" "}
          adapter:
        </p>
        <CodeBox
          title="Terminal"
          code={`# Install the adapter
npm install @cloudflare/next-on-pages

# Add to your package.json scripts
# "pages:build": "npx @cloudflare/next-on-pages"
# "pages:deploy": "npx wrangler pages deploy .vercel/output/static"

# Build and deploy
npm run pages:build
npm run pages:deploy`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          You can also connect your GitHub repository in the Cloudflare dashboard for
          automatic deployments on push.
        </p>
      </div>

      {/* Static export */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Static export
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          If your landing page does not need server-side features (API routes, middleware, ISR),
          you can export it as a fully static site. This produces plain HTML/CSS/JS files that
          can be hosted anywhere:
        </p>
        <CodeBox
          title="next.config.ts"
          code={`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@trinkui/react", "@trinkui/shared"],
  // Optional: set base path if not at root
  // basePath: "/landing",
};

export default nextConfig;`}
        />
        <CodeBox
          title="Terminal"
          code={`# Build static files
next build

# Output is in the "out" directory
# Upload "out/" to any static hosting provider:
# - GitHub Pages
# - AWS S3 + CloudFront
# - Firebase Hosting
# - Any web server (nginx, Apache)`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          With static export, trink-ui animations still work because they run on the client
          after hydration. The initial HTML is fully rendered for SEO.
        </p>
      </div>

      {/* Environment variables */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Environment variables
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          If your landing page uses form submissions or analytics, configure environment
          variables in your deployment platform:
        </p>
        <CodeBox
          title=".env.local (development)"
          code={`# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form submission endpoint
CONTACT_API_URL=https://api.example.com/contact

# CMS / content
NEXT_PUBLIC_SITE_URL=https://acme.com`}
        />
        <div className="mt-3 space-y-3">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Vercel</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Settings &gt; Environment Variables. Add each variable for Production, Preview, and Development.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Netlify</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Site settings &gt; Build &amp; deploy &gt; Environment. Or use{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                netlify env:set KEY value
              </code>.
            </p>
          </div>
        </div>
      </div>

      {/* Performance checklist */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Pre-launch performance checklist
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Run through this checklist before going live. Target a Lighthouse score of 95+:
        </p>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Run Lighthouse in Chrome DevTools on the production URL",
            "Verify images use next/image with proper width/height to prevent layout shift",
            "Check that only used components are imported (tree-shaking)",
            "Confirm CSS variables are loaded — no unstyled flash on initial render",
            "Test on a real mobile device, not just browser emulation",
            "Verify Open Graph image loads correctly (use og-image checker tools)",
            "Check that robots.txt and sitemap.xml are present",
            "Test page load time on 3G throttled connection",
            "Confirm all interactive elements are keyboard-accessible",
            "Verify dark mode toggle persists across page refreshes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 shrink-0 rounded border border-[rgb(var(--trinkui-border))]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Monitoring */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Post-deployment monitoring
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          After deploying, monitor your landing page&apos;s performance over time:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Vercel Analytics</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Built-in Web Vitals tracking. Enable in your Vercel project settings for real-user
              metrics (LCP, FID, CLS).
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Google Search Console</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Monitor search performance, indexing status, and Core Web Vitals from Google&apos;s
              perspective.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">PageSpeed Insights</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Run periodic checks at{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                pagespeed.web.dev
              </code>{" "}
              to catch performance regressions.
            </p>
          </div>
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">You are all set!</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Your landing page is deployed. Explore all available components to keep building.
        </p>
        <Link
          href="/docs/guides/landing-page"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Build a Landing Page
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
