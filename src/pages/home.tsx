import { ReactComponent as Logo } from "assets/logo.svg";
import Header from "components/Header";
import Search from "components/Search";
import { useState } from "react";

export default function home() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className="py-5 paddingDefault">
        <Logo />
      </nav>
      <Header />
      <section className="py-[50px] paddingDefault">
        <h2 className="mb-8 text-5xl text-dark">Cardápio</h2>
        <Search search={search} setSearch={setSearch} />
      </section>
    </main>
  );
}
