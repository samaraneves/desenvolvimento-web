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