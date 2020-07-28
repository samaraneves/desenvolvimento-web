/* This é uma referência - ligação que ele faz/ contém o valor de - ao/um objeto. 
 * Normalmente é usado dentro de uma função ou método, embora possa ser usado fora de uma função no escopo global.
 * Em JS, ele se comporta de maneira diferente em vista as outras linguagens. 
 * Em muitos casos, o valor this é determinado pela forma como a função é chamada. 
 * Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada.
 * Ao seja, definindo a função, o this também será definido.
 * Uma função definida da forma tradicional no JS (function(){}) o this pode variar. Nem sempre será o resultado esperado.
 * Se uma função for definida da forma arrow function (()=>CODEAQUI),o this não irá variar, pois ele 'prenderá' o contexto
 * em que this foi definido dentro da função.
 */

//THIS E O MÉTODO BIND
const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //Bom dia! -Interpretando:
            //Qual o valor do atributo do objeto dono dessa função que estou chamando?! Saudacao.
            //Sem o this, ocorrerá erro de definição, não localizará o 'saudacao'. 
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //undefined resultado de um Efeito Colateral de Programação Funcional e Programação Orientada a Objetos
    /* O que ocorre para retornar o valor undefined, é que o This do Objeto pessoa quando chamo o método falar 
     * (Isso porque foi armazenado em uma variável) o this alterou seu contexto, não pertencendo mais ao Objeto pessoa.
     * Para ajustar esse erro de comunicação, existe o método bind() onde necessitamos 
     * passar o objeto que referenciaria o this.
     */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //Bom dia!