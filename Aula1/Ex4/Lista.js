const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite o tamanho da lista: "));

let array = [];
for(i = 0; i < num; i++){
    array.push(parseFloat(prompt("Digite uma posição da lista: ")))
}

console.log("Sua lista: " + array)