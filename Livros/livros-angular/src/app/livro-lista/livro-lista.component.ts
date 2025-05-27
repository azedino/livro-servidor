import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService) { }

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();

    this.servLivros.obterLivros().then((livros: any[]) => {
      this.livros = livros.map(livro => ({
        codigo: livro.codigo ?? '', ...livro
      }));
    }).catch((error) => {
      console.error('Erro ao obter livros:', error);
    });
  }


  excluir(codigo: String) {
    this.servLivros.excluir(codigo).then(() => {
      return this.servLivros.obterLivros();
    }).then((livros: any[]) => {
      this.livros = livros.map(livro => ({
        codigo: livro.codigo ?? '', ...livro
      }));
    }).catch((error) => {
      console.error('Erro ao excluir ou obter livros:', error);
    });
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
