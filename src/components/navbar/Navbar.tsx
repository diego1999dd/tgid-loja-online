import {
  GameControllerIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../../contexts/CarrinhoContexto";

function Navbar() {
  const { carrinho } = useCarrinho();
  const quantidadeProdutos = carrinho.length;

  return (
    <>
      <div className="flex w-full h-17 bg-gradient-to-r from-black to-gray-700 border-b-3 border-blue-500 justify-center">
        <div className="container flex p-5 justify-between">
          <Link to="/" className="flex font-bold items-center">
            <img
              src="./src/assets/extremegames.png"
              alt="logo-extreme-games"
              className="h-20 mt-3"
            />
            <h2 className="text-white font-bold ml-[-8px]">Extreme Games</h2>
          </Link>
          <div className="relative flex items-center justify-center w-2/5 text-black">
            <form className="flex items-center justify-center w-full">
              <input
                className="w-10/12 px-4 py-4 bg-gray-400 rounded-full h-9 focus:outline-none"
                placeholder="Pesquisar pelo nome do jogo"
              ></input>
            </form>
          </div>
          <div className="text-white">
            <ul className="flex space-x-3">
              <li className="relative font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2">
                <Link to="/produtos" className="flex">
                  <GameControllerIcon size={25} className="mr-1 " /> Produtos
                </Link>
              </li>
              <li>
                <UserIcon size={25} />
              </li>
              <li className="relative">
                <Link to="/carrinho">
                  <ShoppingCartIcon size={25} />
                  {quantidadeProdutos > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {quantidadeProdutos}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
