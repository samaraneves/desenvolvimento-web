// Criar cadeia de protótipos (prototype chain)

Object.prototype.att0 = 'Z' // Evitar de manipular o Protótipo maior/pai de todos objs. Como esta atribuição. Pode ocorrer erros inesperados
const avo = { att1: 'A' }
const pai = { __proto__: avo, att2: 'B', att3: 3 }
const filho = { __proto__: pai, att3: 'C' }

console.log(filho.att1) // A. O resultado é retornado pois, __proto__ realizou a busca pelo seu ancestral
    // que realizou busca no ancestral dele já que ele não tinha este atribudo, até encontrar no avo
console.log(filho.att0) // Z. Encontra pois, __proto__ realiza as pesquisas.
    // O avô não teve seu __proto__ alterado diferente de filho e pai, seu prototipo então é apontado como o
    // maior da hierarquia sendo Object.prototype
console.log(filho.att3) // C. Apesar de o pai possuir o mesmo atributo, a busca parou no filho pois, ele próprio possuía

const carro = {
    velAtual = 0,
    velMax = 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual = +delta;
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing, sombreamento que este atributo pode fazer com o atributo 
    //esse foi o efeito que aconteceu com o filho.att3, ao ver que tinha nele mesmo o atributo ignorando o pai
    //ocorreu um sombreamento
}
const volvo = {
        modelo: 'V40',
        status() {
            return `${this.modelo}: ${super.status()}` //super irá chamar o método do protótipo
                // se ao invés de usar super, for utilizado o this ele será chamado inúmeras vezes como um método recursivo
        }
    }
    // Outra forma de selar a relação de protótipo
Object.setPrototypeOf(ferrari, carro) //ferrari irá ter carro como seu protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // Apesar do protótipo ser carro que tem a função status, ele não aparece no objeto
console.log(volvo) //Aparece a função status devido o uso do super que acessou o objeto pai (carro)