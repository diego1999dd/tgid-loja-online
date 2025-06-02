import { useCarrinho } from "../contexts/CarrinhoContexto";
import { Link } from "react-router-dom";

function PaginaCarrinho() {
  const { carrinho, removerProduto, limparCarrinho } = useCarrinho();

  // Cálculo do total considerando a quantidade de cada produto
  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p className="text-center">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {carrinho.map((produto) => (
              <li
                key={produto.id}
                className="flex items-center justify-between border-b border-gray-600 pb-2"
              >
                <div className="flex-1">
                  <p className="font-semibold">
                    {produto.nome}
                    <span className="text-sm text-gray-400 ml-2">
                      (x{produto.quantidade})
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(produto.preco)}{" "}
                    cada
                  </p>
                  <p className="text-sm">{produto.plataforma}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(produto.preco * produto.quantidade)}
                  </p>
                  <button
                    className="text-red-500 hover:underline cursor-pointer"
                    onClick={() => removerProduto(produto.id)}
                    title="Remover uma unidade deste produto"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-700 pt-4">
            <h3 className="text-xl font-semibold">
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                onClick={limparCarrinho}
                disabled={carrinho.length === 0}
                className="w-full md:w-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded disabled:bg-gray-500 cursor-pointer transition-colors"
              >
                Remover Tudo
              </button>
              <button
                disabled={carrinho.length === 0}
                className="w-full md:w-auto px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded disabled:bg-gray-500 cursor-pointer transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}

      <Link to="/" className="block text-blue-400 mt-6 underline text-center">
        Voltar para a loja
      </Link>
    </div>
  );
}

export default PaginaCarrinho;
