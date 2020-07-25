/* Do WHile, é uma versão variante de While. Ela inverte um pouco da lógica. É uma versão pouco usada.
 * É a única forma de controle que estará posionada depois do bloco.
 * O código dentro do Do é executado e posteriormente, aparece a lógica de while.
 * No exemplo: Será sorteado (sem ter uma condição pré-estabelecida) e será chegado após cada número ser sorteado
 * Se ele é igual a -1. Se for, o While será executado.
 */
function sorteioNumerosInteiros(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1
do {
    opcao = sorteioNumerosInteiros(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)
console.log('Até mais.')