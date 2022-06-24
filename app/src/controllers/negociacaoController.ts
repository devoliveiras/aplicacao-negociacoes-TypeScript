import { domInjector } from "../decorators/domInjector.js";
import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoesService.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
//console.log('oi');
export class NegociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true); //parametro escapar true para proteção do código
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacoesService();

    constructor(){
        this.negociacoesView.update(this.negociacoes);
    }
    
    @inspecionar()
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.DiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.')
            return ;
        }

        this.negociacoes.adiciona(negociacao);   
        this.limparForm();
        this.atualizaView();
    }

    //consome dados da API
    public importaDados(): void {
        this.negociacaoService
        .obterNegociacoesDoDia()
        .then(negociacoesHoje =>{
            for(let negociacao of negociacoesHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private limparForm(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso.');  
    }

    private DiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

}