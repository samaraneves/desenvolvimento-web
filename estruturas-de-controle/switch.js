/*Switch consiste em uma seleção múltipla estabelecido em casos.
 * Ele não é uma expressão relacional, ao seja, não retorna valor verdadeiro e falso. */
const ImprimirNota = nota => {
    switch (Math.floor(nota)) {
        case 9:
        case 10:
            console.log('Quadro de Honra.')
            break
        case 5:
        case 8:
            console.log('Aprovado')
            break
        case 3:
        case 4:
            console.log('Será necessário recuperação.')
            break
        case 0:
        case 2:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida.')
            break;
    }
}
ImprimirNota(10)
ImprimirNota(-1)
ImprimirNota(5)

/* Retirando os breaks, a função executará todos os cases até o default.
 * Não é possível inserir no switch, vírgula entre os valores, exemplo: case 4, 5, 6, 7: é uma síntaxe não é suportada.
 * Não é possível definir um intervalo entre os valores: case nota => 5 ou 0-5
 * O Default pode ser posicionado em qualquer parte dentro do switch, mas necessita obrigatoriamente do break.
 * É permitido ao invés do break, usar as {}, mas não é muito comum em códigos.*/