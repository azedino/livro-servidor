import React, { useEffect, useState } from "react";
import { LinhaLivro } from "../components/LinhaLivro";
import { Livro } from "../classes/modelo/Livro";
import { Menu } from "../components/Menu";
import { ControleLivros } from "../classes/controle/ControleLivros";

const controleLivros = new ControleLivros();

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            controleLivros.obterLivros().then((dados) => {
                setLivros(dados);
                setCarregado(true);
            });
        }
    }, [carregado]);

    const excluir = (codigo: string) => {
        controleLivros.excluir(codigo).then(() => setCarregado(false));
    };

    return (
        <>
            <Menu />
            <div className="container-fluid mt-4">
                <h1 className="my-4">Catálogo de Livros</h1>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Titulo</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                            <th>Editora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                            <LinhaLivro
                                key={index}
                                livro={livro}
                                excluir={() => excluir(livro.codigo)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LivroLista;