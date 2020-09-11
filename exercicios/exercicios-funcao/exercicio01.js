/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores. 
 */

let operacoes = (n1, n2) => {
    return (
        console.log(
            `
            soma: ${n1+n2}
            subtração: ${n1-n2}
            multiplicação: ${n1*n2}
            divisão: ${(n1/n2==NaN || n1/n2==Infinity ? 'Não é possível dividir por 0' : n1/n2)}
            `
        )
    )
}

operacoes(1, 0)

//Resolução leitão:
function calcularOperacoes(operador1, operador2) {
    console.log(operador1 + operador2, operador1 - operador2, operador1 * operador2, operador1 / operador2);
}

calcularOperacoes(1, 2)