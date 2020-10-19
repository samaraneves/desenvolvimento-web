/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */
function arrayInteiros() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return console.log(`Menor número do array: ${Math.min(...array)}
    Maior número do array: ${Math.max(...array)}`)
}
arrayInteiros()

//Resolução Leitão
function maiorMenor(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))