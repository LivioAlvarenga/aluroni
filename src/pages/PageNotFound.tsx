import backgroundPage from "assets/images/pageNotFoundBackground.webp";
import Wrapper from "components/Wrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  /* Cria um estado inicial da posição de x e y do mouse ao mouse entrar no background
  Usamos esta medida para diminuir com mouse position atual e assim suavizar o primeiro movimento */
  const [mousePositionStart, setMousePositionStart] = useState({
    x: 0,
    y: 0,
  });

  /* Criando estado para medir posição do mouse na tela*/
  const [mousePosition, setMousePosition] = useState({
    x: "0px",
    y: "0px",
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setMousePosition({
      x:
        mousePositionStart.x === 0
          ? "-1px"
          : -(e.clientX - mousePositionStart.x) / 7 + "px",
      y:
        mousePositionStart.y === 0
          ? "-1px"
          : -(e.clientY - mousePositionStart.y) / 7 + "px",
    });
  }

  return (
    <div
      className="relative h-[calc(100vh_-_104px_-_93px)] w-full overflow-hidden "
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={(e) =>
        setMousePositionStart({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <img
        style={{
          objectPosition: `${mousePosition.x} ${mousePosition.y}`,
        }}
        className="absolute top-0 -z-10 h-[calc(100vh_-_104px_-_93px)] w-full bg-gradient-to-t from-red to-lightGray object-cover"
        src={backgroundPage}
        alt="page not found"
      />
      <Wrapper className="z-50 flex h-full flex-col items-center justify-center text-white">
        <h2 className="mb-[12vh] text-[20vh] leading-4 text-redDark desktop_md:mb-[20vh] desktop_md:text-[35vh]">
          404
        </h2>
        <h1 className="mb-8 text-2xl font-bold tablet:text-4xl desktop_md:text-5xl">
          Ops! Página não encontrada.
        </h1>
        <p className="mb-8 text-center font-josefinSans text-xl tablet:text-2xl desktop_md:max-w-5xl desktop_md:text-3xl">
          Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e
          recarregue a página, ou volte para a página inicial.
        </p>
        <button
          className="cursor-pointer rounded-3xl bg-redDark px-6 py-3 text-xl tracking-wider shadow-md duration-1000 ease-in-out desktop_md:hover:bg-lightGray desktop_md:hover:px-9 desktop_md:hover:font-bold desktop_md:hover:text-redDark"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </Wrapper>
    </div>
  );
}
