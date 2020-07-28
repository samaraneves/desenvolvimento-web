/* Função em JS é conhecido como First-Class Object ou Citizens ou Higher-Order function (Função de alta ordem, 
 * que é relacionado a Programação Funcional) 
 ** A função pode retornar algum dado/info, mas se não optar por retornar nada a função retorna undefined.
 */

/*Função criada de forma literal*/
function Exemplo00() {}

/*Armazenar em uma variável*/
const Exemplo01 = function() {} //Função anônima

/*Armazenar em um array
 * É possível armazená-la de maneira literal.
 ** É possível armazenar outras funções dentro dela, mencionando seus nomes.*/
const array = [function(a, b) { return a + b }, Exemplo00, Exemplo01]
console.log(array[0](2, 3)) //5 - Selecionei o indíce 0 e passei os parâmetros para que fosse retornado a soma dos valores.

/*Armazenar em um atributo de um  objeto*/
const Exemplo02 = {}
Exemplo02.falar = function() { return 'Oi!' }
console.log(Exemplo02.falar()) //Oi!

/*Passar função como parâmetro*/
function run(fun) {
    fun() //Executar a função dentro de outra, no caso da passagem da função por param.
}
run(function() { console.log('Executando...') }) //Posso criar a função aqui dentro ou passar a função.

/*Uma função pode retornar ou conter uma função*/
function Soma(a, b) {
    return function(c) { //Retornando outra função que recebe por parâmetro um valor.
        console.log(a + b + c)
    }
}
Soma(2, 3)(3) //8 (PARAMS, PARAMS DA PRIMEIRA FUNCAO)(PARAM DA FUNCAO QUE SERÁ RETORNADA)
    //ou
const somar = Soma(2, 3)
somar(3) //8