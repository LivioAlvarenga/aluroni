import itemsMenuData from "data/itemsMenuData.json";
import { useEffect, useState } from "react";
import { ItemsMenuDataProps } from "types/itemsMenu";
import Item from "./Item";

interface ItensProps {
  search: string;
  filter: number | null;
  ordenador: string;
}

export default function Items(props: ItensProps) {
  const [list, setList] = useState(itemsMenuData);
  const { search, filter, ordenador } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i"); // i para ignorar maiúscula, minuscula etc
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  const ordenarPropriedadeCrescente = (
    lista: ItemsMenuDataProps,
    propriedade: "size" | "serving" | "price"
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  function order(newList: ItemsMenuDataProps) {
    switch (ordenador) {
      case "porcao":
        return ordenarPropriedadeCrescente(newList, "size");
      case "qtd_pessoas":
        return ordenarPropriedadeCrescente(newList, "serving");
      case "preco":
        return ordenarPropriedadeCrescente(newList, "price");
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = itemsMenuData.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(order(newList));
  }, [search, filter, ordenador]);

  return (
    <div className="flex w-full flex-col flex-wrap gap-10">
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
