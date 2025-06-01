import { useState } from "react";
import { useParams } from "react-router-dom";
import produtosData from "../data/dbTeste.json";
import type Produto from "../models/Produto";
import { SealCheckIcon, StarIcon, SparkleIcon } from "@phosphor-icons/react";

const lista: Produto[] = produtosData.produtos;

function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = lista.find((p) => p.id === Number(id));
  const [starClicked, setStarClicked] = useState<boolean>(false);

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto my-20 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-36">
        <div>
          <img
            src={produto.foto}
            alt={produto.nome}
            className="md:w-[400px] mb-4 rounded shadow-lg ml-64"
          />
        </div>
        <div className="flex flex-col text-white text-center items-center justify-center backdrop-invert backdrop-opacity-10 p-8 rounded shadow-lg min-w-[450px]">
          <h2 className="text-4xl font-bold mb-2">{produto.nome}</h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center ">
              {produto.plataformaImg && (
                <img
                  src={produto.plataformaImg}
                  alt={produto.plataforma}
                  className="w-12 my-2"
                />
              )}
              <p className="font-medium ml-2">
                Plataforma: {produto.plataforma}
              </p>
            </div>
            <div className="flex flex-row items-center mt-2 text-2xl">
              <SealCheckIcon
                size={30}
                color="#43fa00"
                weight="bold"
                className="mx-2"
              />
              <span className="text-black font-medium">Em estoque!</span>
            </div>
          </div>
          <p className="text-3xl font-semibold mt-4">
            Preço:{" "}
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </p>
          <div className="pt-10 flex">
            <div
              onClick={() => setStarClicked(true)}
              className="cursor-pointer mr-2 transition-transform duration-300"
              aria-label="Favoritar"
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") setStarClicked(true);
              }}
            >
              {!starClicked ? (
                <StarIcon
                  size={50}
                  color="#43fa00"
                  weight="bold"
                  className="cursor-pointer"
                />
              ) : (
                <SparkleIcon
                  size={50}
                  color="#43fa00"
                  weight="bold"
                  className="animate-bounce"
                />
              )}
            </div>
            <button className="flex items-center justify-center px-8 py-3 rounded-full text-white font-medium bg-blue-700 hover:bg-green-400 hover:text-black transition delay-100 cursor-pointer">
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full text-white">
        <div className="flex-1 text-left md:ml-64">
          <h3 className="font-bold text-xl mb-2">Descrição:</h3>
          <p>{produto.descricao}</p>
        </div>
        <div className="flex-1 text-right mr-72">
          <h3 className="font-bold text-xl mb-2">Desenvolvedora:</h3>
          <p>{produto.desenvolvedora}</p>
          <h3 className="font-bold text-xl mb-2">Gênero:</h3>
          <p>{produto.genero}</p>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetalhe;
