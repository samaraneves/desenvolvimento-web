/*
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações.
 */
function contarIntervalo() {
    let dentroIntervalo = 0;
    let foraIntervalo = 0;
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    for (index in array) {
        if (array[index] >= 10 && array[index] <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`São ${dentroIntervalo} números dentro do intervalo de 10-20 e ${foraIntervalo} números fora do intervalo.`)
}
contarIntervalo()

//Resolução Leitão
function observarIntervalo(vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))