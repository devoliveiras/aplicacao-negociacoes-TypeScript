export abstract class View<T>{ //Definido o parametro como Generic Type <T> para ser declarado o tipo usado nas filhas
    protected elemento: HTMLElement;
    private escapar = false;
                                     // v parametro opcional para proteção do código
    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }
        else{
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        
        if(escapar){
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S/]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

}