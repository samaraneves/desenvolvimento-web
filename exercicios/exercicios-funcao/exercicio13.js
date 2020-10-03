/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function definirDiaSemana(dia) {
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:

            return "Dia útil."
        case 1:
        case 7:
            return "Final de Semana."
        default:
            return "Número inválido.";
    }
}
console.log(definirDiaSemana(1))
console.log(definirDiaSemana(3))
console.log(definirDiaSemana(7))
console.log(definirDiaSemana(10))