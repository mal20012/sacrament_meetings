import { Suspense } from "react";
import NavLinks from "../../components/NavLinks";

export default function MeetingsLayout({
  children,
}: LayoutProps<"/meetings">) {
  return (
    <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 sm:py-10">
      <div className="print-hidden mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[#e7dcc1] pb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#606c38]">
          Meeting planner
        </p>
        <Suspense
          fallback={
            <nav aria-label="Meetings navigation" className="h-10 w-48" />
          }
        >
          <NavLinks />
        </Suspense>
      </div>
      {children}
    </section>
  );
}
