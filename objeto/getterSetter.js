const sequencia = {
    _valor: 1, //atribuir o underline antes de um atributo é apenas uma convenção para sinalizar
    // que ela tem a visibilidade como privada. Isso não a torna privada
    get valor() {
        return this._valor++ //Estou pegando este(this) valor passado como parâmetro
    },
    //no método tipo set existe uma vantagem de atribuir validações 
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor) // 1 - incrementa se tornando 2, 
    // retorna 2 pq é maior que 1, ao seja chamou get e depois set