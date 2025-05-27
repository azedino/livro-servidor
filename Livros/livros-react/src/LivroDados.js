import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleEditora } from "./controle/ControleEditora"
import { ControleLivros } from "./controle/ControleLivros";

const LivroDados = () => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split("\n"),
            codEditora,
        };

        controleLivro.incluir(novoLivro);
        navigate("/");
    };

    return (
        <main className="container">
            <h1>Cadastrar Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores (um por linha)</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select
                        className="form-select"
                        value={codEditora}
                        onChange={tratarCombo}
                        required
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </main>
    );
};

export default LivroDados;