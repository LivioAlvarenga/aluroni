import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";

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
