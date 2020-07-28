/* Só pelo fato de que a função não sinalize que recebe params, não significa que não possa enviar para ela.
 * Esse tipo de solução é de antes do ECMAScript 2015.
 * Primeiro exemplo: Apesar da função soma não possuir um parâmetro para retornar, é possível puxar um argumento.
 * arguments, é um array e objeto.
 * Um argumento é o valor passado para a função quando ela é invocada. 
 * Em outras palavras um argumento é atribuído para um parâmetro quando uma função é invocada.
 * TODA função possuí esse array disponível. Quando nenhum param é passado, o array está vazio.
 */
function soma() {
    let soma = 0
    for (let index in arguments) { //Pega os índices do argumento da função.
        soma += arguments[index]
    }
    return soma
}
console.log(soma()) //0
console.log(soma(1)) //1
console.log(soma(1.1, 2.2, 3.3)) //6.6
console.log(soma(1.1, 2.2, 'Teste')) //3.3000000000000003Teste
    //Gerou uma imprecisão no cálculo o que é previsto pela especificação ES6
console.log(soma('a', 'b', 'c')) //0abc - O 0 aparece porque soma na função já recebe zero.