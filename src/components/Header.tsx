import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <header className="flex items-center bg-header bg-cover bg-no-repeat py-0">
      <Wrapper>
        <h1 className="w-2/5 min-w-[400px] text-[5rem] text-white">
          A casa do código e da massa
        </h1>
      </Wrapper>
    </header>
  );
}
