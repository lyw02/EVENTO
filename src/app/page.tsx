import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tighter">
        Find events around you
      </h1>
      <p className="mb-12 mt-7 text-2xl opacity-75">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <form className="w-full sm:w-[580px]">
        <input
          placeholder="Search events in any city..."
          spellCheck={false}
          className="w-full h-16 rounded-lg px-6 outline-none bg-white/[7%] ring-accent/50 transition fucus:ring-2 focus:bg-white/20"
        />
      </form>

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
