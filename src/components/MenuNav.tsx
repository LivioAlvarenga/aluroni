import { ReactComponent as Logo } from "assets/logo.svg";
import Wrapper from "./Wrapper";

export default function MenuNav() {
  return (
    <Wrapper>
      <nav className="py-5">
        <Logo />
      </nav>
    </Wrapper>
  );
}
