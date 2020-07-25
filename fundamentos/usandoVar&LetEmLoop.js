for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('valor =', i) //10. Como a variável foi definida como var, ela estará visível globalmente
    //Por ser global, o valor que sairia no console.log após a repetição seria o último número pois satisfez a condição acima 
    // para dar continuidade ao programa.

/*for (let index = 0; index < 10; index++) {
    console.log(index)
}
console.log('valor =', index)

Ocorre erro pois, por usar let ele existirá somente dentro do escopo da função for. Fora dela, não será mais visível.
*/