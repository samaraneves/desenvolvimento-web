const pessoa = {
    nome: 'Rebeca',
    idade: 20,
    peso: 80
}

//Pegar todas as chaves do objeto, uma vez que ele é um conjunto de pares chave = valor
console.log(Object.keys(pessoa))
    //Pegar todos os valores das chaves
console.log(Object.values(pessoa))
    //Ter arrays que mostrem: valores, chaves e ambos
console.log(Object.entries(pessoa))
    // Definir Propriedade de Objeto
    //Object.defineProperty(OBJETO QUE QUERO DEFINIR A PROP, 'NOME DA PROP, NÃO PODE FUGIR DAS ASPAS',{objetos com todas as características da propriedade})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //se vai ser listado ao consultar o obj
    writable: false, // se permite ser modificada
    value: '30/01/2000'
})

// Realizando testes...
// Deixamos com que ele possa ser listado
console.log(Object.keys(pessoa)) //[ 'nome', 'idade', 'peso', 'dataNascimento' ]
pessoa.dataNascimento = '20/01/2000' //Com o false na opção de ser editada, o objeto nessa propriedade
    // ficou congelada, com isso esse valor não será atualizado na propriedade
console.log(pessoa.dataNascimento) //Apresentará o valor original

//Object.assign (ES6)
// Ele pega o primeiro objeto passado como parâmetro e armazena os atributos dos objetos passados em sequência por parâmetro
// Se os demais objetos possuírem um mesmo atributo, ele será sobrescrito
// Pode ser passado quantos objetos quiserem para serem inseridos no destinatário (Primeiro objeto do parâmetro)
const destino = { a: 1 }
const ob1 = { b: 2, c: 3 }
const obj2 = { d: 4, a: 1 }
console.log(Object.assign(destino, ob1, obj2))