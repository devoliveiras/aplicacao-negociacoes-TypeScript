import { View } from "./View.js";

export class MensagemView extends View<String>{

    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}