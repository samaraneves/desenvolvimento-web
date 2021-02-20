/* Object.preventExtensions
 * Vai previnir que seu projeto não seja extendido, não poderá adicionar novos atributos.
 */
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "Lançamento"
})
console.log('É extensível: ', Object.isExtensible(produto)) //false

produto.nome = 'Borracha' //Permite alterar o valor
produto.descricao = 'Borracha branca escolar' //Não é permitido adicionar novos atributos
delete produto.tag //Pode excluir atributo existente
console.log(produto)

/* Object.seal
 * Ao selar(seal) um objeto, não é possível adicionar novos atributos ou deletar eles.
 * É possível modificar seu valor.
 */
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('É selado:', Object.isSealed(pessoa)) //true

pessoa.sobrenome = 'Oliveira'
delete pessoa.idade
pessoa.nome = 'Carlos'
console.log(pessoa)

/* Object.freeze
 * Ele seria semelhante a seal, onde não se pode adicionar, nem excluir atrbutos.
 * O que os diferem é que os valores também não podem ser atualizados, eles são constantes.
 */