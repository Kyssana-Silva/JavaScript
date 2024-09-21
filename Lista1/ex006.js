// 6. Troca de valores
// Leia dois números inteiros e troque seus valores. 
// Ou seja, o valor da primeira variável deve ser atribuído à segunda variável e vice-versa.

console.clear();
console.log("==== TROCA DE NÚMEROS ====");

const rd = require ("readline-sync");

let v1 = rd.questionInt("Informe um valor para a vaiável 1:\n"); // com o "let" na frente, a variável está sendo declarada
let v2 = rd.questionInt("Informe um valor para a variável 2:\n");

console.log(`${v1} - > ${v2}`)
console.log(`Trocando...`)
console.log("==============================================")
aux = v1 // sem o "let", ela está sendo chamada
v1 = v2
v2 = aux

console.log(`Trocados ${v1} - ${v2}`);

