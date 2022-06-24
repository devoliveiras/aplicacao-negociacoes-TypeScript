import { NegociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:888/dados/')
            .then(res => res.json())
            .then((dados: Array<NegociacoesDoDia>) => {
                return dados.map(dadoHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoHoje.vezes,
                        dadoHoje.montante
                    )
                })
            })
    }
}