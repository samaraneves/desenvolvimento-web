// A ideia de map: mapear os dados de um array transformando em um novo
// com os dados transformados
// O método percorre os dados do array e preenche um novo array com os dados transformados

// Exercício: criar um novo array com o dobro dos números do original

const nums = [1, 2, 3, 4, 5]

let result = nums.map(function(el) {
    return el * 2
})

console.log(result)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//Chamada de map encadeada
result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)