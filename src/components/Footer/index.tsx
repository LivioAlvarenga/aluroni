import Wrapper from "../Wrapper";
import icons from "./iconLink.json";
import IconList from "./IconList";

interface FooterProps {
  backgroundColor: string;
  textColor: string;
  iconColor: string;
  hoverIconColor: string;
}

export default function Footer({
  backgroundColor,
  textColor,
  iconColor,
  hoverIconColor,
}: FooterProps) {
  return (
    <footer className={`w-full text-base ${backgroundColor} ${textColor}`}>
      <Wrapper>
        <div className="lg:justify-between flex flex-wrap items-center justify-center gap-5 py-7">
          <IconList icons={icons} iconColor={iconColor} hoverIconColor={hoverIconColor} />

          <p className="">
            Desenvolvido por{" "}
            <a
              className="font-bold"
              href="https://www.livioalvarenga.com"
              target="_blank"
              rel="noreferrer"
              title="Portfolio Livio Alvarenga"
            >
              Livio Alvarenga
            </a>
            .
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
