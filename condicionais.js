console.log("Trabalhando com Condicionais");

const destinoDeViagens = new Array("Fortaleza", "Salvador", "Recife", "São Paulo");
console.log(destinoDeViagens);

const idadeCliente = 20;
const estaAcompanhada = false;

if(idadeCliente >= 18){
    destinoDeViagens.splice(1,1);
} else if(estaAcompanhada == true){
    destinoDeViagens.splice(1,1);
} else{
    console.log("Compra permitida apenas para maiores de 18 ou acompanhado do responsável.");
}

console.log(destinoDeViagens);

