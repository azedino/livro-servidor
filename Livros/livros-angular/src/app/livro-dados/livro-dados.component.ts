import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ControleLivrosService],
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  public livro: Livro;
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.livro = new Livro('0', 0, '', '', []);
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');

    const livroComId = { _id: null, ...this.livro };

    Promise.resolve(this.servLivros.incluir(livroComId))
      .then(() => {
        this.router.navigateByUrl('/lista');
      });
  }
}
