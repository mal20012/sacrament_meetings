import MeetingCard from "../../components/MeetingCard";
import { getMeetingsApiUrl } from "../../lib/meetings-api-url";
import type { SacramentMeeting } from "../../lib/types";
import { connection } from "next/server";

export default async function MeetingsPage() {
  await connection();

  const response = await fetch(getMeetingsApiUrl("/api/meetings"), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Unable to load meetings (HTTP ${response.status}).`);
  }

  const meetings = (await response.json()) as SacramentMeeting[];

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

      {meetings.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-[#e7dcc1] bg-white/80 p-6 text-[#525b45]">
          No meeting agendas are available yet.
        </p>
      )}
    </main>
  );
}
