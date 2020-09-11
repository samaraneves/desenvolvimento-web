/*
 * 6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos. 
 */
let jurosSimples = (capitalInicial, taxaJuros, tempoAplicado) => {
    let juros = capitalInicial * taxaJuros * tempoAplicado
    return `juros simples: ${capitalInicial + juros}`
}

let jurosComposto = (capitalInicial, taxaJuros, tempoAplicado) => {
    let montante = capitalInicial * (Math.pow(1 + taxaJuros, tempoAplicado))
    let juros = montante - capitalInicial
    return `juros composto: ${juros.toFixed(2)}`
}

console.log(jurosSimples(2000, 0.1, 2))
console.log(jurosComposto(2000, 0.1, 2))

//Resolução Leitão
function jurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosCompostos(100, 10 / 100, 2));