/* While é uma estrtura de repetição útil para momentos onde não sabemos quantos elementos precisamos inteirar.
 * Exemplo: Enquanto o usuário não digitar determinado dado, estará passando pela repetição.
 * Na estrutura do while, é utilizada uma expressão que tem como objetivo retornar um booleano.
 * Enquanto a expressão for verdadeira, continue repetindo o código dentro do trecho.
 * Ao ficar falsa, a expressão sairá do laço.
 */
function gerarValorAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1) {
    opcao = gerarValorAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Saída da repetição.')