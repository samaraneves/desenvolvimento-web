console.log(typeof Object) //Function
console.log(typeof new Object) //Objeto

const Cliente = function() {}
console.log(typeof Cliente) //Function
console.log(typeof new Cliente) // Objeto
class Produto {}
console.log(typeof Produto) //Function
console.log(typeof new Produto) //Objeto

/* Uma classe pode ser uma maneira diferente de escrever uma função - que pode ter atributos e comportamentos. 
Nele, vemos características semelhantes tais como:
* criar os moldes/estrutura do escopo
* criar suas variáveis

Em JavaScript, pode criar o objeto de forma literal (const objeto = {chave: valor, chave: valor}), aqui já vem a instância.
Ou a partir de uma função instanciar o objeto (new NOMEDAFUNC() ou sem parentêses), pois aqui entende-se que já possui
os atributos que são suas propriedades.

*/