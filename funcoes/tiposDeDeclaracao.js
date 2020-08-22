console.log(soma(5, 5)) //10
    // Função de declaração
    // -- Declarando a função desta maneira, é possível chamá-la antes do seu escopo léxico 
    // --- O interpretador do JS irá trazer primeiro as funções do arquivo, carrega elas as deixando preparadas
    // depois, o restante do código.
function soma(x, y) {
    return x + y
}

// Função de expressão / Varável de função / Função de valor
// --- Não pode chamar a função antes do contexto emq que foi definida porque ele foi ATRIBUÍDO A UM VALOR,
// o que pelo interpretador realiza depois, de carregar todas as funções do arquivo
const subtracao = function(x, y) {
    return x - y
}

// Expressão de função nomeada
// -- É pouco usado
// --- A única vantagem que pode observar é o fato de quando estiver debugando o código, o nome da função irá aparecer no stack
// --- Não apresentando como função anônima, pode ajudar nesta questão
// ---- Não pode chamar a função antes do contexto emq que foi definida porque ele foi ATRIBUÍDO A UM VALOR,
// o que pelo interpretador realiza depois, de carregar todas as funções do arquivo
const mult = function mult(x, y) {
    return x * y
}