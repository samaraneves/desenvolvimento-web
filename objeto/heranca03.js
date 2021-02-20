const pai = {
    nome: 'Pedro',
    cabelo: 'Preto'
}
const filho = Object.create(pai) // Criado objeto filho tendo como protótipo o objeto pai
    // Ela irá herdar os atributos do pai.
filho.nome = 'Carlos'
console.log(filho.cabelo) //Preto
console.log(filho.nome) //Carlos

const filho2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
console.log(filho2.nome)

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(`Pertence ao objeto: ${key}`) : console.log(`Por herança: ${key}`)
        // Vai verificar se a propriedade pertence ao objeto filho2. Se sim, mostra a propriedade se não, menciona que recebeu por uma herança
}