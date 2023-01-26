import React from "react";
import { CgSearch } from "react-icons/cg";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <form className="flex h-11 w-full items-center justify-between gap-5 rounded-md bg-gray px-4 tablet:w-[400px]">
      <input
        type="text"
        className="w-full border-none bg-gray text-2xl font-bold outline-none placeholder:text-black"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <CgSearch size={20} className="text-black" />
    </form>
  );
}
