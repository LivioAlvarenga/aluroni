import { ReactComponent as Logo } from "assets/logo.svg";
import Footer from "components/Footer";

export default function home() {
  return (
    <main>
      <nav className="px-64 py-5">
        <Logo />
      </nav>
      <Footer />
    </main>
  );
}
