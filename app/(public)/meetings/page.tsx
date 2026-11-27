import { Suspense } from "react";
import MeetingCard from "../../../components/MeetingCard";
import { MeetingSearch } from "../../../components/MeetingSearch";
import { Pagination } from "../../../components/Pagination";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "../../../lib/meetings-db";

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main>
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#606c38]">
          Cedar Grove Ward
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#283618] sm:text-4xl">
          Meeting agendas
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-[#525b45]">
          Review meeting programs, announcements, and assignments.
        </p>
      </div>

      <Suspense fallback={<div className="h-16" />}>
        <MeetingSearch />
        <Pagination totalPages={totalPages} />
      </Suspense>

      {meetings.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-[#e7dcc1] bg-white/80 p-6 text-[#525b45]">
          No meeting agendas match this search.
        </p>
      )}
    </main>
  );
}
