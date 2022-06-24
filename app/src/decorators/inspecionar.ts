export function inspecionar(){
    return function(
        target: any,
        propertyKey: String,
        descriptor: PropertyDescriptor
        ){
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args: Array<any>){
                const retorno = metodoOriginal.apply(this, args);
                
                console.log(`*********** DECORATOR Inspecionar ***********`);
                console.log(`--- Método [${propertyKey}]`);
                console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
                console.log(`------ Retorno ${JSON.stringify(retorno)}`);

                return retorno
            }



            return descriptor;
        }
}