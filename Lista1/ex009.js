// 9. Tempo de viagem
// Peça ao usuário a distância em quilômetros e a velocidade média em km/h.
// Calcule o tempo estimado de viagem e mostre-o ao usuário.

console.clear();
console.log("==== CÁLCULO DE TEMPO DE VIAGEM ====");
const rd = require ("readline-sync");

let distancia = rd.questionFloat("Informe a distância da viagem em Km:\n");
distancia = distancia.toFixed(2);
let velocidade = rd.questionFloat("Informe a velocidade média da viagem em Km/h:\n");
velocidade = velocidade.toFixed(2);

let tempo = distancia/velocidade
tempo = tempo.toFixed(2);

console.log(`O tempo de viagem foi de ${tempo} horas`)