let numero = 10;
while (numero > 0){
    if (numero % 2 === 0){
        console.log(numero + " é par");
    }else{
        console.log(numero + " é impar");
    }
    numero--;
}

/* o resultado será 10 é par
9 é impar
8 é par
7 é impar
6 é par
5 é impar
4 é par
3 é impar
2 é par
1 é impar

o loop "while" continuará enquanto o valor da variável "numero" for menor do que 0. 
já o condicional "if-else" está verificando se os valores de dentro do loop "while" são pares
ou impares e imprimindo essa informação ao lado de cada número resultado da iteração do loop,
que está decrementando a variável "numero" (numero--),até que a condição de parada do while
seja atingida ((numero>0)=falso)*/