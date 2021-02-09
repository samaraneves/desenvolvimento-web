// Formas dferentes de se criar um Objeto

// Notação literal, NÃO CONFUNDIR COM JSON
const obj = {
    //Adicione aqui atributos e métodos
}

// Object em JS
console.log(typeof Object, typeof new Object) //Função e Objeto

const obj2 = new Object

/* Funções Construtoras
 * A variável com this, se tornará pública isto é, não ficará limitada ao seu escopo
 * OU não ficará encapsulada. Para entender os níveis de encapsulamento, 
 * é preciso entender a visbilidade em JS, seus escopos como: global, bloco e função
 */
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) // Esse está encapsulado e não disponível 
            // para fora do escopo do objeto. Só funcionará internamente, longe do olhar do usuário
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Clara"
console.log(filha)

// Função que retorna Objeto
const fromJson = JSON.parse('{"info":"Sou um JSON"}')
    // O objetivo dessa função, é converter o JSON em um Objeto
console.log(fromJson)