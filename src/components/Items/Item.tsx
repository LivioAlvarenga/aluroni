import clsx from "clsx";
import itemsMenuData from "data/itemsMenuData.json";

type ItemProps = (typeof itemsMenuData)[0];

export default function Item(props: ItemProps) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="w-full overflow-hidden rounded-lg desktop_md:w-auto desktop_md:min-w-[240px]">
        <img
          className="w-full rounded-lg duration-1000 ease-in-out hover:scale-125"
          src={photo}
          alt={title}
        />
      </div>
      <div className="mt-5 flex max-w-[700px]  flex-wrap justify-around p-0 desktop_md:mt-0 desktop_md:flex-col desktop_md:px-5 desktop_md:py-0">
        <div>
          <h3 className="mb-5 text-[2rem] font-bold">{title}</h3>
          <p className="mb-5 font-josefinSans text-[1,3rem] tracking-normal font-semibold text-darkGray">{description}</p>
        </div>
        <div className="mb-5 font-josefinSans tracking-normal flex flex-wrap items-center justify-start desktop_md:justify-between">
          <div
            className={clsx(
              "flex h-10 items-center justify-center rounded-sm px-8 py-3 font-bold",
              {
                [" bg-massas text-white"]: category.label.toLowerCase() === "massas",
                [" bg-carnes text-white"]: category.label.toLowerCase() === "carnes",
                [" bg-combos"]: category.label.toLowerCase() === "combos",
                [" bg-veganos"]: category.label.toLowerCase() === "veganos",
              }
            )}
          >
            {category.label}
          </div>
          <div className="flex items-center justify-center text-xl font-bold">
            {size}g
          </div>
          <div className="flex items-center justify-center text-xl font-bold">
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className="flex items-center justify-center text-[1.7rem] font-bold text-red">
            R$ {price.toFixed(2).replace(".", ",")}
          </div>
        </div>
      </div>
    </div>
  );
}
