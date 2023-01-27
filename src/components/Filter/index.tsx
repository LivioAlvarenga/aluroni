import clsx from "clsx";
import React from "react";
import filterData from "./filterData.json";

interface FilterDataProps {
  label: string;
  id: number;
}

interface FilterProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  function handleSelectFilter(option: FilterDataProps) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className="my-5 flex flex-wrap gap-6">
      {filterData.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSelectFilter(option)}
          className={clsx(
            "flex w-[150px] items-center justify-center rounded-md border-none bg-gray py-3 text-xl font-bold tracking-wider hover:cursor-pointer",
            {
              ["bg-blue text-white"]: filter === option.id,
            }
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
