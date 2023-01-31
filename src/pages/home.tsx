import Wrapper from "components/Wrapper";
import itemsMenuData from "data/itemsMenuData.json";

export default function home() {
  let recommendedFood = [...itemsMenuData];
  recommendedFood = recommendedFood.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <Wrapper>
      <section>
        <h2 className="mb-8 text-5xl tracking-wider text-dark">
          Recomendações da cozinha
        </h2>
        <div className="flex flex-wrap justify-between gap-8 rounded-sm">
          {recommendedFood.map((food) => (
            <div key={food.id}>
              <div className="mb-3 w-[300px] overflow-hidden rounded-lg">
                <img
                  src={food.photo}
                  alt={food.title}
                  className="w-full rounded-lg duration-1000 ease-in-out hover:scale-125"
                />
              </div>
              <button className="w-full cursor-pointer rounded-md border-none bg-red py-3 text-xl font-bold tracking-wider text-white duration-500 ease-in-out hover:bg-redDark">
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
