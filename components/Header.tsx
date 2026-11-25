import Link from "next/link";
import { connection } from "next/server";

function toLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default async function Header() {
  await connection();
  const today = new Date();

  return (
    <header className="site-header min-h-20 border-b border-[#e7dcc1] bg-[#fefae0]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg text-[#283618] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc6c25]"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#606c38] text-lg font-bold text-[#fefae0]"
          >
            S
          </span>
          <span>
            <span className="block font-semibold">Cedar Grove Ward</span>
            <span className="block text-xs text-[#606c38]">
              Sacrament Meeting Planner
            </span>
          </span>
        </Link>

        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#606c38]">
            Today
          </p>
          <time
            dateTime={toLocalDateString(today)}
            className="text-sm font-medium text-[#283618]"
          >
            {new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
              today,
            )}
          </time>
        </div>
      </div>
    </header>
  );
}
