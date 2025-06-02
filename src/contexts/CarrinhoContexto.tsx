import { createContext, useContext, useState, type ReactNode } from "react";
import type Produto from "../models/Produto";

interface ProdutoCarrinho extends Produto {
  quantidade: number;
}

interface CarrinhoContextType {
  carrinho: ProdutoCarrinho[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (produtoId: number) => void;
  limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
  undefined
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);

  function adicionarProduto(produto: Produto) {
    setCarrinho((prev) => {
      const index = prev.findIndex((p) => p.id === produto.id);
      if (index !== -1) {
        // Produto já está no carrinho, aumenta a quantidade
        const novoCarrinho = [...prev];
        novoCarrinho[index].quantidade += 1;
        return novoCarrinho;
      } else {
        // Produto novo, adiciona com quantidade 1
        return [...prev, { ...produto, quantidade: 1 }];
      }
    });
  }

  function removerProduto(produtoId: number) {
    setCarrinho((prev) => {
      const index = prev.findIndex((p) => p.id === produtoId);
      if (index !== -1) {
        const novoCarrinho = [...prev];
        if (novoCarrinho[index].quantidade > 1) {
          novoCarrinho[index].quantidade -= 1;
          return novoCarrinho;
        } else {
          novoCarrinho.splice(index, 1);
          return novoCarrinho;
        }
      }
      return prev;
    });
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error(
      "useCarrinho deve ser usado dentro de <CarrinhoProvider>. Verifique se o provider está no topo da árvore de componentes."
    );
  }
  return context;
}
