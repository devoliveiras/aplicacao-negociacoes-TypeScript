import { Comparavel } from "../interfaces/comparavel.js";

export class Negociacao implements Comparavel<Negociacao>{
    constructor(
        private _data: Date,
        public readonly quantidade: Number,
        public readonly valor: Number
    ){} 

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{

        const regex = /-/g;
        const date = new Date(dataString.replace(regex, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return  new Negociacao(date, quantidade, valor);    
    }

    // get volume(): number {
    //     return this.quantidade * this.valor;
    // }

    public Duplicata(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}