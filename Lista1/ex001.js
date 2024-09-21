//1. Soma de dois números
//Escreva um programa que solicite ao usuário dois números inteiros e imprima a soma deles.

console.clear();

console.log("==== SOMA DE DOIS NÚMEROS INTEIROS ====");
const rd = require ("readline-sync");
let n1 = rd.questionInt("Informe o primeiro número para a soma: ");
let n2 = rd.questionInt("Informe o segundo número para a soma: ");

let soma = n1 + n2
console.log(`A soma de ${n1} + ${n2} é igual a : ${soma}`);

