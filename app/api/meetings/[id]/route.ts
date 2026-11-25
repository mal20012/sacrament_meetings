import { getMeetingById } from "../../../../lib/meetings-db";

interface MeetingRouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: MeetingRouteContext) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id < 1) {
    return Response.json({ error: "Meeting ID must be a positive integer." }, { status: 400 });
  }

  const meeting = getMeetingById(id);
  if (!meeting) {
    return Response.json({ error: "Meeting not found." }, { status: 404 });
  }

  return Response.json(meeting);
}
