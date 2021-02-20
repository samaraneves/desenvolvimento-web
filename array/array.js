/* Não há tipo de dado Array em JS, Array trata-se de um objeto.
 * Ele não trabalha com pares chave e valor como objetos, mas sim com índices.
 * 
 */
console.log(typeof Array) //Função
console.log(typeof new Array) //Objeto. Como aprendido no capítulo anterior, toda instância junto com 
    // uma Função, se torna um Objeto
console.log(typeof []) //Declaração literal, torna-se um objeto

let aprovados = new Array("Bia", "Carlos", "Ana") //Não é recomendado criar Arrays dessa forma
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.sort() //Irá ordenar o Array, de acordo com o código unicode
console.log(aprovados)

delete aprovados[1]
console.log(aprovados) //O local do dado no índice 1 ficou vazio
aprovados.splice(1, 1, "Parâmetro 1", "Parâmetro 2") //Serve tanto para adicionar quanto excluir itens

// Trabalhar no índice (Primeiro parâmetro) Excluir na altura de N índice, 1 elemento somente (Segundo parâmetro)
// Os próximos parâmetros serão adicionados ao Array nas posições realizadas as alterações
// Se não quiser adicionar elementos, só não passar os demais parâmetros
console.log(aprovados)