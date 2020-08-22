function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado que é a variável criado ao próprio escopo da função
    let velocidadeAtual = 0;
    //método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() //20
ferrari.acelerar() //40
ferrari.acelerar() //60

console.log(ferrari.getVelocidadeAtual()) //60
console.log(typeof Carro) //Função.
console.log(typeof ferrari) //Objeto, pois foi instanciado.