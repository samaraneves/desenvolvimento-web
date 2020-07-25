var numero = 1

{
    let numero = 2
    console.log('dentro=', numero) // 2
}
console.log('fora=', numero) // 1

/* Diferente de var, let irá aderir o conceito de bloco. Qualquer bloco, independente se está associado a uma função ou não.
 * Embora o let tenha o mesmo nome do var, por considerarem estar em escopos diferentes ele não adere ao valor da var.
 * Mesmo se ambas fossem lets, ele iria apresentar os mesmos resultados por considerar a difereciação de escopo.
 * Alterando o nome da variável dentro do escopo de bloco, ele continuará a exibir o valor dela primeiro ao invés da outra
 * pois, let prioriza os escopos para exibir os dados do mais interno para o externo. */

let saudacao = 'oi'

{
    let saudacao = 'olá'
    console.log('saudar=', saudacao)
}
console.log('saudar=', saudacao)
    /* Let possui 3 situações: Escopo global, escopo de função e escopo de bloco*/