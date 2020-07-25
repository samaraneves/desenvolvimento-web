// /* Conceito: Escopo é o local onde a variável é localizada/visível*/
{
    {
        {
            {
                var sera = 'Será??'
            }
        }
    }
}
console.log(sera)
    /*Variáveis criadas com var fora de funções ficarão visíveis dentro ou fora do bloco. 
    Ele fica visível para todo o arquivo. A principal característica de var. 
    Ela possuí até 2 escopos possíveis.*/

function teste() {
    var local = 123
}
//teste()
//console.log(local) 
/*Dará erro, não será visível fora do escopo, pois a variável foi criada somente dentro dela. 
Ao seja, será válida somente dentro do escopo a qual ela foi definida.*/

/*Window é objeto global que é o equivalente ao conteúdo completo da nossa aba.
 Quando criamos uma variável e ela não está dentro de um escopo, ela passa a pertencer ao Window, ao seja
 torna-se visível para a janela. No caso do primeiro exemplo, se tornaria um window.sera, um atributo do objeto window.
 Ao atribuir um novo valor para a variável, ele irá sobrescrever o que foi atribuído anterior.*/

/*A IMPORTANCIA DE FUGIR DO ESCOPO GLOBAL:
 * Apesar de existir a vantagem da variável ser visível em todo o arquivo/programa, ocorre o risco dela ser sobrescrita sem intenção e é um risco. 
 * Os 2 escopos visíveis para var são: 1) Ou será criada em escopo global.
 * 2) Ou cria em escopo de função.
 */