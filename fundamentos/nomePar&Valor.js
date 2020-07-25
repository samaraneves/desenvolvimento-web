const saudacao = 'Oi!' //Contexto Léxico 1

/* Contexto léxico seria o local físico onde a variável foi definida.
Ao seja: onde sua variável foi criada no arquivo. O contexto léxico, é interpretado dentro do objeto Window.
O contexto léxico dentro de uma função, apesar de dentro dela também considerado, mas de modo mais restrito.
*/

function exec() {
    const saudacao = 'E aí' //Contexto Léximo 2
    return saudacao
}
/*Na ordem do arquivo, o segundo saudacao inserido dentro da função 'exec' na leitura do arquivo
ele entra como segundo contexto léxico, ao seja segundo local onde uma variável foi definida. 
Isso gera até uma pesquisa em ordem, onde supondo que não exista a atribuição do 'E aí'
(Que funciona porque apesar de ter o mesmo nome, o const está sendo usado em contextos diferentes sendo 
o primeiro global e o segundo, contexto de função.)

Se não existisse a atribuição dentro da função, o arquivo buscaria qual o contexto léxico mais externo
identificando o 1 que tem 'Olá'como conteúdo.
 */
console.log(exec())