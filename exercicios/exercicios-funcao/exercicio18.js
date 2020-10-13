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
        default:
            break;
    }
}