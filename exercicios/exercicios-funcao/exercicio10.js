/*
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 * ou false.
 */

function NumeroInteiro(num) {
    if (num % 3 == 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}
NumeroInteiro(3)
NumeroInteiro(16)
NumeroInteiro(2)
NumeroInteiro(10)

//Resolução Leitão 
function verificaNumero(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))