import { Livro } from '../modelo/Livro';

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id?: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

export class ControleLivros {

    async obterLivros(): Promise<Livro[]> {
        const resposta = await fetch(baseURL);
        const livrosMongo: LivroMongo[] = await resposta.json();
        return livrosMongo.map(l => new Livro(
            l._id ?? '',
            l.codEditora,
            l.titulo,
            l.resumo,
            l.autores
        ));
    }
    async editar(livro: Livro): Promise<boolean> {
    const livroEditado: LivroMongo = {
        
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores
    };
    try {
        const response = await fetch(`${baseURL}/${livroEditado._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livroEditado)
        });
        if (!response.ok) throw new Error('Erro ao editar livro');
        return await response.json();
    } catch (error) {
        throw error;
    }
}

    async excluir(codigo: string): Promise<boolean> {
        const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
        return resposta.ok;
    }

    async incluir(livro: Livro): Promise<boolean> {
        const livroMongo: LivroMongo = {
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        };
        const resposta = await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livroMongo)
        });
        return resposta.ok;
    }
}