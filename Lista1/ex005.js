// 5. Calculadora de IMC
// Peça ao usuário para inserir seu peso (em kg) e altura (em metros). Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula IMC = peso / altura^2 e exiba o resultado.

console.clear();
console.log("==== CALCULADORA DE IMC ====");
const rd = require("readline-sync");


let peso = rd.questionFloat("Informe o seu peso em Kg: ")
peso = peso.toFixed(2);

let altura = rd.questionFloat("Informe a sua altura em metros: ")
altura = altura.toFixed(2);

imc = peso/(altura **2)
imc = imc.toFixed(2);

console.log(`O seu IMC para o peso ${peso} e a altura ${altura} é de ${imc}`);

