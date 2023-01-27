import { ReactComponent as Logo } from "assets/logo.svg";
import Filter from "components/Filter";
import Header from "components/Header";
import Search from "components/Search";
import { useState } from "react";

export default function home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <main>
      <nav className="paddingDefault py-5">
        <Logo />
      </nav>
      <Header />
      <section className="paddingDefault py-[50px]">
        <h2 className="mb-8 text-5xl text-dark">Cardápio</h2>
        <Search search={search} setSearch={setSearch} />
        <div className="mb-8 flex w-full flex-wrap items-center justify-between">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </section>
    </main>
  );
}
