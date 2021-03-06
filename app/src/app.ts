import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });    
} else {
    throw Error ('Não foi possível inicializar a ap´licação. Verifique se o formulário existe.')
}

const botaoImportar = document.querySelector('#importarDados');
if (botaoImportar){
    botaoImportar.addEventListener('click', () => {
        controller.importaDados();
    });    
} else {
    throw Error ('Botão de importar não foi encontrado.')
}