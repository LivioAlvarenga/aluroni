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
      <NavigationMenu.Root className="flex gap-16 py-5 ">
        <Logo />
        <NavigationMenu.List className="flex h-full items-center justify-center">
          {routes.map((rota, index) => (
            <NavigationMenu.Item key={index} className="h-full list-none px-5">
              <NavLink
                to={rota.to}
                className="group relative flex h-full cursor-pointer items-center justify-center text-2xl font-semibold text-dark no-underline duration-300 ease-in-out hover:text-darkGray"
              >
                {rota.label}
                <span
                  className={clsx("duration-300 ease-in-out", {
                    ["desktop_md:absolute desktop_md:bottom-1 desktop_md:h-1 desktop_md:w-[calc(100%_-_30%)] desktop_md:rounded-3xl desktop_md:bg-red group-hover:desktop_md:bg-dark"]:
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
