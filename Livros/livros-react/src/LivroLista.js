import React, { useState, useEffect } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir, editar }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => editar(livro)}
        >
          Editar
        </button>
      </td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      controleLivro.obterLivros().then(livrosObtidos => {
        setLivros(Array.isArray(livrosObtidos) ? livrosObtidos : []);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  const editar = (livro) => {
    const novoTitulo = window.prompt('Novo título:', livro.titulo);
    if (novoTitulo && novoTitulo !== livro.titulo) {
      controleLivro.editar({ ...livro, titulo: novoTitulo }).then(() => setCarregado(false));
    }
  };

  return (
    <main className="container mt-4">
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Ações</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
              editar={editar}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;