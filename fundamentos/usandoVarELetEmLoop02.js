const funcs = []

for (var index = 1; index < 10; index++) {
    funcs.push(function() {
        console.log(index)
    })
}
funcs[2]() //10
funcs[8]() //10
    /*Um problema do var: Independente no caso dessa função iria sair 10 como resultado, porque ele concluiria o loop
    para prosseguir o programa. Mesmo que exista o push, adicionando os elementos, ele não respeitaria. Isso tudo ocorre 
    porque var não possuí escopo de função.
     */

const funcs01 = []

for (let i = 1; i < 10; i++) {
    funcs01.push(function() {
        console.log(i)
    })
}
funcs01[2]() //3
funcs01[6]() //7
funcs01[8]() //9

/*Neste caso com let, deu certo pois ele leva em consideração o escopo de função.
A função aberta dentro do método push, lembrará na memória do valor de i dentro do escopo e armazená-lo 
pois push, possui a funcionalidade de ir adicionando os valores nos índices do array.*/