function meuObj() {}
console.log(meuObj.prototype)

const obj1 = new meuObj
const obj2 = new meuObj
console.log(obj1.__proto__ === obj2.__proto__) //true
console.log(meuObj.prototype === obj1.__proto__) //true

/* meuObj ao pesquisar pelo __proto__ irá apontar para Object.prototype ou retornará meuObj.prototype?
 * A partir do momento em que dois objetos são instanciados com a mesma função, eles apontarão para o mesmo protótipo?
 * R: Sim. Todos os objetos instanciados a partir de uma mesma função construtora apontarão para o mesmo protótipo.
 * Usando a instância para comparar com a função construtora ambas terão o mesmo protótipo?
 * R: Sim. Ele fará um link entre a instância do objeto e seu protótipo (porque __proto__ é derivado de prototype)
 */

meuObj.prototype.nome = 'Anônimo'
meuObj.prototype.falar = function() {
    return console.log(`Meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

// Atribuindo o prototype manualmente
const obj3 = {}
obj3.__proto__ = meuObj.prototype //Recerá todos os atributos e a função
obj3.nome = 'Obj3'
obj3.falar()