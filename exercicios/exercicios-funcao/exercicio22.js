/*
 * 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
 * A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 
 * A anuidade deve ser paga no mês de janeiro. 
 * Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
 * O retorno deve ser o valor a ser pago para o respectivo mês escolhido:
 */

function calcularValorMes(mes, valorAnuidade) {
    for (let index = 1; index <= mes; index++) {
        valorAnuidade = valorAnuidade + 0.05
    }
    return console.log(`O valor a pagar é: ${valorAnuidade.toFixed(2)}`)
}

calcularValorMes(3, 1000)
calcularValorMes(5, 1200)
calcularValorMes(2, 200)

//Resposta Leitão
function calcularValor(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5 / 100)) ** atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))