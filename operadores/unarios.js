/*Os operadores unários, é o operador que está relacionado a um operando, como exemplos os casos:
 * Números negativos.
 * Forma de incrementar VAR/Número ++
 * Existem as formas: pós-fixado (OPERANDO++/--), pré-fixado (++/--OPERANDO) 
 * e o fixado (Mas esse é caso binário: OPERANDO + OPERANDO)
 */
let num1 = 1
let num2 = 2
console.log(++num1 === num2--) //True. Não é recomendado usar isso, pois é uma expressão confusa.
    //Evitar usar incremendo em comparação.
    //pelo incremento estar antes do num1, ele recebe +1 ficando com o valor 2.
    //pelo decremento estar depois do num2, a comparação foi realizada ainda quando ele tinha seu valor 2.
    //Ele passa a ser 1, depois que ocorre a comparação.
    //Ao seja, ficou 2 === 2