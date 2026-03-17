"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { SortKey } from "@/components/WritingsLibrary";

type FilterKey = "all" | "bangla" | "english" | "essay";

type SortOption = {
  key: SortKey;
  label: string;
};

type WritingsSortDropdownProps = {
  activeFilter: FilterKey;
  activeSort: SortKey;
  options: SortOption[];
};

export function WritingsSortDropdown({ activeFilter, activeSort, options }: WritingsSortDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (nextSort: SortKey) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeFilter === "all") {
      params.delete("type");
    } else {
      params.set("type", activeFilter);
    }

    if (nextSort === "newest") {
      params.delete("sort");
    } else {
      params.set("sort", nextSort);
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="mt-3 rounded-2xl border border-white/65 bg-white/65 p-2 shadow-[0_10px_24px_rgba(28,25,23,0.08)] backdrop-blur-md">
      <label htmlFor="writings-sort-dropdown" className="sr-only">
        Sort writings
      </label>
      <select
        id="writings-sort-dropdown"
        value={activeSort}
        onChange={(event) => handleSortChange(event.target.value as SortKey)}
        className="w-full rounded-xl border border-transparent bg-transparent px-4 py-3 text-sm text-stone-900 outline-none focus:border-amber-200 focus:bg-white/80"
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
