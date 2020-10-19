/* 4) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */
function imprimirHello(hello) {
    let contador = 1
    while (contador <= 11) {
        contador++
        console.log(hello)
    }

}
imprimirHello('Hello World')

//Resolução Leitão
function helloWorld() {
    let i = 0
    while (i < 11) {
        console.log("Hello World");
        i++
    }
}

helloWorld()