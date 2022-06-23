export abstract class View<T>{ //Definido o parametro como Generic Type <T> para ser declarado o tipo usado nas filhas
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

}