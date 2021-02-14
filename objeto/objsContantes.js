/* O grande feito de atribuir objetos para constantes, deve-se ao fato delas apontarem para um
 * endereço de memória. Ao inserir um dado, não faz com que o seu endereço de referência mude, continua
 * sendo o mesmo objeto. 
 * Isso faz com que atualize um dado, que pertence a pessoa e não mudando sua estrutura.
 */

// pessoa -> tem um endereço de memória 123 -> onde armazena o objeto {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' //É atribuído o valor para um atributo que pertence ao objeto pessoa
    // Com isso ele atualizará o valor que estava anteriormente armazenado neste local

// Caso contrário: pessoa -> tenta ser atribuída com estrutura adicional no endereço 456 -> {...}
// Retorna erro, isso ocorre somente ao tentar adicionar outros objetos:
// pessoa = { nome: 'Ana' }
console.log(pessoa)

//Outra forma de congelar um objeto:
Object.freeze(pessoa)

//Caso queira congelar para que nem a referência do objeto seja mudada na memória
const objetoConstante = Object.freeze({ nome: 'Jonah' })