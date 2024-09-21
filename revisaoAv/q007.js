let numeros = [1,2,3,4,5];
let index = 0;

while (index <numeros.length){
    console.log(numeros[index]);
    index++;
}

/*A variável "index" está sendo usada para acessar os elementos do array "numeros".
a condição do while será executada enquanto a condição "index < numeros.length" for verdadeira
"numeros.lenght retorna[5]" por que é o comprimento do array. dentro do loop while, a 
variável index está sendo incrementada a cada iteração do loop e quando chega na última
(onde index é igual a 5 e numeros.length é igual a 5) a condição (index < numeros.lenght)
passa a ser falsa, finalizando o loop while.*/