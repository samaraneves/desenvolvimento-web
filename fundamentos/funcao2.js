//Armazenando uma função em uma variável.
const imprimirSoma = function(n1, n2) {
    console.log(n1 + n2)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável. (Maneira ainda mais reduzida)
const SomaImprimir = (n1, n2) => {
    return n1 + n2
}
console.log(SomaImprimir(2, 2))

//Retorno implícito
const subtracao = (n1, n2) => n1 + n2
    //Quando está ausente de {} significa que aquela função serve somente para executar uma única linha.
    //Estrutura: VAR/CONST/LET NOME = (PARAMETROS) =>(ARROW) O QUE HÁ PARA SER RETORNADO.
    //Se for somente um parâmetro, não há necessidade de inserir com parênteses.
console.log(subtracao(1, 2))
const expressao = texto => console.log(texto)
expressao('Incrível')