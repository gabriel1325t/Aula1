const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite uma nota:"))
let numero2 = parseFloat(prompt("Digite outra nota:"))
let numero3 = parseFloat(prompt("Digite outra nota:"))

console.log((numero1+numero2+numero3) /3);

if(numero1<4){
    console.log("Reprovado")
}
else if(numero2<=5.9){
    console.log("Recuperação")
}
else if(numero3 >=6){
    console.log("Aprovado")
}