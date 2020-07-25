function SoBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Boa notícia')
    }
}
SoBoaNoticia(2)
SoBoaNoticia(8)

function soFaloVerdade(valor) {
    if (valor) { //Se valor for positivo.
        console.log('É verdade')
    }
}
soFaloVerdade() //Passar nada é undefinied, undefinied é um valor falso.
soFaloVerdade(5) //Verdade.
soFaloVerdade(-1) //Verdade. O único número que será falso é zero.

function testeIf(num) {
    if (num > 7)
        console.log(num) //É possível fazer o IF sem as chaves, entretando, ele só pegará o conteúdo da linha após a condição.
    console.log('Final...') //Nesse caso, essa parte não seria executada.
}
testeIf(6) //Mostra o Final, pois não satisfaz a condição.
testeIf(8) //Mostra o número, pois satisfaz a condição.

//Exemplo if-else
Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim //(This seria Number)
}
const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra.')
    } else if (nota.entre(5, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(3, 4.99)) {
        console.log('Será necessário recuperação.')
    } else if (nota.entre(0, 2.99)) {
        console.log('Reprovado.')
    } else {
        console.log('Nota inválida.')
    }
    console.log('Fim')
}
imprimirResultado(10) //Quadro de Honra.
imprimirResultado(5) //Aprovado.
imprimirResultado(2) //Reprovado.
imprimirResultado(11) //Inválido.
imprimirResultado(-1) //Inválido.