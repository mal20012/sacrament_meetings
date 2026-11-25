"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/meetings", label: "All meetings" },
  { href: "/meetings/current", label: "This Sunday" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Meetings navigation" className="flex flex-wrap gap-2">
      {links.map(({ href, label }) => {
        const isCurrentMeeting = pathname === "/meetings/current";
        const isMeetingDetail =
          pathname !== null && /^\/meetings\/\d+$/.test(pathname);
        const isActive =
          href === "/meetings/current"
            ? isCurrentMeeting
            : pathname === "/meetings" || isMeetingDetail;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc6c25] ${
              isActive
                ? "bg-[#283618] text-[#fefae0]"
                : "bg-[#f5edda] text-[#384529] hover:bg-[#ead9b7]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
