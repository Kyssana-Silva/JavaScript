// 4. Área de um retângulo
// Solicite a base e a altura de um retângulo ao usuário e calcule sua área. Em seguida, exiba o resultado.


console.clear();
console.log("==== CALCULAR ÁREA E PERIMETRO DE UM RETÂNGULO ====");
const rd =require ("readline-sync");

let base = rd.questionFloat("Informe o valor da base do retângulo:\n");
base = base.toFixed(2);

let altura = rd.questionFloat("Informe a altura do retângulo:\n");
altura = altura.toFixed(2);

area = base*altura
area = area.toFixed(2);
perimetro = (2*base)+(2*altura)
perimetro = perimetro.toFixed(2);


console.log(`Area do retângulo:\n${area}`)
console.log(`Perimetro do retângulo:\n${perimetro}`)


