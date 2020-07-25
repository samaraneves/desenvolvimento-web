/*Hoisting consiste na ação de içar a variável para o topo do arquivo. Isso acontece com var, por ter escopo global. */

console.log('valor', valor) //undefined
var valor = 2
console.log('valor', valor) //2

/*undefined prova que ele existe, só não há um valor atribuído. 
Ao seja, antes do primeiro console.log, é como se existisse um 'var valor' existente, mas sem recebimento de valor.
Isso acontece, porque as declarações das variáveis são guardadas na memória durante a compilação,
mas se mantém exatamente no local onde foi inserido no código.

var valor
console.log('valor', valor) 
valor = 2
console.log('valor', valor)
*/

/* Na função ocorre o mesmo. Mesmo a variável possuindo escopo de bloco, 
ao seja, ela não irá funciona fora da função se foi definida lá dentro,
quando é usada no mesmo contexto como acima, a situação se repete e ocorre o hoisting.
*/
function teste() {
    console.log('valor', valor) //undefined
    var valor = 2
    console.log('valor', valor) //2 
}
teste()
    /*Não é uma boa prática, realizar estes tipos de ação. O correto é sempre declarar inicialmente suas variáveis*/