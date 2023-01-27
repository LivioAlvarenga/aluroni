import React from "react";
import { CgSearch } from "react-icons/cg";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <form className="flex w-full items-center justify-between gap-5 rounded-md bg-gray px-4 tablet:w-[400px]">
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full border-none bg-gray py-3 text-xl font-bold outline-none placeholder:text-xl placeholder:text-black"
      />
      <CgSearch size={20} className="text-black" />
    </form>
  );
}
