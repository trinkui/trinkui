"use client";

import { useState } from "react";
import Link from "next/link";

function PaginationFlatDemo() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 10;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    pages.push(1);
    if (activePage > 3) pages.push("...");
    for (let i = Math.max(2, activePage - 1); i <= Math.min(totalPages - 1, activePage + 1); i++) {
      pages.push(i);
    }
    if (activePage < totalPages - 2) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  return (
    <nav className="flex items-center gap-1" aria-label="Pagination">
      <button
        onClick={() => setActivePage((p) => Math.max(1, p - 1))}
        disabled={activePage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        &larr;
      </button>
      {getPageNumbers().map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="flex h-9 w-9 items-center justify-center text-sm text-[rgb(var(--trinkui-muted))]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setActivePage(page as number)}
            aria-current={activePage === page ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm transition-colors ${
              activePage === page
                ? "bg-[rgb(var(--trinkui-primary))] font-medium text-[rgb(var(--trinkui-primary-fg))]"
                : "text-[rgb(var(--trinkui-muted))] hover:bg-[rgb(var(--trinkui-secondary))]"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
        disabled={activePage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        &rarr;
      </button>
    </nav>
  );
}

function PaginationBorderedDemo() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 10;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    pages.push(1);
    if (activePage > 3) pages.push("...");
    for (let i = Math.max(2, activePage - 1); i <= Math.min(totalPages - 1, activePage + 1); i++) {
      pages.push(i);
    }
    if (activePage < totalPages - 2) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  return (
    <nav className="flex items-center gap-1" aria-label="Bordered pagination">
      <button
        onClick={() => setActivePage((p) => Math.max(1, p - 1))}
        disabled={activePage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        &larr;
      </button>
      {getPageNumbers().map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="flex h-9 w-9 items-center justify-center text-sm text-[rgb(var(--trinkui-muted))]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setActivePage(page as number)}
            aria-current={activePage === page ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm transition-colors ${
              activePage === page
                ? "border-2 border-[rgb(var(--trinkui-primary))] font-medium text-[rgb(var(--trinkui-primary))]"
                : "border border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:bg-[rgb(var(--trinkui-secondary))]"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
        disabled={activePage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        &rarr;
      </button>
    </nav>
  );
}

export default function PaginationPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Pagination</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Page navigation component for splitting content across multiple pages. Supports boundaries, sibling count, and navigation controls.
        </p>
      </div>

      {/* Live Demo: Flat Variant */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Live Demo - Flat</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Click page numbers or arrows to navigate. Active page is highlighted with a filled background. Ellipsis appears for page gaps.
        </p>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="flex justify-center">
            <PaginationFlatDemo />
          </div>
        </div>
      </section>

      {/* Live Demo: Bordered Variant */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Live Demo - Bordered</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Bordered variant uses outlined buttons with a primary border on the active page.
        </p>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="flex justify-center">
            <PaginationBorderedDemo />
          </div>
        </div>
      </section>

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Import</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>{`import { Pagination } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex items-center justify-center p-8">
            <nav className="flex items-center gap-1" aria-label="Pagination">
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]" aria-label="Previous page">&larr;</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">1</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">2</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] text-sm font-medium text-[rgb(var(--trinkui-primary-fg))]">3</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">4</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">5</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]" aria-label="Next page">&rarr;</button>
            </nav>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Pagination total={10} defaultPage={3} showControls />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col items-center gap-6 p-8">
            {/* Flat */}
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Flat</p>
              <nav className="flex items-center gap-1" aria-label="Flat pagination">
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">1</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] text-sm font-medium text-[rgb(var(--trinkui-primary-fg))]">2</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">3</button>
              </nav>
            </div>
            {/* Bordered */}
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Bordered</p>
              <nav className="flex items-center gap-1" aria-label="Bordered pagination">
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">1</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] border-2 border-[rgb(var(--trinkui-primary))] text-sm font-medium text-[rgb(var(--trinkui-primary))]">2</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">3</button>
              </nav>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Pagination variant="flat" total={10} defaultPage={2} />
<Pagination variant="bordered" total={10} defaultPage={2} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col items-center gap-6 p-8">
            {/* sm */}
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Small</p>
              <nav className="flex items-center gap-1" aria-label="Small pagination">
                <button className="flex h-7 w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] text-xs text-[rgb(var(--trinkui-muted))]">1</button>
                <button className="flex h-7 w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">2</button>
                <button className="flex h-7 w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] text-xs text-[rgb(var(--trinkui-muted))]">3</button>
              </nav>
            </div>
            {/* md */}
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Medium</p>
              <nav className="flex items-center gap-1" aria-label="Medium pagination">
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))]">1</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] text-sm font-medium text-[rgb(var(--trinkui-primary-fg))]">2</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-[var(--trinkui-radius-md)] text-sm text-[rgb(var(--trinkui-muted))]">3</button>
              </nav>
            </div>
            {/* lg */}
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Large</p>
              <nav className="flex items-center gap-1" aria-label="Large pagination">
                <button className="flex h-11 w-11 items-center justify-center rounded-[var(--trinkui-radius-md)] text-base text-[rgb(var(--trinkui-muted))]">1</button>
                <button className="flex h-11 w-11 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] text-base font-medium text-[rgb(var(--trinkui-primary-fg))]">2</button>
                <button className="flex h-11 w-11 items-center justify-center rounded-[var(--trinkui-radius-md)] text-base text-[rgb(var(--trinkui-muted))]">3</button>
              </nav>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Pagination size="sm" total={10} defaultPage={2} />
<Pagination size="md" total={10} defaultPage={2} />
<Pagination size="lg" total={10} defaultPage={2} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-x-auto rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Prop</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Type</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Default</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">total</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Total number of pages</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">page</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Controlled active page</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">defaultPage</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">1</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Initial active page (uncontrolled)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onChange</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(page: number) =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when active page changes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">siblings</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">1</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Number of page buttons on each side of the active page</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">boundaries</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">1</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Number of page buttons at the start and end</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">showControls</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Show previous and next arrow buttons</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"flat" | "bordered"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"flat"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Visual style of the page buttons</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the page buttons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Wrapped in a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;nav&gt;</code> element with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label=&quot;Pagination&quot;</code>.</li>
          <li>Active page button has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-current=&quot;page&quot;</code>.</li>
          <li>Previous/Next controls have descriptive <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code> attributes.</li>
          <li>Full keyboard navigation with focus-visible ring styles.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/navbar-simple"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Navbar
        </Link>
        <Link
          href="/components/popover"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Popover <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
