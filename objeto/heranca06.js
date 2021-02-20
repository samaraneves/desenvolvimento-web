function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456) //O protótipo destas funções serão o objeto Aula
console.log(aula1, aula2)

//Simulando operador New
function novo(func, ...params) {
    const obj = {};
    obj.__proto__ = func.prototype;
    func.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)