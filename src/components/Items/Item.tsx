import itemsData from "./itemsData.json";

type ItemProps = (typeof itemsData)[0];

export default function Item(props: ItemProps) {
  const { title, description, category, size, serving, price } = props;
  return (
    <div className="flex w-[90%] flex-wrap">
      <div>
        <img src="" alt={title} />
      </div>
      <div>
        <div>
          <h3 className="text-5xl">{title}</h3>
          <p className="text-lg">{description}o</p>
        </div>
        <div>
          <div className="text-xl">{category.label}</div>
          <div className="text-xl">{size}g</div>
          <div className="text-xl">
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className="text-5xl">R$ {price.toFixed(2).replace(".", ",")}</div>
        </div>
      </div>
    </div>
  );
}
