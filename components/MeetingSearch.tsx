"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mb-6">
      <label
        htmlFor="meeting-search"
        className="mb-2 block text-sm font-semibold text-[#283618]"
      >
        Search meetings
      </label>
      <input
        id="meeting-search"
        type="search"
        placeholder="Search by speaker, leader, or meeting type..."
        defaultValue={searchParams.get("query") ?? ""}
        onChange={(event) => handleSearch(event.target.value)}
        aria-label="Search meetings"
        className="min-h-11 w-full rounded-full border border-[#cfc49e] bg-white px-5 text-[#283618] shadow-sm outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#bc6c25]/30"
      />
    </div>
  );
}
