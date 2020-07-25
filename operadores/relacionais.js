/*Operadores Relacionais também são considerados binários, pois suas operações resultam somente em sentenças
verdadeiro ou falso. Funciona geralmente como um teste funcional.
 */
console.log('01)', '1' == 1) //True porque == Atua como um operador que verifica a igualdade do conteúdo.
console.log('02)', '1' === 1) //False porque === atua como igualdade dos tipos. '1' é estritamente igual a 1?
console.log('03)', '3' != 3) //False, pois '3' é igual a 3. Será verificado o conteúdo.
console.log('04)', '3' !== 3) //True, porque '3' é estritamente diferente que 3. Pois ambos são de tipos de dados diferentes.
    /*
    estritamente
    significado: completamente, absolutamente.
    */
const d1 = new Date(0) //Se inserir 0, será a data de referência do JS: 01 de Janeiro de 1970
const d2 = new Date(0)
console.log('05', d1 === d2) //False. Porque d1 não é estritamente igual a d2. Ambos usam a variável para comparar
    //logo compararia os edenreços de memória de ambos, não exatamente seus valores
console.log('06', d1 == d2) //False. Porque d1 não é igual a d2. Ambos usam a variável para comparar

//Os dois casos relacionam os endereços de memórias por estarem contidos em variáveis
console.log('07', d1.getTime() === d2.getTime()) //True, porque compara a igualdade estrita dos tipos númericos.
console.log('08', d1.getTime() == d2.getTime()) //True, porque compara a igualdade dos conteúdos númericos.
    /*O método getTime() retorna o valor numérico correspondente 
    ao horário da data especificada de acordo com o horário universal.*/
console.log('09', undefined == null) //True. São iguais, seus conteúdos em contextos de quando ocorre 'erros'
console.log('10)', undefined === null) //False. Estritamente não são iguais

/*O ideal é usar o estritamente igual, para não ocorrer confusões em caso de comparar tipos e etc*/