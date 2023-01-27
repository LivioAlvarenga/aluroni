import * as Menubar from "@radix-ui/react-menubar";
import clsx from "clsx";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import orderData from "./orderData.json";

interface OrdenadorProps {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {
  const [open, setOpen] = useState(false);
  const [ordenadorName, setOrdenadorName] = useState("Ordenar por");

  function handleOpen(event: any) {
    if (event.target.getAttribute("data-name") !== "TriggerBnt") {
      setOpen(!open);
    }
  }

  function handleOrdenadorName(name: string, value: string) {
    setOrdenadorName(name === "" ? "Ordenar por" : name);
    setOrdenador(value);
  }

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger
          onClick={() => setOpen(!open)}
          data-name="TriggerBnt"
          className={clsx(
            "flex min-w-[240px] items-center justify-between rounded-md bg-gray py-3 px-4 text-xl font-bold tracking-wider transition-all hover:cursor-pointer hover:bg-blue hover:text-white",
            {
              ["bg-blue text-white"]: open,
            }
          )}
        >
          {ordenadorName}
          {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            align="start"
            sideOffset={5}
            alignOffset={-3}
            onPointerDownOutside={(event) => handleOpen(event)}
            onEscapeKeyDown={() => setOpen(!open)}
            className="mt-1 ml-1 flex min-w-[240px] flex-col gap-1 rounded-md bg-gray"
          >
            {orderData.map((data) => {
              return (
                <Menubar.Item
                  key={data.value}
                  data-name=""
                  onClick={(event) => handleOpen(event)}
                  onSelect={() => handleOrdenadorName(data.nome, data.value)}
                  className={clsx(
                    "flex min-h-[50px] rounded-md py-3 pl-6 text-xl font-bold tracking-wider transition-colors hover:cursor-pointer hover:bg-darkGray hover:text-white",
                    {
                      ["bg-blue text-white"]: ordenador === data.value,
                    }
                  )}
                >
                  {data.nome}
                </Menubar.Item>
              );
            })}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
