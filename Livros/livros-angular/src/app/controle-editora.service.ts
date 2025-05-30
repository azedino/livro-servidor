import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: "Editora UM" },
    { codEditora: 2, nome: "Editora DOIS" },
    { codEditora: 3, nome: "Editora TRÊS" }
  ];
  
  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : "Editora não encontrada";
  }

}
