/* Callback: Chamar de volta.
 * A ideia do Callback é: Passar uma função para outra função e com um determinado evento acontecer, essa função
 * será disparada de volta. Ela pode ser chamada várias vezes, ou somente uma única vez.*/

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}
//Para cada elemento do array, chamar a função imprimir.
fabricantes.forEach(imprimir) //Dentro do Array, existe essa função forEach. 
    /* Aqui estáo calback pois, a partir da repetição onde percorre todos os elementos do array, 
    ele chama novamente a mesma função: acha elemento 0, chama a função imprimir
    acha elemento 1, chama a função imprimir novamente. */

//Imprimir os elementos, sem índices.
fabricantes.forEach(fabricante => console.log(fabricante))