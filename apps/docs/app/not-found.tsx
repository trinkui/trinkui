import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-[rgb(var(--trinkui-primary))]">404</h1>
      <p className="text-xl text-[rgb(var(--trinkui-fg))]">Page not found</p>
      <p className="text-[rgb(var(--trinkui-muted))]">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
