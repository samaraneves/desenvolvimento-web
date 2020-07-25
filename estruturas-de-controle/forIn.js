/* O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  
 * O laço pode ser executado para cada propriedade distinta do objeto ou até mesmo, de um array.
 * É uma estrutura usada muito pouco.
 */
const notas = [8.5, 7.4, 3.2, 2.0]

/*For In, não trará as notas em si, mas sim, os índices - posições - onde os valores estão alocados. */

for (let index in notas) {
    console.log(index, notas[index]) //Para acessar a nota, foi necessário inserir via array. NOMEARRAY INDICE]
}
//Para esse tipo de situação com array, existem outros tipos de soluções melhores.
//Exemplo com objeto
const pessoa = {
    nome: 'Samara',
    sobrenome: 'Neves',
    idade: 20,
    peso: 60
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
//O ideal é inserir lets, para que não tenha mais acesso fora do escopo