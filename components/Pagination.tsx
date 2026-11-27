"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  const createHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `/meetings?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  const previousDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <nav
      aria-label="Meeting list pagination"
      className="mt-8 flex items-center justify-center gap-3"
    >
      {previousDisabled ? (
        <span
          aria-disabled="true"
          className="min-h-11 rounded-full border border-[#d9cfad] px-4 py-2 text-[#858777]"
        >
          Previous
        </span>
      ) : (
        <Link
          href={createHref(currentPage - 1)}
          className="min-h-11 rounded-full border border-[#606c38] px-4 py-2 font-semibold text-[#283618] hover:bg-[#f5edda] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc6c25]"
        >
          Previous
        </Link>
      )}

      <span
        aria-live="polite"
        className="text-sm font-semibold text-[#283618]"
      >
        Page {currentPage} of {totalPages}
      </span>

      {nextDisabled ? (
        <span
          aria-disabled="true"
          className="min-h-11 rounded-full border border-[#d9cfad] px-4 py-2 text-[#858777]"
        >
          Next
        </span>
      ) : (
        <Link
          href={createHref(currentPage + 1)}
          className="min-h-11 rounded-full border border-[#606c38] px-4 py-2 font-semibold text-[#283618] hover:bg-[#f5edda] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc6c25]"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
