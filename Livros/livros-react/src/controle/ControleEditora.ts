import { Editora } from "../modelo/Editora";

export class ControleEditora{
    private editoras: Array<Editora> = [
        { codEditora: 1, nome: "Editora 1" },
        { codEditora: 2, nome: "Editora 2" },
        { codEditora: 3, nome: "Editora 3" },
    ];

    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        return this.editoras.find((e) => e.codEditora === codEditora)?.nome;
    }
}