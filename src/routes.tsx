import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import About from "pages/about";
import DefaultPage from "pages/defaultPage";
import FoodDetail from "pages/foodDetail";
import Home from "pages/home";
import Menu from "pages/menu";
import PageNotFound from "pages/pageNotFound";
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
          <Route path="prato/:id/*" element={<FoodDetail />} />
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
