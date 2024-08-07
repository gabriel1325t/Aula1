const prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt("Digite a temperatura:"));

//conversão para fahrenheit

let fahrenheit = ((temperatura * 9 / 5) + 32)
console.log("A temperatura convertida é:" ,fahrenheit, "")