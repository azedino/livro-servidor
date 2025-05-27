import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivros } from "../../../classes/controle/ControleLivros"; 
import { Livro } from "../../../classes/modelo/Livro";

export const controleLivros = new ControleLivros(); 

export default (req: NextApiRequest, res: NextApiResponse) => {
  
  const requestMethod = req.method;


  switch (requestMethod) {
    case "POST":
      const { livro } = JSON.parse(req.body);
      const novoLivro = new Livro(
        livro.codigo,
        livro.editora,
        livro.titulo,
        livro.resumo,
        livro.autores
      );
      controleLivros.incluir(novoLivro);
      res.status(200).json(controleLivros.obterLivros());
      break;

    case "DELETE":
      const { codigo_livro } = JSON.parse(req.body);
      controleLivros.excluir(String(codigo_livro));
      res.status(200).json(controleLivros.obterLivros());
      break;

    default:
      res.status(200).json(controleLivros.obterLivros());
      break;
  }
};