function verificarIdade(idade){
    if (idade >=18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
}
console.log(verificarIdade(20));
console.log(verificarIdade(15));

//a saída do código abaixo será ="Maior de idade" e "Menor de idade" respectivamente pois.
//ao passar os valores 20 e 15 como argumento na função verificarIdade, o sistema validará
//que 20 é maior ou igual a 18 e 15 não. O valor de 20 será 
//do bloco if já o 15 cairá no bloco else

/* ao inserir os valores 20 e 15 como argumentos na chamada da função, o sistema validará o 
que se encontra dentro do bloco if(idade>=18). o valor 20 é verdadeiro nessa condição, portanto
retornará a mensagem de resposta que é ("Maior de Idade") já o valor 15 é falso então retornará
a mensagem do bloco else ("Menor de idade")*/