/* Break em Switch, causava um desvio de fluxo que consiste em sair de um ponto, pular algumas linhas e alcançar outro.
 * Por exemplo, se ele satisfaz uma opção imposta em um case, ele irá executar o bloco de código que está aqui dentro
 * e em seguida, pular os demais e concluir a estrutura, após o switch.
 * Um break não influencia uma estrutura IF, mas influencia: SWITCH, FOR, WHILE. 
 * Continue funciona dentro de: FOR e WHILE.
 * O ideal é evitar o uso de ambos embora, existam momentos que ele realmente se faz necessário.
 * Desvios de fluxos podem tornar o algoritmo confuso. 
 * O break irá agir em cima do bloco mais acima. Se por exemplo ele estiver dentro de um IF, mas esse if está dentro de 
 * SWITCH, FOR ou WHILE, ele irá agir em cima deles. Ele pesquisa qual o bloco mais próximo para desviar o fluxo encontrando 
 * eles, onde há maior compatibilidade.
 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (index in nums) {
    if (index == 5) {
        break //Interrompe e saí do laço para ir na próxima sentença de código que é o console.log
    }
    console.log(`${index} = ${nums[index]}`)
}

for (indices in nums) {
    if (indices == 5) {
        continue //Não sairá do laço, só irá pular a execução da condicional e continuar as demais partes da repetição.
        //Também age em cima do FOR ou WHILE.
    }
    console.log(`${indices} = ${nums[indices]}`)
}
externo: for (a in nums) {
    for (b in nums) {
        if (a == 3 && b == 2) {
            //break - Ele vai interromper o break mais próximo, sendo o for-b
            break externo //Pega o primeiro For. O externo serviria como rótulo, 
            //uma forma de identificar as estruturas para aplicar o break
        }
        console.log(`Par ${a}, ${b}`)
    }
}