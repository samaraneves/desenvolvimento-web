/*ENUNCIADO: 
- Você tem dois trabalhos para executar na semana: um na Terça-feira e outro na Quinta-feira.
- SE o trabalho de Terça E o trabalho de Quinta derem certo, no final de semana comprará uma televisão de 50 polegas 
e tomará sorvete. (E)
- SE apenas um dos dois trabalhos derem certo, irá ao shopping e comprará uma televisão de 32 polegas. 
(xor - ou exclusivo)
- Conseguindo fazer os dois serviços ou um deles, poderá tomar sorvete. (OU)
- SE não realizar nenhum, não comprará TV e não irá tomar sorvete.
- SE você não tomar sorvete, estrá saudável. (Negação)
*/

//Forma de resolução apresentada na aula:
function compras(trabalho1, trabalho2) {
    const comprarTV50p = trabalho1 && trabalho2 //&& operador curto-circuito, onde a partir da análise 
        //do primeiro operando pode banir a necessidade de verificar o segundo. //Operador Binário
    const comprarTV32p = trabalho1 != trabalho2 //!= pode ser usado para representar o OU EXCLUSIVO (XOR)
        //pois, ele só apresentará um resultado verdadeiro se ambos os valores forem diferentes. 
        //Existe a forma de usar o bitwise xor, que opera bit a bit entre os valores: 
        //const comprarTV32p = !!(trabalho1^trabalho2) //Não muito recomendado //Operador Binário
    const comprarSorvete = trabalho1 || trabalho2 //Operador Binário
    const manterSaudavel = !comprarSorvete //Operador Unário

    return { comprarSorvete, comprarTV32p, comprarTV50p, manterSaudavel }
}
/*
 * Enviar um retorno com variáveis no objeto, sem necessitar ele ao conceito de chave e valor é uma atualização do ECMA
 * como uma solução inteligente e que evita redundâncias. Do tipo: 
 * { sorvete: comprarSorvete, tv32p: comprarTV32p, tv50p: comprarTV50p, saudavel: manterSaudavel }
 * Evita que digitemos duas vezes a mesma coisa ou que denote ter o mesmo significado.
 */
console.log(compras(true, true))
    /*
    {
      comprarSorvete: true,
      comprarTV32p: false,
      comprarTV50p: true,
      manterSaudavel: false
    }
    */
console.log(compras(false, true))
    /*
    {
      comprarSorvete: true,
      comprarTV32p: true,
      comprarTV50p: false,
      manterSaudavel: false
    }
    */
console.log(compras(false, false))
    /*
    {
      comprarSorvete: false,
      comprarTV32p: false,
      comprarTV50p: false,
      manterSaudavel: true
    }
    */