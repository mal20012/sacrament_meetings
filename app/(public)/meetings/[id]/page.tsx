import MeetingDetail from "../../../../components/MeetingDetail";
import { getMeetingById } from "../../../../lib/meetings-db";
import { notFound } from "next/navigation";

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id < 1) {
    notFound();
  }

  const meeting = await getMeetingById(id);
  if (!meeting) {
    notFound();
  }

  return (
    <main>
      <MeetingDetail meeting={meeting} />
    </main>
  );
}
