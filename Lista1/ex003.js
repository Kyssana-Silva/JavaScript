// 3. Conversão de temperatura
// Crie um programa que converta uma temperatura em graus Celsius para Fahrenheit. Peça ao usuário para inserir a temperatura em Celsius e exiba a temperatura equivalente em Fahrenheit.

console.clear();

console.log("==== CONVERSOSR FAHRENHEIT - CELSIUS ====");
const rd = require("readline-sync");

let celsius = rd.questionFloat("Infome a temperatura em Celsius para conversão:°C ");
celsius = celsius.toFixed(2)

let fahrenheit = (celsius*1.8)+32
fahrenheit = fahrenheit.toFixed(2);

console.log(`O resultado da conversão de ${celsius} para Fahrenheit é:\n°F ${fahrenheit}`);
