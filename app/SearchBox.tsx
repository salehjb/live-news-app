"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?term=${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none flex-1 bg-transparent dark:trext-orange-400"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
