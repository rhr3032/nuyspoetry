import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-amber-200/50 bg-[rgba(255,250,240,0.85)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-stone-700 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} NUYs Poetry. All rights reserved.</p>
        <Link
          href="/login"
          className="rounded-full border border-stone-300/80 bg-white/70 px-4 py-2 text-xs font-medium text-stone-600 transition hover:bg-amber-50 hover:text-stone-900"
        >
          Admin Login
        </Link>
      </div>
    </footer>
  );
}
