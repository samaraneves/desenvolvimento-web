// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.
let divisor = (dividendo, divisor) => {
    return (
        `
            divisão: ${dividendo / (divisor <= 0 ? 'Não é possível dividir por 0' : divisor)}
            resto: ${dividendo % divisor}
        `
    )
}
console.log(divisor(2, 0))

//Resolução Leitão
function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)