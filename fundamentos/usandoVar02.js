var numero = 1; {
    numero = 2
    console.log('dentro =' + numero)
}
console.log('fora =' + numero)
    /*O resultado do trecho do código acima imprime duas vezes o número 2, 
    não existe escopo de bloco com var e com isso ele ignora
    Por isso, é aconselhado a evitar o ecopo global, 
    pois muitos sites ou sistemas que poderão ser 80% dependentes de códigos JS

    Não existe escopo de bloco com var. 

    Escopo de bloco seria somente com chaves. Ele ignora as chaves: 
    {
        var a = 'valor'   
    }*/