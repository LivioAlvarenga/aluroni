import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import About from "pages/abouut";
import DefaultPage from "pages/defaultPage";
import Home from "pages/home";
import Menu from "pages/menu";
import PageNotFound from "pages/pageNotFoundd";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

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
          <Route path="404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
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
