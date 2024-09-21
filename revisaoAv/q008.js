let cores = ["azul","verde","amarelo"];
for (let i = 0; i < cores.length;i++){
    console.log(cores[i]);
}

/* O código retornará "azul", "verde", "amarelo" respectivamente. o loop for está parametrizado
para ser executado enquanto a variável "i" for menor do que o comprimento do array (i < cores.length).
cores.length retorna [3]. a variável "i" é usada para acessar os elementos dentro do indice do array.
a cada iteração do laço "for" a variável "i" é incrementada e quando a condição do laço passa a ser falsa 
((i < cores.length)=falso) o laço for para,imprimindo na tela as informações que constam dentro de 
cada indice (console.log[i])*/