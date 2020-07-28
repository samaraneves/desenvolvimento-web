/* Serão mostradas as versões antes do ECMA 2015 e após, de como lidar com parâmetros padrões.*/

// Estratégia 1: O uso do operador OR (||) para ter o efeito de um valor padrão --- como mostrado no arquivo fundamentos/boolean
function Soma(a, b, c) {
    a = a || 1 //Se o primeiro valor for falso, receberá o número 1.
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(Soma()) //3. O resultado precisaria ser diferente de null ou undefined.
console.log(Soma(2, 2, 2)) //6
console.log(Soma(3)) //5, pois somente o params a recebeu o valor.
console.log(Soma(0, 0, 0)) //PONTO RUIM DA SOLUCAO: 3. Pois, 0 é considerado falso e com isso, não irá assumir o padrão

//Estratégias 2, 3 e 4 para gerar valor padrão
function Soma01(a, b, c) {
    a = a != undefined ? a : 1
        /* Se o valor de a for diferente de indefinido, ele receberá o valor próprio do a
         * se não for, receberá 1. Estratégia 2: Como apresentada, uso do operdor ternário com != ele pega o null também
        com !== estritamente diferente, somente o undefined.*/
    b = 1 in arguments ? b : 1
        /* Estratégia 3: Se existir o índice 1 nos argumentos, pegue o valor de B. 
         * Se não, use 1. Isso indica se o array (dos params) não estiver vazio.
         * Como nos parâmetros, b é o segundo, no array ele seria equivalente ao índice 1
         * a seria 0 e c o 2.*/
    c = isNaN(c) ? 1 : c
        /*Estratégia 4: O mais adequado quando estamos realizando operações matemáticas pois, o que esperamos é que sejam números
         * Se é (Não é um Número/NaN), o valor será 1. Se não, o valor será o atribuído para c.*/
}