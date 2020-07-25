/* Array é um vetor unidimensional (uma única dimensão) onde é possível 
agrupar mais de um dado/múltiplos valores. Array é uma estrutura ordenada. 
Essa linguagem é flexível o que não precisa delimitar o tamanho dela. */

/*O array pode ser montado de maneira literal, ao seja, sem ter que instanciá-la antes.*/

const valores = [7.7, 6, 5, 3, 4]
console.log(valores[0], valores[3]) //7.7 e 3.
console.log(valores[5]) //Retorna undefined, pois o Array não possuí um indice 5. 
    //Ao seja, o valor dessa posição não foi definida. 
    //É bom estar ciente disso, pois pode acabar errando na lógica de seu sistema.
valores[5] = 10 //Atribuindo valor para uma posição.
console.log(valores)
valores[10] = 11 //Ficarão 4 posições vazias e o JS é capaz de indicar isso.
console.log(valores)
    //Verificar a quantidade de um array.
console.log(valores.length)
    //Inserir um novo valor ao final de um array. 
    //Por JS ser uma liguagem fracamente tipada, posso passar diversos valores. Seja um objeto, seja boolean e etc.
    //Apesar dessa capacidade, N É UMA BOA PRÁTICA. O ideal é prezar pelos dados homogênios dentro do conjunto.
valores.push({ id: 3 }, false, null)
console.log(valores)

/*Formas de deletar valores de um array*/
valores.pop() //Deleta o último valor do array.
delete valores[1] //Deleta o valor do array que indiquei. O comando delete funciona no contexto de objeto.
console.log(valores)
console.log(typeof valores) //Array é visto como um objeto.