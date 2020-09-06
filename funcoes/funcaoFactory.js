/* Função Factory é uma função fábrica.
 * Ele ajuda a evitar retrabalho de copiar e colar várias vezes uma função com o memso fim para produzir algo.
 * Ele tem a finalidade de retornar um novo objeto objeto mesmo que não estejamos usando a notação literal New.*/

//Factory simples
function produto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 1.50
    }
}

console.log(produto('Salada', 20.00))

//Uma versão de factory em classe
/* Como o this aponta para o nome, se colocar esse tipo de estrutura dentro de um evento como por exemplo o click, 
 * ao vericar o valor, irá perceber que o valor que for sair não será o que esperamos pois, o contexto pode variar.
 * Isso não ocorre se usar a função factory, pois não necessita usar o this.
 */
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Samara')
p1.falar()

//Função Construtura (Transformar a classe pela função construtora) funciona da mesma maneira que a classe no browser
function PessoaD(nome) {
    this.nome = nome
    this.falarD = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoaD = new PessoaD('Clarisse')
pessoaD.falarD()