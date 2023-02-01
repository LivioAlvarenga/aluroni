import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import About from "pages/About";
import DefaultPage from "pages/DefaultPage";
import Home from "pages/Home";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Router>
        <MenuNav />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
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
