import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { useCarrinho } from "../../../contexts/CarrinhoContexto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useCarrinho();

  return (
    <div className="flex flex-col justify-between my-10 overflow-hidden bg-gray-800 rounded-lg text-white transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:rounded-2xl hover:ring-2 hover:ring-blue-700">
      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.foto}
          className="w-full h-40 object-cover"
          alt={produto.nome}
        />
        <div className="p-4">
          <p className="text-sm text-center uppercase font-medium">
            {produto.nome}
          </p>
          <h3 className="text-xl font-bold text-center uppercase">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </h3>
          <div className="flex flex-col text-center items-center justify-center">
            {produto.plataformaImg ? (
              <img
                src={produto.plataformaImg}
                alt={produto.plataforma}
                className="h-6 m-1"
              />
            ) : null}
            <p className="text-sm italic font-medium mb-1">
              {produto.plataforma}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Clique e veja as informações
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-wrap">
        <button
          className="flex items-center justify-center w-full py-2 text-white bg-blue-700 hover:bg-green-400 cursor-pointer "
          onClick={() => adicionarProduto(produto)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
