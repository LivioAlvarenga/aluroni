import casa from "assets/images/casa.png";
import massa1 from "assets/images/massa1.png";
import massa2 from "assets/images/massa2.png";

const images = [massa1, massa2];

export default function About() {
  return (
    <section className="my-20 flex flex-col">
      <h2 className="mb-16 text-5xl text-dark">Sobre</h2>
      <div className="mb-16 flex gap-5">
        <img src={casa} alt="Casa Aluroni" />
        <div className="flex flex-col justify-center gap-5 py-5 font-josefinSans text-2xl tracking-normal">
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana
            Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes
            tradicionais da culinária Italiana, frescos e de excelente qualidade para que
            sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu
            gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos
            especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        {images.map((img, i) => (
          <div key={i} className="w-[600px]">
            <img src={img} alt="imagem de massa" className="w-full rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
}
