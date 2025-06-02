import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ListarProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import PaginaCarrinho from "./pages/PaginaCarrinho";
import { CarrinhoProvider } from "./contexts/CarrinhoContexto"; // 👈 importar o Provider

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/produto/:id" element={<ProdutoDetalhe />} />
            <Route path="/carrinho" element={<PaginaCarrinho />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;
