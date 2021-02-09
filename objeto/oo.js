// Código não executável

// Coleção dinâmica de pares chave e valor

/* Forma de criar um objeto usando o operador new, Object é um função construtora que 
em conjunto com o new instanciam um objeto */
const produto = new Object
    /* É possível realizar o acesso a um objeto usando a notação de ponto ou de colchetes, 
    semelhante a ideia do Array */
produto.nome = "Cadeira"
produto['marca'] = "Lipski"

console.log(produto)
delete produto.nome
console.log(produto)