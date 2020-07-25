/*JS é uma linguagem multi-pradigma: É capaz de programar com ela, usando conceitos de
 * Orientação a objetos
 * Procedural
 * Funcional */

/*Objeto em JS não é a mesma coisa que JSON (JavaScript Object Notation) que serve 
para troca de dados simples entre sistemas. JSON é um formato textual, Objeto é uma forma que envolve atributos
funções e comportamentos.*/

/*Como criar um objeto literal. O símbolo que pode identificar que é um objeto é o uso de chaves ({})*/
const produto = {}
    /*Apesar do objeto estar vazio, JS permite que sejam criados seus atributos dinamicamente
    ao seja, sem necessidade de inserir diretamente no objeto.*/
produto.nome = 'Celular'

/* Objeto seria um grupo de pares entre CHAVE:VALOR
 * Em JS pode ser comum que um objeto tenha outro objeto como atributo*/
produto.categoria = {
    nome: '64mb',
    marca: 'Xiaomi'
}
produto.preco = 34.00
console.log(produto)

/*É possível inserir atributos com espaço*, para isso precisa usar colchetes []*/
produto['Desconto Agora'] = 40.00 //Não é uma boa prática.
console.log(produto)