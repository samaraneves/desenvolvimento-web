/* Diferença entre usar Callback e outra sem uso do Call Back*/
const notas = [8.5, 6.8, 3.2, 1, 10]

//Sem Callback
let notasBaixas = [] //Usado let só para reutilizar no próximo exemplo.
for (index in notas) {
    if (notas[index] < 7) {
        notasBaixas.push(notas[index])
    }
}
console.log(notasBaixas) //[ 6.8, 3.2, 1 ]
    //Com callbck
let notasBaixas2 = notas.filter(nota => nota < 7) //Aqui está o Callback, essa função irá retornar se a sentença é verdadeira ou falsa.
    /* Se for verdadeiro, os elementos irão serem adicionados no Array caso contrário, serão excluídos.
     */
console.log(notasBaixas2) //[ 6.8, 3.2, 1 ]
    //Uma maneira boa de reutilizar
const notasMenorque7 = nota => nota < 7
let notasBaixas3 = notas.filter(notasMenorque7)
console.log(notasBaixas3)