let valor
console.log(valor) //Retorna undefined, pois não foi atribuído nenhum valor, com isso não se sabe o conteúdo dessa variável.
    //Não foi inicializado
    //console.log(valor2) Apresentará erro, pois essa variável sequer foi definidida.

valor = null
    /*Ausência de valor.Uma forma de fazer com que a variávei não aponte mais 
nenhum ponteiro de memória */
console.log(valor)
    /*BOA PRÁTICA: Não aponte uma variável como valor undefined, é preciso deixar que a linguagem propriamente aponte isso*
    Não faria sentido, atribuir como indefinido, uma variável que foi utilizada no decorrer do código.*/

/*Cuidados a serem tomados: valor.toString() daria erro, pois não há valor. 
Se não se atentar a isso no decorrer do algoritmo, poderá enfrentar problemas.*/
const produto = {}
console.log(produto.preco) //Sairá como undefined, pois apesar do objeto produto existir, o atributo preço não foi definido.
console.log(!!produto.preco) //Por ser undefined,sairá falso