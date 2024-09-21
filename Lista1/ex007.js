// 7. Cálculo de desconto
// Solicite o preço de um produto e um percentual de desconto.
// Calcule o valor do desconto e o preço final do produto com o desconto aplicado.

console.clear();
console.log("==== CÁLCULO DE DESCONTO DO PRODUTO ====");

const rd = require("readline-sync");

let preco = rd.questionFloat("Informe o preço do produto:\nR$");
preco = preco.toFixed(2);

let desconto = rd.questionFloat("Informe o percentual de desconto:\n");
desconto = desconto.toFixed(2);

valorFinal = preco - ((desconto/100)*preco);//"((desconto/100)*preco)" - esse treço calcula qual o valor em R$ dá em cima do preço do produto e depois ele é subtraido do preço do produto
valorFinal = valorFinal.toFixed(2);

console.log(`O valor final do produto é de R$${valorFinal}`)