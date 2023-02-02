import clsx from "clsx";
import Wrapper from "components/Wrapper";
import itemsMenuData from "data/itemsMenuData.json";
import { useNavigate, useParams } from "react-router-dom";

export default function FoodDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const food = itemsMenuData.find((item) => item.id === Number(id));
  if (!food) {
    return "";
  }

  return (
    <Wrapper className="overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="my-8 block cursor-pointer rounded-lg border-none bg-transparent py-2 text-2xl font-bold text-red duration-500 ease-in-out hover:bg-red hover:text-white desktop_md:min-w-[152px] desktop_md:px-3 desktop_md:py-3"
      >
        {"< Voltar"}
      </button>
      <section className="flex w-full flex-col gap-8 tablet:gap-10 desktop_md:mb-10 desktop_md:flex-row desktop_md:gap-11">
        <h1 className="text-5xl font-bold desktop_md:hidden">{food.title}</h1>
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={food.photo}
            alt="food.title"
            className="w-full rounded-lg duration-1000 ease-in-out desktop_md:hover:scale-125"
          />
        </div>

        <div className="mb-8 flex w-full flex-col gap-5 tablet:mb-11 tablet:gap-10 desktop_md:mb-0 desktop_md:gap-10">
          <h1 className="hidden text-5xl font-bold desktop_md:block">{food.title}</h1>
          <p className="font-josefinSans text-2xl font-semibold tracking-normal text-darkestGray desktop_md:text-3xl">
            {food.description}
          </p>
          <div className="flex w-full flex-wrap items-center justify-start gap-5 font-josefinSans tracking-normal tablet:justify-center tablet:gap-8 desktop_md:justify-between">
            <div
              className={clsx(
                "flex h-10 items-center justify-center rounded-sm px-8 py-3 font-bold desktop_md:text-xl",
                {
                  [" bg-massas text-white"]:
                    food.category.label.toLowerCase() === "massas",
                  [" bg-carnes text-white"]:
                    food.category.label.toLowerCase() === "carnes",
                  [" bg-combos"]: food.category.label.toLowerCase() === "combos",
                  [" bg-veganos"]: food.category.label.toLowerCase() === "veganos",
                }
              )}
            >
              {food.category.label}
            </div>
            <div className="flex items-center justify-center text-xl font-bold desktop_md:text-2xl">
              {food.size}g
            </div>
            <div className="flex items-center justify-center text-xl font-bold desktop_md:text-2xl">
              Serve {food.serving} pessoa{food.serving === 1 ? "" : "s"}
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-red">
              R$ {food.price.toFixed(2).replace(".", ",")}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
