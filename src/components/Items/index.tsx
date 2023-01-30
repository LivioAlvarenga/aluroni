import { useEffect, useState } from "react";
import Item from "./Item";
import itemsData from "./itemsData.json";

interface ItensProps {
  search: string;
  filter: number | null;
  ordenador: string;
}

export default function Items(props: ItensProps) {
  const [list, setList] = useState(itemsData);
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
    lista: typeof itemsData,
    propriedade: "size" | "serving" | "price"
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  function order(newList: typeof itemsData) {
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
    const newList = itemsData.filter(
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
