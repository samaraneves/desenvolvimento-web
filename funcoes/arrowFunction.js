/* Arrows Functions auxiliam em questões de sintaxe enxuta e também, em foco no contexto usando 'this'
 */

//Exemplo função convencional
let dobro = function(a) {
    return 2 * a
}
dobro = (a) => { //Função arrow.
    return 2 * a
}

dobro = a => 2 * a //Outra função arrow com retorno implícito.
console.log(dobro(Math.PI)) //6.283185307179586

let ola = () => 'Olá!' //ou let ola = _ => console.log('Olá!'), esse modo tem o parâmetro _ que é ignorado no JS
    //Uma função que não possuí parâmetros, devemos usar o () se não, a sintaxe sai errada.
console.log(ola())

/* O this dentro de uma função arrow, pode ser considerado como fixo, baseado no contexto do qual a função foi escrita.
 */

/* function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
            console.log(this.idade)
    }, 1000)
}
new Pessoa >>>> sIniciar a contagem.
 Embora tenha o temporizadordentor do objeto, por ter usado no parâmetro a arrow function, 
 * foi possível manter o this associado ao objeto, dispensando a necessidade de usar o método bind neste contexto.
 * Mas a fim de realizar um teste, realizar a combinação de bind + arrow function*/

let comparandoThis = function(param) {
    console.log(this === param)
}
comparandoThis(global) // True. Global é o equivalente ao Window do Navegador em Node.

const obj = {}
comparandoThis = comparandoThis.bind(obj)
comparandoThis(obj) //true, porque foi reatribuído o contexto acima. 
comparandoThis(global) //false, porque não está mais para global, ficara vinculado ao objeto.

/* Agora usando o mesmo exemplo com Arrow, serão percebidos os seguintes pontos:
 * Uma Arrow, não apontará para o objeto global (Node), mas sim apontará como um módulo.(Node)
 */
let compararThisArrow = param => {
    console.log(this === param)
}
console.log('compararThisArrow com Global:')
comparandoThis(global) //false
console.log('compararThisArrow com module.exports:')
compararThisArrow(module.exports) //true, é também uma forma de acessar o module a partir de um arquivo do node.
compararThisArrow = compararThisArrow.bind(obj)
console.log('compararThisArrow com bind para o obj:')
compararThisArrow(obj) //Será falso, pois a Arrow Function é mais forte e mantém a referência do this, mesmo usando o bind.
    //Ao seja, o compararThisArrow continua sendo pertencente ao module.exports
compararThisArrow(module.exports) //confirmando que comtinuará sendo true