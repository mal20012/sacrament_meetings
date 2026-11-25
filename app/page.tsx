import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-10 sm:py-16">
      <section className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-[#ded1b2] bg-gradient-to-br from-[#606c38] to-[#283618] p-7 text-[#fefae0] shadow-[0_30px_90px_rgba(40,54,24,0.15)] sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e7d8ab]">
            Cedar Grove Ward
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Gather in faith. Worship together.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#f1ecd9]">
            Find this Sunday&apos;s program, review upcoming meeting agendas, and
            prepare to join in worship and fellowship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/meetings/current"
              className="inline-flex min-h-12 items-center rounded-full bg-[#dda15e] px-6 py-3 font-semibold text-[#283618] hover:bg-[#e9b879] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fefae0]"
            >
              View this Sunday&apos;s meeting
            </Link>
            <Link
              href="/meetings"
              className="inline-flex min-h-12 items-center rounded-full border border-[#fefae0]/70 px-6 py-3 font-semibold text-[#fefae0] hover:bg-[#fefae0]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fefae0]"
            >
              Browse all agendas
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/meeting-house.svg"
            alt="Illustration of a meetinghouse among rolling hills"
            width={640}
            height={520}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="grid gap-4 py-8 sm:grid-cols-3 sm:py-10">
        {[
          ["Worship", "A reverent, welcoming Sunday gathering."],
          ["Connect", "Share fellowship with ward members."],
          ["Prepare", "Review the agenda before you arrive."],
        ].map(([title, description]) => (
          <article
            key={title}
            className="rounded-2xl border border-[#e7dcc1] bg-[#fffdf7] p-5"
          >
            <h2 className="text-xl font-bold text-[#283618]">{title}</h2>
            <p className="mt-2 leading-6 text-[#525b45]">{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
