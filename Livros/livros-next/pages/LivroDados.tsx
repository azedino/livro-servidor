import { Menu } from "@/components/Menu";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ControleLivros } from "../classes/controle/ControleLivros";

const controleLivros = new ControleLivros();

const LivroDados: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);
  const router = useRouter();

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!titulo || !resumo || !autores || codEditora <= 0) {
      alert("Por favor, preencha todos os campos corretamente");
      return;
    }

    const livro = {
      codigo: '',
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };

    controleLivros.incluir(livro).then(() => {
      router.push('/LivroLista');
    });
  };

  return (
    <>
      <Menu />
      <main className="container">
        <h1 className="my-4">Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">Resumo</label>
            <textarea className="form-control" id="Resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">Autores</label>
            <textarea className="form-control" id="Autores" value={autores} onChange={(e) => setAutores(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="editoras" className="form-label">Editora</label>
            <input
              className="form-control"
              type="number"
              id="editoras"
              value={codEditora > 0 ? codEditora : ''}
              onChange={(e) => setCodEditora(Number(e.target.value))}
              required />
          </div>
          <button type="submit" className="btn btn-primary m-1">Salvar Dados</button>
        </form>
      </main>    
    </>
  )
};

export default LivroDados;