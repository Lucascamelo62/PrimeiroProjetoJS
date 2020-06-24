console.log("Atividades de Loops");

const destinoDeViagens = new Array("Fortaleza", "Salvador", "Recife", "São Paulo");
console.log(destinoDeViagens);

const idadeCliente = 20;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "São Paulo";

if(idadeCliente >= 18 || estaAcompanhada ==true){
    destinoDeViagens.splice(1,1);
    passagemComprada = true;
} else{
    console.log("Compra permitida apenas para maiores de 18 ou acompanhado do responsável.");
    passagemComprada = false;
}

let destinoExistente = false;

let contador = 0;
for(contador = 0; contador < destinoDeViagens.length; contador ++){
    if(destinoDeViagens[contador] == destino){
        destinoExistente = true;
        break;
    }
}

console.log("Destino Existe: " + destinoExistente);  
console.log(destinoDeViagens);

