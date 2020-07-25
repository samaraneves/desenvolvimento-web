const nome = 'Samara'
console.log(nome.charAt(4))
    /*Método charAt retorna a letra/caractere que ocupa a posição indicada.
Se inserir um número que vá além do que está dentro da cadeia de caracteres, JS irá retornar vazio
indicando que não conseguiu localizar a posição dentro do conteúdo pesquisado*/

console.log(nome.charCodeAt(3))
    /*A função charCodeAt() visa apresentar o código ascii da posição selecionada
    -> A tabela ascii existe para padronizar os códigos para caracteres alfa-numéricos*/

console.log(nome.indexOf('S'))
    /* A função indexOf tem como objetivo, retornar a posição de onde determinado caractere está no conteúdo*/
console.log(nome.substring(2, 6))
    /* A função substring tem como objetivo extrair os caracteres estabelecidos pelo início e fim
    substring(VALOR INCIAL, VALOR FINAL)*/
console.log(nome.concat(' Pereira').concat(' Neves').concat(' C.'.concat(' A.')))
    /*A função .concat() visa concatenar conteúdos.*/
console.log('Samara, Pereira, Neves, C ,A'.split(','))
    /*A função .split() consegue converter conteúdos em arrays. Estabelecendo entre parentêses, 
    qual o separados do conjunto que os separa serão convertidos em posições, o split irá separá-los 
    como os elementos. Também é possível aplicar REGEX, no contexto de split*/