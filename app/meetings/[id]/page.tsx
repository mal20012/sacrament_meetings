import MeetingDetail from "../../../components/MeetingDetail";
import { getMeetingsApiUrl } from "../../../lib/meetings-api-url";
import type { SacramentMeeting } from "../../../lib/types";
import { notFound } from "next/navigation";
import { connection } from "next/server";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingPage({ params }: MeetingPageProps) {
  await connection();

  const { id } = await params;
  const response = await fetch(
    getMeetingsApiUrl(`/api/meetings/${encodeURIComponent(id)}`),
    { cache: "no-store" },
  );

  if (response.status === 400 || response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error(`Unable to load meeting (HTTP ${response.status}).`);
  }

  const meeting = (await response.json()) as SacramentMeeting;

  return <main><MeetingDetail meeting={meeting} /></main>;
}
