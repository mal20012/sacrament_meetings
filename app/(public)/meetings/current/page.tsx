import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getMeetingsByDate } from "../../../../lib/meetings-db";

function formatLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default async function CurrentMeetingPage() {
  await connection();

  const sunday = new Date();
  sunday.setDate(sunday.getDate() - sunday.getDay());

  const meeting = (await getMeetingsByDate(formatLocalDate(sunday)))[0];
  if (!meeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${meeting.id}`);
}
