const prompt = require('prompt-sync')();
 
let num = parseFloat(prompt("Digite um numero:"))

    if(num % 2 === 0){
        console.log("O número",num,"é par");
    }else{
        console.log("O número",num,"é impar");
    }


