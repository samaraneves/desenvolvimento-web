// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const baseExpoente = (base, expoente) => {
    return Math.pow(base, expoente)
}

console.log(baseExpoente(2, 2))

//Resolução leitão
function expoente(base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
        //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))