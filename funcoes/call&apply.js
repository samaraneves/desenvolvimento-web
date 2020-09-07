/* Existem muitas formas de chamar uma função, diretamente no escopo global, a partir de um objeto e há ainda outras formas.
 * Uma função dentro de JS é um tipo e como um tipo, existem outras funções dentro dele.
 * 
 */

//exemplo chamando via objeto: O uso do Call e Apply se difere justamente pelo uso de parâmetros, por isso 
// esse exemplo terá aplicação de um parâmetro padrão.
function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco*(1- this.desc)*(1+imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 5.000,
    desc: 0.15,
    getPreco //Como existe uma função com este nome, ao inserir somente o nome o objeto irá criar: getPreco: getPreco(params)
}

console.log(getPreco()) //NaN
    //A função pega o this do global, que não está passando nenhum valor. Mas se fizéssemos:
global.preco = 20
global.desc = 0.1
console.log(getPreco())
    //Para chamar através de um objetivo
console.log(produto.getPreco())

//Uma forma com call e apply
const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)) //call irá chamar a função, dentro dela é o contexto para a execução da função
console.log(getPreco.apply(carro)) //Irá obter o mesmo resultado de call

/* O que difere?
 * Em call: Passo diretamente em seus params cada um dos params que passará para a função: o primeiro param é o contexto que
 * pode estar nulo, pode ser o global ou outro.
 * Em apply: Os params serão passados dentro de um Array. Se tirar o símbolo do Array, dará erro.
 */
console.log(getPreco.call(carro, 0.17, '$')) //$ 46790.64 usou o preço do objeto, recebeu o desconto do param assim 
    // como o símbolo.
console.log(getPreco.apply(carro, [0.17, '$'])) //$ 46790.64