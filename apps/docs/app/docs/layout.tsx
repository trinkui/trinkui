"use client";

import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { TableOfContents } from "@/components/TableOfContents";
import { PromoBanner } from "@/components/PromoBanner";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[rgb(var(--trinkui-bg))]">
      {/* Background gradient shapes */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -left-[20rem] top-[10%] h-[40rem] w-[40rem] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgb(var(--trinkui-primary)) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-[15rem] top-[60%] h-[35rem] w-[35rem] rounded-full opacity-[0.02]"
          style={{ background: "radial-gradient(circle, rgb(var(--trinkui-accent)) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        <PromoBanner />
        <TopBar />
        <div className="mx-auto max-w-[1440px] flex">
          <Sidebar />
          <main className="min-w-0 flex-1 px-10 py-10 lg:px-16">
            <div className="max-w-3xl">{children}</div>
          </main>
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
