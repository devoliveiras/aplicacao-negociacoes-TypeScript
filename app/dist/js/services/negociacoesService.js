import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:888/dados/')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadoHoje => {
                return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante);
            });
        });
    }
}
