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

// import { Livro } from "../modelo/Livro";

// export class ControleLivro {
//     private livros: Array<Livro> = [
//         {
//             codigo: 1,
//             codEditora: 1,
//             titulo: "Use a Cabeça: Java",
//             resumo:
//                 "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
//             autores: ["Bert Bates", "Kathy Sierra"],
//         },
//         {
//             codigo: 2,
//             codEditora: 2,
//             titulo: "Java, como Programar",
//             resumo:
//                 "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.",
//             autores: ["Paul Deitel", "Harvey Deitel"],
//         },
//         {
//             codigo: 3,
//             codEditora: 3,
//             titulo: "Core Java for the Impatient",
//             resumo:
//                 "Leitores familiarizados com os livros originais do Horstmann aprenderão os novos recursos e funções do Java SE 9.",
//             autores: ["Cay Horstmann"],
//         },
//     ];

//     obterLivros(): Array<Livro> {
//         return this.livros;
//     }

//     incluir(livro: Livro): void {
//         const novoCodigo =
//             this.livros.length > 0
//                 ? Math.max(...this.livros.map((l) => l.codigo)) + 1
//                 : 1;
//         livro.codigo = novoCodigo;
//         this.livros.push(livro);
//     }

//     excluir(codigo: number): void {
//         const index = this.livros.findIndex((l) => l.codigo === codigo);
//         if (index >= 0) {
//             this.livros.splice(index, 1);
//         }
//     }
// }