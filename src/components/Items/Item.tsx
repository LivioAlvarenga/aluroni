import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { FoodProps } from "types/itemsMenu";

export default function Item(props: FoodProps) {
  const navigate = useNavigate();

  const { id, title, description, category, size, serving, price, photo } = props;

  return (
    <div
      onClick={() => navigate(`/prato/${id}`)}
      className="flex cursor-pointer flex-wrap overflow-hidden rounded-lg shadow-2xl transition-colors desktop_md:py-6 desktop_md:px-6 desktop_md:hover:bg-gray"
    >
      <div className="w-full overflow-hidden rounded-t-lg  shadow-2xl tablet:max-h-[400px] desktop_md:w-auto desktop_md:min-w-[240px] desktop_md:rounded-lg">
        <img
          className="w-full rounded-t-lg object-cover duration-1000 ease-in-out hover:scale-125 tablet:max-h-[400px] desktop_md:rounded-lg"
          src={photo}
          alt={title}
        />
      </div>
      <div className="mt-5 flex w-full flex-wrap justify-around p-0 px-5 desktop_md:mt-0 desktop_md:w-[700px] desktop_md:flex-col desktop_md:py-0">
        <div className="w-full">
          <h3 className="mb-5 text-[2rem] font-bold">{title}</h3>
          <p className="mb-5 font-josefinSans text-[1,3rem] font-semibold tracking-normal text-darkGray">
            {description}
          </p>
        </div>
        <div className="mb-5 flex w-full flex-wrap items-center justify-start gap-5 font-josefinSans tracking-normal tablet:justify-center desktop_md:justify-between">
          <div
            className={clsx(
              "flex h-10 items-center justify-center rounded-sm px-8 py-3 font-bold shadow-2xl",
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
