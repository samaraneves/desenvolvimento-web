// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.
function divindo(dividendo, divisor) {
    if (divisor === 0) {
        return console.log('Não é possível realizar divisão por 0.')
    } else {
        return console.log(
            `Resultado: ${dividendo/divisor}
         Resto: ${dividendo%divisor}`)
    }
}
divindo(2, 2)
    //Resolução Leitão
function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(2, 0)