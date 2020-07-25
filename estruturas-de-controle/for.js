let contador = 1
while (contador <= 10) {
    console.log(`Número atual do contador: ${contador}`)
    contador++
}
//Esta mesma ação está presente dentro do laço for economizando então, linhas de código.
//<valor de definição inicial ; expressão lógica ; incremendo ou decremento>
for (let index = 1; index <= 10; index++) {
    console.log(`Contador: ${index}`)
}
const notas = [5, 6, 7, 8, 9, 10]
for (let index = 1; index < notas.length; index++) {
    console.log(`Notas = ${notas[index]}`)
}