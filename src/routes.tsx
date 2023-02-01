import Footer from "components/Footer";
import Header from "components/Header";
import MenuNav from "components/MenuNav";
import Wrapper from "components/Wrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

export default function AppRouter() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Router>
        <div>
          <MenuNav />
          <Header />
        </div>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Menu />} />
          </Routes>
        </Wrapper>
        <Footer
          backgroundColor={"bg-red"}
          textColor={"text-white"}
          iconColor={"fill-white"}
          hoverIconColor={"group-hover:desktop_lg:fill-dark"}
        />
      </Router>
    </main>
  );
}
