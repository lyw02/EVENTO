"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg px-6 outline-none bg-white/[7%] ring-accent/50 transition focus:ring-2 focus:bg-white/20"
      />
    </form>
  );
}
