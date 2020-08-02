const soma = function(x, y) {
    return x + y
}
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 3) //5
    /* Imprimir recebe três argumentos, dois sendo os valores para a soma e o último que armazena a função soma.
     * No escopo, ao fazer a comunicação dos dois parâmetros para a função que também estava de argumento, é enviado para a
     * função soma, que será responsável por somar os dois valores e retorná-los.
     OUTRAS MANEIRAS DE FAZER A SOMA:*/
imprimirResultado(2, 3, soma) //5
imprimirResultado(2, 3, function(x, y) {
        return x - y //-1
    }) //A função anônima exerce a parte de terceiro argumento.

//Função anônima como arrow function
imprimirResultado(2, 3, (x, y) => x * y) //6
const pessoa = {
    falar: function() {
        console.log('Oi!')
    }
}
pessoa.falar() //Acessando uma função anônima a partir de um atributo de um objeto.
    //Ou
const pessoa1 = {
    falar() { //Aceita na nova sintaxe do js
        console.log('E aí!')
    }
}
pessoa1.falar()