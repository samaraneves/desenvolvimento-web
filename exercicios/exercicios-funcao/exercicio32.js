//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmetica() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let soma = array.reduce(reducer)
    return console.log(`A média aritmética é de: ${soma/array.length}`)
}
mediaAritmetica()

//Solução Leitão
function mediaVetor(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma / vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))