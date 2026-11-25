import Link from "next/link";
import type { SacramentMeeting } from "../lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

function formatMeetingDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-3xl border border-[#e7dcc1] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#606c38]">
            {meeting.meetingType} meeting
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#283618]">
            <time dateTime={meeting.date}>{formatMeetingDate(meeting.date)}</time>
          </h2>
        </div>
        <span className="rounded-full bg-[#f5edda] px-3 py-1 text-sm font-medium text-[#5b482b]">
          {meeting.speakers.length} program item
          {meeting.speakers.length === 1 ? "" : "s"}
        </span>
      </div>

      <p className="mt-4 text-sm text-[#525b45]">
        Presiding: <span className="font-semibold">{meeting.presiding}</span>
      </p>
      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#606c38] px-5 py-2 font-semibold text-white hover:bg-[#4b572b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc6c25]"
      >
        View meeting agenda
        <span className="sr-only"> for {formatMeetingDate(meeting.date)}</span>
      </Link>
    </article>
  );
}
