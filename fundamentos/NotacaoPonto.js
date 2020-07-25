/* A notação ponto consiste na capacidade de conseguirmos acessar membros de funções/objetos
a partir desta notação. É um conceito básico em JavaScript e é possível ser notado em muitos codigos.
*/
console.log(Math.ceil(7.1))
    //Função ceil() tem o objetivo de arredondar valores para cima. O método floor, arredondaria para baixo.
    /*A notação ponto significa como um meio de acessar o método definido dentro do objeto Math, ceil.*/

function Teste(nome) {
    this.nome = nome
    this.executar = () => console.log('Executando...')
}
/*This no contexto da função é interpretado como: o 'nome' associado ao objeto que será 
criado a partir desta função. Ao seja: a função receberá de parâmetro o atributo nome
e 'esse nome' ficará visível para quem instanciar um objeto do tipo Teste. Em outras palavras
tornaria o atributo público.*/

const obj = new Teste('Lustre')
const obj1 = new Teste('Lamparina')
console.log(obj1.nome)
console.log(obj.nome)

/*This também auxilia a expor/tornar públicas funções.*/
obj.executar()