import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Nuy's Poetry",
  description: "Professional contact page for readings, collaborations, workshops, essays, and literary events.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(245,158,11,0.2),transparent_34%),radial-gradient(circle_at_86%_16%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_76%_80%,rgba(249,115,22,0.14),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Contact</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.08] text-stone-900 md:text-6xl">
                Let&apos;s talk about poems, essays, readings, and literary work.
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                Use the contact form for collaborations, magazine features, event invitations, interviews,
                workshops, or thoughtful correspondence about the writing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_14px_38px_rgba(28,25,23,0.1)] backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Email</p>
                <a href="mailto:poet@example.com" className="mt-3 block text-xl font-semibold text-stone-900 hover:text-stone-700">
                  poet@example.com
                </a>
                <p className="mt-3 text-sm leading-7 text-stone-600">Best for formal inquiries, invitations, editorial communication, and event coordination.</p>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_14px_38px_rgba(28,25,23,0.1)] backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Response Window</p>
                <p className="mt-3 text-xl font-semibold text-stone-900">Usually within 2-4 days</p>
                <p className="mt-3 text-sm leading-7 text-stone-600">For time-sensitive requests, mention the event date or publication deadline in the subject line.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Social Links</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <a
                  href="https://facebook.com/nuyspoetry"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/70 bg-white/60 p-5 transition hover:bg-white/80"
                >
                  <p className="text-sm font-semibold text-stone-900">Facebook</p>
                  <p className="mt-2 text-sm text-stone-600">Updates, literary notes, and community posts</p>
                </a>
                <a
                  href="https://instagram.com/nuyspoetry"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/70 bg-white/60 p-5 transition hover:bg-white/80"
                >
                  <p className="text-sm font-semibold text-stone-900">Instagram</p>
                  <p className="mt-2 text-sm text-stone-600">Visual fragments, lines, and everyday poetics</p>
                </a>
                <a
                  href="https://x.com/nuyspoetry"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/70 bg-white/60 p-5 transition hover:bg-white/80"
                >
                  <p className="text-sm font-semibold text-stone-900">X</p>
                  <p className="mt-2 text-sm text-stone-600">Announcements, links, and public conversations</p>
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
