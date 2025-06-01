const baseURL = "http://localhost:3001";

export const listar = async (url: string, setDados: Function) => {
  try {
    const resposta = await fetch(`${baseURL}${url}`);
    const data = await resposta.json();
    setDados(data);
  } catch (error) {
    console.log("Erro na requisição:", error);
  }
};
