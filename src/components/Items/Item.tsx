import clsx from "clsx";
import itemsData from "./itemsData.json";

type ItemProps = (typeof itemsData)[0];

export default function Item(props: ItemProps) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className="flex w-[90%] flex-wrap">
      <div className="w-full desktop_md:w-auto desktop_md:min-w-[240px]">
        <img className="w-full rounded-lg" src={photo} alt={title} />
      </div>
      <div className="mt-5 flex flex-1 flex-row flex-wrap justify-around p-0 px-5 desktop_md:mt-0 desktop_md:flex-col desktop_md:px-5 desktop_md:py-0">
        <div>
          <h3 className="mb-5 text-[2rem] font-bold tracking-wider">{title}</h3>
          <p className="mb-5 max-w-[600px] text-[1,3rem] font-semibold tracking-wider text-darkGray">
            {description}
          </p>
        </div>
        <div className="mb-5 flex max-w-[700px] flex-wrap justify-start tablet:justify-end desktop_md:justify-between">
          <div
            className={clsx(
              "m-[10px] flex h-10 items-center justify-center rounded-sm px-8 py-3 font-bold tracking-wider",
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
          <div className="m-[10px] flex items-center justify-center text-xl font-bold tracking-wider">
            {size}g
          </div>
          <div className="m-[10px] flex items-center justify-center text-xl font-bold tracking-wider">
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className="m-[10px] flex items-center justify-center text-[1.7rem] font-bold tracking-wider text-red">
            R$ {price.toFixed(2).replace(".", ",")}
          </div>
        </div>
      </div>
    </div>
  );
}
