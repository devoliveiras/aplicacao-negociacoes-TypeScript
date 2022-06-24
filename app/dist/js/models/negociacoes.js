export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    Duplicata(objeto) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto);
    }
}
