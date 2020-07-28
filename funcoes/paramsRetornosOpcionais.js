/* Parâmetros e Retornos em JS são opcionais, devem ser encaixadas dentro de um contexto correto.
 * É necessário exercitar a ideia de quando as coisas podem ser aplicadas ou não.
 */
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
//Não é uma função/um algoritmo muito válida/o, para ser seguido em produção.
console.log(area(2, 2)) //4
area(5, 5) //Valor acima do permitido: 25m2.
console.log(area()) //NaN, pois undefined * undefined não geram valor e não entram no IF, retornando então seu estado.
console.log(area(2)) //NaN, pois não gera valor 2*undefined, retornando o seu estado.