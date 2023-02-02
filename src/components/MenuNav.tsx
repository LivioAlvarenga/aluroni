import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactComponent as Logo } from "assets/logo.svg";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function MenuNav() {
  const location = useLocation().pathname;

  const routes = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];

  return (
    <Wrapper>
      <NavigationMenu.Root className="flex flex-col gap-5 py-5 tablet:flex-row tablet:gap-16">
        <Logo />
        <NavigationMenu.List className="flex h-24 items-center justify-around tablet:h-full tablet:justify-center">
          {routes.map((rota, index) => (
            <NavigationMenu.Item key={index} className="h-full list-none px-5">
              <NavLink
                to={rota.to}
                className="group relative flex h-full cursor-pointer items-center justify-center text-2xl font-semibold text-dark no-underline duration-300 ease-in-out desktop_md:hover:text-darkGray"
              >
                {rota.label}
                <span
                  className={clsx("duration-300 ease-in-out", {
                    ["absolute bottom-5 h-1 w-[calc(100%_-_30%)] rounded-3xl bg-red tablet:bottom-1 group-hover:desktop_lg:bg-dark"]:
                      location === rota.to,
                  })}
                ></span>
              </NavLink>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Wrapper>
  );
}
