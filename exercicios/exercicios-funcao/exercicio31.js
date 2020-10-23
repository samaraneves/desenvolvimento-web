/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */
function identificarNegativoArray() {
    let array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    let numerosNegativos = 0
    for (let index in array) {
        if (array[index] < 0) {
            numerosNegativos++
        }
    }
    return console.log(`O número de negativos encontrados dentro do Array são de: ${numerosNegativos}`)
}
identificarNegativoArray()
    //Resposta Leitão 
function numerosNegativos(vetor) {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))