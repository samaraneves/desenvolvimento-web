/*
 * Todo objeto possui um protótipo. No caso desses objetos JS, podemos também atribuir
 * novos atributos ou funções, como visto anteriormente. Não pode mexer em funções que já existe 
 * no protótipo do objeto/função, isso gera efeitos colaterais.
 */

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3].first())