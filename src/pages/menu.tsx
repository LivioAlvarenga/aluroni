import Filter from "components/Filter";
import Footer from "components/Footer";
import Header from "components/Header";
import Items from "components/Items";
import MenuNav from "components/MenuNav";
import Ordenador from "components/Ordenador";
import Search from "components/Search";
import { useState } from "react";

export default function home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <MenuNav />
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
      <Footer
        backgroundColor={"bg-red"}
        textColor={"text-white"}
        iconColor={"fill-white"}
        hoverIconColor={"group-hover:desktop_lg:fill-darkGray"}
      />
    </main>
  );
}
