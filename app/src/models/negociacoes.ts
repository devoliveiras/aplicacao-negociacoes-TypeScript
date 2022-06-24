import { Comparavel } from "../interfaces/comparavel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Comparavel<Negociacoes>{
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

    public Duplicata(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto);
    }
}
