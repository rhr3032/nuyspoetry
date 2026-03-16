"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V20a.5.5 0 00.5.5h5v-5h4v5h5a.5.5 0 00.5-.5v-9.5" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5">
        <circle cx="12" cy="8" r="3.5" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20c0-4 3.358-7 7.5-7s7.5 3 7.5 7" />
      </svg>
    ),
  },
  {
    href: "/writings",
    label: "Writings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-8a2.25 2.25 0 00-2.25-2.25h-10.5A2.25 2.25 0 004.5 6.25v12a2.25 2.25 0 002.25 2.25h4.5M8 10h8M8 14h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18.5l1.5 1.5 3-3" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m20.25 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m20.25 0l-10.125 6.75L2.25 6.75" />
      </svg>
    ),
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/60 bg-white/30 px-3 py-2.5 shadow-[0_8px_40px_rgba(28,25,23,0.18),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl">
        {/* Brand capsule */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 shadow-[0_4px_14px_rgba(28,25,23,0.35)] transition hover:bg-stone-700"
        >
          <span className="text-sm font-semibold tracking-wide text-white">Nuy&apos;s Poetry</span>
        </Link>

        {/* Divider */}
        <span className="mx-1 h-6 w-px bg-stone-300/60" />

        {/* Nav items */}
        {navLinks.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-stone-900 shadow-[0_2px_10px_rgba(28,25,23,0.12)] transition"
                  : "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-white/55 hover:text-stone-900"
              }
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
