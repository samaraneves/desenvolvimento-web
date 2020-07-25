// Exemplo básico de funções em JavaScript
//Função nomeada (Com nome) e função anônima (Sem nome)

/*Em JS, nunca deixamos explícito em uma função se ela retorna um dado ou não.
Em um momento, pode deixar ele retornar e em outro, não retornar. */

/*A função delimita um bloco, o conteúdo da função é o escopo do bloco.
Ela recebe dados de entrada e dentro dela, realizamos a transição toda do algoritmo.
Agrupa várias sentenças de código que visam servir para atingir uma finalidade.
 */
//Função sem retorno
function ImprimirSoma(a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)
    //ImprimirSoma(2) Dá NaN, pois seria a soma de 2 + undefined. 
    //ImprimirSoma(2,3,4,5,6,7) Irá somar somente os dois primeiros parâmetros e ignorar o resto.
    //ImprimirSoma() Irá imprimir NaN porque seria o equivalente a undefined + undefined.

function Soma(a, b = 0) { //O b=0 será usado quando nenhum valor for passado para b. É um detalhe que veio com o novo ECMAScript
    return a + b
}
console.log(Soma(1, 3))
console.log(Soma(1))