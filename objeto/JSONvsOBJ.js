/* JSON é um formato de intercâmbio de dados todo em String.
 * Ele tem uma sintaxe semelhante aos objetos literais em JS.
 * Seu significado é Notação de Objeto Javascript.
 * Ele é usado bastante para API, serve para ter a interoperabilidade ou seja, ter a forma transparente
 * de um sistema se comunicar com outro. Principalmente de linguagens diferentes.
 * Como é um formato textual todas as linguagens possuem uma forma de lê-lo.
 * Outra linguagem usada para intercâmbio de dados é XML, mas JSON é considerado mais rápido que ele.
 */

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))
    // console.log(JSON.parse("{ a: 1, b: 2}"))  Retorna erro como não esperado este token
console.log(JSON.parse('{ "a": 1, "b": 2}'))