export default function MeetingsLoading() {
  return (
    <div role="status" aria-live="polite" className="space-y-5">
      <span className="sr-only">Loading meeting information...</span>
      <div className="h-10 w-64 animate-pulse rounded-lg bg-[#e7dcc1]" />
      <div className="grid gap-5 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            aria-hidden="true"
            className="h-48 animate-pulse rounded-3xl border border-[#e7dcc1] bg-white/70"
          />
        ))}
      </div>
    </div>
  );
}
