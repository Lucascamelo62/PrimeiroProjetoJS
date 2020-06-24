console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array("Salvador", "Fortaleza", "São Paulo");
listaDeDestinos.push("Maceio");

//listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

listaDeDestinos.forEach(function(item, indice, array){
    console.log(item, indice);
});


