import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Nuy's Poetry",
  description: "A portfolio-style portrait of the poet, their journey, themes, and literary practice.",
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(245,158,11,0.22),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(249,115,22,0.16),transparent_36%),radial-gradient(circle_at_72%_80%,rgba(14,165,233,0.14),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-600">Poet Portfolio</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] text-stone-900 md:text-6xl">
              Writing a life across memory, language, and silence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Nuy writes in Bangla and English, shaping poems and essays from longing, weather, distance,
              and the private music of inner life. This page gathers the voice, practice, and literary path
              in one portfolio-style portrait.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/writings"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Explore Writings
              </Link>
              <Link
                href="/writings?type=essay"
                className="rounded-full border border-stone-300/80 bg-white/80 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-white"
              >
                Read Essays
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Languages</p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">Bangla + English</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Forms</p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">Poems + Essays</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Practice</p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">Reading, mentoring, reflection</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md md:p-8">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/40">
              <Image
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=1200&q=80"
                alt="Poet portrait"
                width={900}
                height={1100}
                className="h-[26rem] w-full object-cover"
                priority
              />
            </div>

            <div className="mt-6 rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Artist Statement</p>
              <p className="mt-3 text-base leading-8 text-stone-700">
                The work moves between tenderness and distance, using image, place, and stillness to reveal
                what ordinary speech often leaves unnamed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Themes</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900">The emotional geography of the work</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-xl font-semibold text-stone-900">Memory and return</h3>
                <p className="mt-2 text-base leading-8 text-stone-700">
                  Recurrent images of home, roads, windows, rivers, and departure create a literature of return,
                  where memory is not static but living and unstable.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-xl font-semibold text-stone-900">Bilingual intimacy</h3>
                <p className="mt-2 text-base leading-8 text-stone-700">
                  Bangla and English do not compete here. They carry different temperatures of feeling and widen
                  the emotional range of the writing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-xl font-semibold text-stone-900">Silence and interior life</h3>
                <p className="mt-2 text-base leading-8 text-stone-700">
                  Many poems move toward quiet revelation, where meaning arrives through pause, restraint, and
                  the unsaid rather than declaration.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Journey</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900">A one-page literary profile</h2>
            <div className="mt-8 space-y-6 border-l border-stone-300/70 pl-6">
              <div className="relative">
                <span className="absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_0_6px_rgba(251,191,36,0.16)]" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Early voice</p>
                <p className="mt-2 text-base leading-8 text-stone-700">
                  Began shaping poems around place, family memory, and the small disturbances of everyday life.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.14)]" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Public literary work</p>
                <p className="mt-2 text-base leading-8 text-stone-700">
                  Contributed to journals, participated in readings, and developed a bilingual body of work with a clear lyrical identity.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_0_6px_rgba(249,115,22,0.14)]" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Current practice</p>
                <p className="mt-2 text-base leading-8 text-stone-700">
                  Continues writing poems and essays, curating language with patience, and supporting younger voices through conversation and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">Selected Focus</p>
              <h2 className="mt-4 text-3xl font-semibold text-stone-900">What this portfolio holds</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-lg font-semibold text-stone-900">Poetry</h3>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Bangla and English poems shaped by image, longing, memory, and musical restraint.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-lg font-semibold text-stone-900">Essays</h3>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Reflective prose on literature, craft, language, and the emotional labor of writing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-lg font-semibold text-stone-900">Readings</h3>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Public sharing of work through literary gatherings, conversations, and live recitation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5">
                <h3 className="text-lg font-semibold text-stone-900">Mentorship</h3>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Encouraging emerging writers through feedback, poetic dialogue, and community exchange.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/60 bg-stone-900 px-8 py-10 text-white shadow-[0_18px_50px_rgba(28,25,23,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">Next Step</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">Read the portfolio through the work itself.</h2>
              <p className="mt-3 text-base leading-8 text-stone-300">
                Move from biography to writing: browse the archive of Bangla poems, English poems, and essays.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/writings"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
              >
                Open Writings
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
