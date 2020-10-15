/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
 * switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function numeroExtenso(numero) {
    switch (numero) {
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número não existente no intervalo'
    }
}
console.log(numeroExtenso(1))
console.log(numeroExtenso(11))
console.log(numeroExtenso(10))
console.log(numeroExtenso(9))