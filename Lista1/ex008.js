// 8. Tabuada
// Peça ao usuário para inserir um número inteiro e exiba a tabuada desse número, de 1 a 10.

console.clear();
console.log("==== TABUADA ====");

const rd = require("readline-sync");

let num = rd.questionInt("Informe um número pra cálculo da tabuada:\n");
console.log(`==== TABUADA DE ${num} ====`)
console.log("-----------------------------");
console.log(num*1);
console.log(num*2);
console.log(num*3);
console.log(num*4);
console.log(num*5);
console.log(num*6);
console.log(num*7);
console.log(num*8);
console.log(num*9);
console.log(num*10);
console.log("-----------------------------");

