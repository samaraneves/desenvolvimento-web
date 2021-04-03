// Nos params do forEach temos a opção de interar um Array
// o primeiro param será sempre o value e o segundo o index
// se usar 1 param, será o de index
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agata', 'Carlos', 'Samara', 'Rodrigo']

aprovados.forEach2(function(value, index) {
    console.log(`${index + 1} : ${value}`)
})

aprovados.forEach2(function(value, index, array) {
    console.log(`${index + 1} : ${value} ${array}`)
})