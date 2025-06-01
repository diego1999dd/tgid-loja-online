import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/spiderman.jpeg"
        alt="Imagem do Homem-Aranha"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full space-y-4 px-4">
        <h2 className="text-4xl font-bold">Seja bem-vindo!</h2>
        <p className="text-xl font-medium">
          Aqui você encontra Games com os melhores preços!
        </p>
        <Link to="/produtos">
          <button className="cursor-pointer rounded-full bg-blue-600 hover:bg-green-400 hover:text-black transition delay-100 font-bold p-3 shadow-lg shadow-cyan-500/30">
            Veja os produtos
          </button>
        </Link>
      </div>

      <img
        src="/plataformas.png"
        alt="Plataformas"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 md:w-64 z-0"
      />
    </div>
  );
}

export default Home;
