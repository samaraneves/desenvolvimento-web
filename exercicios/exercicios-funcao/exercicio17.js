/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

//RESOLUCAO CORRIGIDA
function calculoPlano(plano, salarioAtual) {
    let salarioAtualizado = 0

    switch (plano) {
        case 'A':
            return console.log(salarioAtual * 1.1)
        case 'B':
            return console.log(salarioAtual * 1.15)
        case 'C':
            return console.log(salarioAtual * 1.2)
        default:
            return console.log('Plano inválido.');
    }
}
calculoPlano('A', 1000)
calculoPlano('R', 1000)
    //Versão Leitão
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));