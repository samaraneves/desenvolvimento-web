/* O objetivo será mostrar se vale a pena usar Herança ou Composição
 * A preferência deve ser a adoção da Composição por ela ser mais flexível
 * Herança só pode ter 1 ancestral
 * Composição pode ser composto por múltiplos objetos
 * prototype não é  está disponível dentro de uma função, ao invés dele é disponível o atributo __proto__
 * [[Prototype]] é um conceito de Protótipo. É diferente de prototype
 */

const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'B40',
    velMax: 200
}

console.log(ferrari.__proto__) //Acessar o protótipo dele, o Objeto pai
    // Ele procurará na cadeia de Protótipos, se achar em um retornará ele se não, retornará undefined
    // O protótipo de Ferrari é um objeto vazio por hora
console.log(ferrari.__proto__ === Object.prototype) //true
    //ferrari referencia como pai o Object
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null

function meuObj() {}
console.log(typeof Object, typeof meuObj) // function function 
console.log(Object.prototype, meuObj.prototype) //