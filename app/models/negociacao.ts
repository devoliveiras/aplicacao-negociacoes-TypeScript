export class Negociacao {
    constructor(
        private _data: Date,
        private readonly quantidade: Number,
        private readonly valor: Number
    ){} 

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    // get volume(): number {
    //     return this.quantidade * this.valor;
    // }

}