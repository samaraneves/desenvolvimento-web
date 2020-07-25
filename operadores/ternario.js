/*Operador Ternário (?) ele consiste inicialmente com uma expressão relacional que retorne um valor booleano.
 */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
    /*nota >= 7 (OPERACAO RELACIONAL) ? 'Aprovado' (RESULTADO DA CONDICIONAL POSITIVA): 'Reprovado'
    (RESULTADO DA CONDICIONAL NEGATIVA)
    */
console.log(resultado(4)) //Reprovado
console.log(resultado(9)) //Aprovado