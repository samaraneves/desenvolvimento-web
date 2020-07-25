/*JavaScript aceita além de true e false, 0 (Representando valor falso) e 1 (Representando valor verdadeiro)
 * aceita outras maneiras, além de algumas linguagens que são capazes de as vezes suportar um ou duas formas de representar 
 * verdadeiro ou falso.
 */

/* Como uma boa prática, o melhor é usar let ao invés de var*/
let isAtivo = false
console.log(isAtivo)

/*JavaScript é capaz de identificar números como 0 para falso e 1 para verdadeiro. 
 * Para isso, é usado o símbolo de negação (!). Ao usar um vez, o símbolo servirá para negar o conteúdo que será verificado
 * se usado duas vezes (!!VARIÁVEL) ele irá verificar se o conteúdo é verdadeiro ou falso*/
console.log(!isAtivo) // Inverteu o valor de false para true.
console.log(!!isAtivo) //Confirmou se o conteúdo é verdadeiro ou falso.

isAtivo = 3
console.log(!!isAtivo) //Como número 3 é além de 1, ele foi considerado como verdadeiro.
console.log(!isAtivo) // Negou o conteúdo que é verdadeiro, para falso.

/*Outros valores que se comportam de forma verdadeira*/
console.log(!!3) //Números positivos.
console.log(!!-1) //Números negativos.
console.log(!!" ") //Espaços vazios.
console.log(!!"texto") //Espaços com textos.
console.log(!![]) //Array vazio.
console.log(!!{}) //Objeto literal.
console.log(!!Infinity) //Verificação do 'valor'infinito.
console.log(!!(isAtivo = true)) //Verificação da nova atribuição.

/*Outros valores que se comportam de maneira falsa*/
console.log('FALSOS')
console.log(!!0) //O número 0 é representado como um valor falso.
console.log(!!'') //Verifica se o campo foi preenchido de fato ou não. Não há espaço nesse exemplo.
console.log(!!null) //Nulo (Inexistente) também é visto como falso.
console.log(!!NaN) //Um valor que não é numérico, também é visto como negativo, já que na interpretação 
    //ele está negando que aquilo é um número.
console.log(!!undefined) //Um valor que não é definido, também é visto como falso. Não satisfaz uma condição positiva.
console.log(!!(isAtivo = false)) //Retorna o valor que recebeu a atribuição.

console.log('Outros casos com !!')
    /*Uma forma de usar coisas que não são de fato verdadeiras ou falsas, mas usando !!
         poderá convertê-las nessa verificação*/
console.log(!!('' || null || 0 || " "))
    //O operador codicional neste caso, funcionará como uma tabela verdade, verificando cada valor na sentença lógica.
    //Na disjunção (Operador lógico OU), se pelo menos uma das proposições for verdadeira, o resultado será verdadeiro.
let nome = ''
console.log(nome || 'Desconhecido')
    //Será mostrado o desconhecido, porque é o único valor verdadeiro que satisfaz a disjunção.
    //É muito útil, caso desejemos somente validar se está preenchido. Se não for verdadeira a primeira proposição
    //Podemos inserir na segunda uma verdadeira que possa apresentar caso a primeira não seja satisfatória.
nome = 'Samara'
console.log(nome || 'Desconhecido') //true || false Se for usado &&, fica false && true
    //Apresenta o conteúdo da variável nome porque é o primeiro indício de verdadeiro encontrado.