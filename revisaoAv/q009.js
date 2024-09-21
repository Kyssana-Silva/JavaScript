function dobrarNumeros(numeros){
    let resultado = [];
    for (let i = 0; i< numeros.length; i++){
        resultado.push(numeros[i] * 2);
    }
    return resultado;
}
console.log(dobrarNumeros([1,2,3]));

/*o resultado será 2,4,6 pois a função está pegando os valores "1,2,3"  passados como
argumento na sua chamada e multiplicando cada um por 2 e esses resultados estão sendo
inseridos no array numeros que foi iniciado como vazio. já o laço "for" está iniciando a 
variável "i", verificando se ela é menor do que o tamando do comprimento do array "resultado"
 e incrementando a variável "i" a cada iteração e inserindo os valores passados na chamada 
 da função dentro do array através do "push"*/

 /*A função dobrarNumeros recebe um parametro chamado (numeros) que é um array de números.
 dentro dessa função, um array vazio chamado "resultado" é criado para armazenar os resultados.
 o loop "for" é usado para iterar sobre cada elemento do array "numeros" e a cada iteração, o
 elemento do array "numero" é multiplicado por 2 e esse resultado é adicionado ao array "resultado"
 pelo método "push". Logo os números (1,2,3) passados como argumento na chamada de função 
 serão dobrados e o retorno do código será (2,4,6) que são os resultadosdo array "resultados",
 exibidos pelo console.log*/