import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import DefaultPage from "pages/defaultPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

export default function AppRouter() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Router>
        <MenuNav />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
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
