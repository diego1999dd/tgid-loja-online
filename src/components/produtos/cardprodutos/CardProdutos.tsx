import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
  return (
    <div className="flex flex-col justify-between my-10 overflow-hidden bg-gray-800 rounded-lg text-white transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:rounded-2xl hover:ring-2 hover:ring-blue-700">
      <div className="">
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
          <div className="flex text-center items-center justify-center">
            {produto.plataformaImg ? (
              <img
                src={produto.plataformaImg}
                alt={produto.plataforma}
                className="h-6 m-1"
              />
            ) : null}
            <p className="text-sm italic font-medium">{produto.plataforma}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button className="flex items-center justify-center w-full py-2 text-white bg-blue-700 hover:bg-green-400">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
