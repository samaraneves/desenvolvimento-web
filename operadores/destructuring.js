/*
Foi introduzido na versão 2015, é um operador de desestruturação com o objetivo de retirar coisas da estrutura.
Como por exemplo: objetos e arrays. Existem duas sintaxes que definem o seu uso: se for extrair algo de objetos
usa-se {}, pois são usadas para definir objetos literais.
Se for para Array, usa-se [] que é comumumente visto para definir vetores.
 */
const profile = {
    nome: 'Samara',
    idade: 20,
    curso: 'TADS',
    universidade: 'UMC',
    endereco: {
        logradouro: 'Lindolfo',
        numero: 188
    }
}
const { nome: n, idade: i } = profile //Destructuring
//const {nome, idade} = profile - outra forma
console.log(n, i)
    /*Extraia o atributo nome e idade da estrutura.
    
Caso insira dois atributos que não foram criados na estrutura, 
é deixado o valor undefined, pois será indicado que aquele valor não foi definido.*/

const { caracteristicas, grad = 'Nenhum' } = profile // undefined, 'Nenhum' - Caso ele não seja definido, terá o valor Nenhum em default.

const { endereco: { logradouro, numero } } = profile //Caso de obsjetos dentro de objetos.
console.log(logradouro, numero)

const [a] = [10]
console.log(a) //10
    /*Atribuindo um valor para a*/
const [n1, , n3, , n5 = 0] = [10, 11, 01, 12] //0,ignora 11 pq o n2 não foi definido, 01, ignora 12 
//porque não foi definido n4, 0 porque n5 tem atribuição de 0
console.log(n1, n3, n5)

const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
]
/*const [IGNORE ESSE ELEMENTO(QUE SERIA O ARRAY),[IGNORE ESSE ELEMENTO, 6]]*/
console.log(nota) //É um código de difícil leitura, recomendado evitar.

//Exemplo de uso do Destructuring com Objetos
function rand({ min = 0, max = 1000 }) { //Destructuring. Retirando estes elementos de um objeto e definindo seus valores.
    const valor = Math.random() * (max - min) + min //Definindo a lógica da expressão para os números a serem sorteados.
    return Math.floor(valor) //Retornar o valor arredondado para baixo.
}
console.log(rand({ min: 60, max: 20 }))
console.log(rand({})) //Irá exibir os números aleatórios. 
    //Se quiséssemos definir novamente o número min/max, poderia passar novamente
    //Sem os {} dará errado, pois tentaria desestruturar valores undefined ou null


//Exemplo de uso do Destructuring com Array
function rand1([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max - min]
    const valor = Math.random() * (max - min) * min
    return Math.floor(valor)
}
console.log(rand1([20, 30]))
console.log(rand1([]))
console.log(rand1([20]))
    //Diferente do objeto, no array não sinaliza se é min ou max, porque estamos mexendo com 
    //elementos e não atributos
    //Se não preencher irá retornar 0 de ambos, pois foi o valor definido
    //Se eu enviar somente 1 valor