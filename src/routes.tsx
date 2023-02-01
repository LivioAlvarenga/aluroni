import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import Wrapper from "components/Wrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

export default function AppRouter() {
  return (
    <Router>
      <MenuNav />
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
  );
}
