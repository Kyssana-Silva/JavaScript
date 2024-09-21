// 2. Média de três números
// Peça ao usuário para inserir três números e calcule a média aritmética desses números.

console.clear();

console.log("==== MÉDIA DE 3 NÚMEROS ====")
const rd = require ("readline-sync");
let n1 = rd.questionFloat("Infome o primeiro número: ");
let n2 = rd.questionFloat("Informe o segundo número: ");
let n3 = rd.questionFloat("Informe o terceiro número: ");

let media = (n1+n2+n3)/3
media = media.toFixed(2);

console.log(`A média entre os números ${n1}, ${n2} e ${n3} é igual a: ${media}`);
