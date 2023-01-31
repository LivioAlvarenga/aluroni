import Filter from "components/Filter";
import Header from "components/Header";
import Items from "components/Items";
import Ordenador from "components/Ordenador";
import Search from "components/Search";
import { useState } from "react";

export default function home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <Header />
      <section className="paddingDefault py-[50px]">
        <h2 className="mb-8 text-5xl text-dark">Cardápio</h2>
        <Search search={search} setSearch={setSearch} />
        <div className="mb-8 flex w-full flex-wrap items-center justify-between">
          <Filter filter={filter} setFilter={setFilter} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Items search={search} filter={filter} ordenador={ordenador} />
      </section>
    </main>
  );
}
