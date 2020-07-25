/*Muito útil nas situações onde necessitamos concatenar diversas strings
o trabalho pode ficar cansativo ao precisar reunir tudo.
*/

const nome = 'Samara'
const concatenar = 'Olá' + nome + '!'
const template = `Olá
${nome}!`
console.log(template)

/*O template string permite que consigamos pular linhas com strings e ir combinando eles com o texto que desejamos
Isso poupa o tempo de usar + ou a .concat() e ainda podemos combinar espaços para facilitar a solução*/

/*É possível inserir expressões dentro do template*/
const conta = `${1+1}`
console.log(conta)
    /*É possível inserir uma função. No exemplo, o texto é passado para a função (através do teste que seria 
        um parâmetro*/
const texto = teste => teste.toUpperCase()
console.log(`Ei...${texto('cuidado')}!`)