/* CONCEITO DE: Atribuição por valor e por referência. É necessário compreender ambos os lados.*/

const a = { name: 'Teste' } //Atribuição por valor.
const b = a //Atribuição por referência, quando o conteúdo de um passa a também compor a outro. 
    //Ambos se comunicariam na mesma direção da memória.

/* O que de fato a constante a e b armazenam?
* Nada. A constante 'a' não armazena de fato o valor do objeto. Apesar de termos atribuído isso, o que as constantes armazenariam
são caminhos na memória, ao seja endereços. A constante b apenas aponta para o mesmo endereço da memória que o a também aponta.
Tanto que, se alterarmos o valor desse objeto pela constante b, a constante a também sofrerá alterações.
*/

b.name = 'Sam'
console.log(a) //Exibe Sam.

/*Isso ocorre porque ambos possuem seus valores direcionados no mesmo endereço de memória.
Como a constante b recebe o conteúdo de a, armazenando-o, ele faz referência junto com a constante a o que
justifica a mudança  de endereçamento. É comum que isso ocorra entre objetos em JS.*/

/*A atribuição por valor ocorre, em tipos primitivos ao seja, aquele dado que não é representado através de um Objeto e, por isso, não possui métodos. 
Eles também tem a característica de serem imutáveis (não podem ter o seu valor modificado). É feito uma cópia por valor, nos dados primitivos
não usamos o conceito de endereçamento, é criado então uma cópia na memória*/
let c = 3
let d = c
d++
console.log(c, d)
    /*A variável c é crida e recebe o valor 3. Nesse momento, é criado um espaço na memória para ele.
    A variável d é criada e recebe o valor que é contido em c, criando uma cópia na memória para ele também (d)
    O que permite que d altere seu valor e fique diferente do c, é que são alocados em espaços de memórias diferentes */