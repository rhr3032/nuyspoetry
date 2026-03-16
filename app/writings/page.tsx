import type { Metadata } from "next";
import Link from "next/link";

import { WritingsLibrary } from "@/components/WritingsLibrary";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Writings | Nuy's Poetry",
  description: "Browse Bangla poems, English poems, and essays in one interactive library.",
};

type WritingsPageProps = {
  searchParams: Promise<{ type?: string }>;
};

type FilterKey = "all" | "bangla" | "english" | "essay";

type FilterOption = {
  key: FilterKey;
  label: string;
  subtitle: string;
  href: string;
};

const filterOptions: FilterOption[] = [
  {
    key: "all",
    label: "All Writings",
    subtitle: "Everything in one stream",
    href: "/writings",
  },
  {
    key: "bangla",
    label: "Bangla Poems",
    subtitle: "Poems in Bangla",
    href: "/writings?type=bangla",
  },
  {
    key: "english",
    label: "English Poems",
    subtitle: "Poems in English",
    href: "/writings?type=english",
  },
  {
    key: "essay",
    label: "Essays",
    subtitle: "Reflections and long-form prose",
    href: "/writings?type=essay",
  },
];

const filterTitles: Record<FilterKey, string> = {
  all: "All Writings",
  bangla: "Bangla Poems",
  english: "English Poems",
  essay: "Essays",
};

const filterDescriptions: Record<FilterKey, string> = {
  all: "A living archive of poems and essays.",
  bangla: "Bangla poems rooted in rhythm, memory, and place.",
  english: "English poems carrying lyrical intimacy and reflection.",
  essay: "Essays on writing, language, and the inner life of poetry.",
};

function parseFilter(type: string | undefined): FilterKey {
  if (type === "bangla" || type === "english" || type === "essay") {
    return type;
  }

  return "all";
}

export default async function WritingsPage({ searchParams }: WritingsPageProps) {
  const { type } = await searchParams;
  const activeFilter = parseFilter(type);

  const whereClause =
    activeFilter === "bangla"
      ? { type: "bengali_poem" as const }
      : activeFilter === "english"
        ? { type: "english_poem" as const }
        : activeFilter === "essay"
          ? { type: "article" as const }
          : {};

  const [posts, groupedCounts] = await Promise.all([
    prisma.post.findMany({
      where: whereClause,
      orderBy: { publishedDate: "desc" },
    }),
    prisma.post.groupBy({
      by: ["type"],
      _count: { _all: true },
    }),
  ]);

  const countsByType = {
    bangla: groupedCounts.find((item) => item.type === "bengali_poem")?._count._all ?? 0,
    english: groupedCounts.find((item) => item.type === "english_poem")?._count._all ?? 0,
    essay: groupedCounts.find((item) => item.type === "article")?._count._all ?? 0,
  };
  const allCount = countsByType.bangla + countsByType.english + countsByType.essay;

  const countForFilter = (key: FilterKey) => {
    if (key === "all") {
      return allCount;
    }

    if (key === "essay") {
      return countsByType.essay;
    }

    return countsByType[key];
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(251,191,36,0.26),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(14,165,233,0.16),transparent_40%),radial-gradient(circle_at_75%_78%,rgba(217,119,6,0.2),transparent_40%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="h-fit rounded-3xl border border-white/55 bg-white/45 p-4 shadow-[0_10px_45px_rgba(28,25,23,0.12)] backdrop-blur-md lg:sticky lg:top-24">
          <h2 className="px-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-600">Filter</h2>
          <div className="mt-3 space-y-2">
            {filterOptions.map((option) => {
              const isActive = option.key === activeFilter;

              return (
                <Link
                  key={option.key}
                  href={option.href}
                  className={
                    isActive
                      ? "block rounded-2xl border border-amber-300/70 bg-white/80 px-4 py-3 shadow-[0_8px_24px_rgba(245,158,11,0.2)]"
                      : "block rounded-2xl border border-white/50 bg-white/35 px-4 py-3 transition hover:border-amber-200/75 hover:bg-white/60"
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-stone-900">{option.label}</p>
                    <span className="rounded-full border border-stone-200/90 bg-white/75 px-2 py-0.5 text-xs font-medium text-stone-700">
                      {countForFilter(option.key)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-stone-600">{option.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </aside>

        <WritingsLibrary
          posts={posts}
          title={filterTitles[activeFilter]}
          description={filterDescriptions[activeFilter]}
        />
      </div>
    </section>
  );
}
