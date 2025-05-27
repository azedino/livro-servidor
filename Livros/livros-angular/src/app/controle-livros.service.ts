import { Injectable } from '@angular/core';

const baseURL = "http://localhost:3030/livros"

interface Livro {
  _id: string | null,
  codEditora: number,
  titulo: string,
  resumo: string,
  autores: string[]
}

interface LivroMongo {
  _id: string | null,
  codEditora: number,
  titulo: string,
  resumo: string,
  autores: string[]
}
@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  async obterLivros(): Promise<Array<Livro>> {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      return data.map((livro: LivroMongo) => ({
        codigo: Number(livro._id),
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores
      }));
    } catch (error) {
      console.error("Erro ao Obter Livros", error)
      return [];
    }
  }
  async incluir(livro: Livro): Promise<boolean> {
    try {
      const livroMongo: LivroMongo = {
        _id: null,
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores
      };

      const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livroMongo)
      });
      return response.ok
    } catch (error) {
      console.error('Erro ao Incluir Livro', error);
      return false;
    }
  }
  async excluir(codigo: String): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE'
      });
      return response.ok;
    } catch (error) {
      console.error("Erro ao tentar Excluir Livro", error);
      return false;
    }
  }
};
