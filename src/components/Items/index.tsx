import Item from "./Item";
import itemsData from "./itemsData.json";

export default function Items() {
  return (
    <div className="flex w-full flex-col flex-wrap gap-10">
      {itemsData.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
