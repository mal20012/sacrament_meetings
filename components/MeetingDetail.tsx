import Link from "next/link";
import type { SacramentMeeting } from "../lib/types";
import PrintButton from "./PrintButton";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

function formatMeetingDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function HymnLine({ label, hymn }: { label: string; hymn: SacramentMeeting["openingHymn"] }) {
  return (
    <p>
      <span className="font-semibold">{label}:</span> Hymn {hymn.number},{" "}
      <span className="italic">{hymn.title}</span>
    </p>
  );
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="rounded-3xl border border-[#e7dcc1] bg-white/90 p-6 shadow-sm sm:p-9">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e7dcc1] pb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#606c38]">
            {meeting.meetingType} meeting
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#283618] sm:text-4xl">
            <time dateTime={meeting.date}>{formatMeetingDate(meeting.date)}</time>
          </h1>
        </div>
        <PrintButton />
      </div>

      <dl className="grid gap-4 border-b border-[#e7dcc1] py-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold text-[#606c38]">Presiding</dt>
          <dd className="mt-1 text-[#283618]">{meeting.presiding}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[#606c38]">Conducting</dt>
          <dd className="mt-1 text-[#283618]">{meeting.conducting}</dd>
        </div>
      </dl>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="border-b border-[#e7dcc1] py-6">
          <h2 className="text-xl font-bold text-[#283618]">Announcements</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[#3d4730]">
            {meeting.announcements.map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="border-b border-[#e7dcc1] py-6">
        <h2 className="text-xl font-bold text-[#283618]">Opening</h2>
        <div className="mt-3 space-y-2 text-[#3d4730]">
          <HymnLine label="Opening hymn" hymn={meeting.openingHymn} />
          <p>
            <span className="font-semibold">Opening prayer:</span>{" "}
            {meeting.openingPrayer}
          </p>
        </div>
      </section>

      <section className="border-b border-[#e7dcc1] py-6">
        <h2 className="text-xl font-bold text-[#283618]">Ward business</h2>
        {meeting.wardBusiness.length > 0 ? (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[#3d4730]">
            {meeting.wardBusiness.map(({ description }) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-[#525b45]">No ward business scheduled.</p>
        )}
        <p className="mt-3 text-[#3d4730]">
          <span className="font-semibold">Stake business:</span>{" "}
          {meeting.stakeBusiness ? "Scheduled" : "None"}
        </p>
      </section>

      <section className="border-b border-[#e7dcc1] py-6">
        <h2 className="text-xl font-bold text-[#283618]">Sacrament</h2>
        <div className="mt-3 text-[#3d4730]">
          <HymnLine label="Sacrament hymn" hymn={meeting.sacramentHymn} />
        </div>
      </section>

      <section className="border-b border-[#e7dcc1] py-6">
        <h2 className="text-xl font-bold text-[#283618]">Speakers and music</h2>
        {meeting.speakers.length > 0 ? (
          <ol className="mt-3 space-y-4">
            {meeting.speakers.map((item, index) => (
              <li
                key={`${item.type}-${item.name}-${index}`}
                className="rounded-2xl bg-[#f8f4e9] p-4 text-[#3d4730]"
              >
                <p className="font-semibold text-[#283618]">
                  {item.type === "speaker" ? "Speaker" : "Musical number"}:{" "}
                  {item.name}
                </p>
                {item.topic && <p className="mt-1">{item.topic}</p>}
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-3 text-[#525b45]">No speakers or music scheduled.</p>
        )}
      </section>

      <section className="py-6">
        <h2 className="text-xl font-bold text-[#283618]">Closing</h2>
        <div className="mt-3 space-y-2 text-[#3d4730]">
          <HymnLine label="Closing hymn" hymn={meeting.closingHymn} />
          <p>
            <span className="font-semibold">Closing prayer:</span>{" "}
            {meeting.closingPrayer}
          </p>
        </div>
      </section>

      <Link
        href="/meetings"
        className="print-hidden inline-flex min-h-11 items-center rounded-full border border-[#606c38] px-5 py-2 font-semibold text-[#384529] hover:bg-[#f5edda] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc6c25]"
      >
        Back to all meetings
      </Link>
    </article>
  );
}
