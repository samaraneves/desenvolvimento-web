# Introdução a Orientação a Objetos

Antes da Programação Procedural (Baseada em funções), existia o paradigma Go To que consistia em desvios de fluxos, saltando em diversos trechos em mais de um ponto do código. Não era estruturado e foi muito criticado, principalmente na área de qualidade de software.

Após esse advento, começou a criação de linguagens com paradigma estruturado. 

- O paradigma procedural é baseado nas procedures isto, é nos procedimentos, as funções. O trecho de código é nomeado e é reutilizado em vários locais, o que não acontecia no primeiro paradigma o que fazia com que o código precisasse saltar de local. Com o Procedural, ocorre a ideia de ponteiros, no armazenamento de um valor e na manipulação dele.

- Orientação a Objetos mudou o foco nas funções que manipulavam dados, trazendo o conceito de dados que carregam funções. O objeto é uma figura central, possui atributos que carregam suas características que podem ser dados e funções/métodos que seriam os comportamentos que podem usufruir destes valores ou características.
- O objeto age como uma capsula. A proximidade de OO é interpretado como o mundo real.
- Um objeto pode exercer um parentesco com outro objeto.
- Um objeto pode estar inserido dentro de outro. Seriam os sub-objetos.

# Princípios
- Abstração: Pegar um objeto do mundo real e ser capaz de traduzí-lo para trazer ele para dentro da programação, a forma como é interpretado para ser implementado a um programa.

- Encapsulamento: Os detalhes de implementação protegidos, visíveis por uma interface simples para um determinado objeto. Isso faz com que não seja obrigatório entender seus pormenores, mas sua interface sim. A adaptação não precisa ser ao interno do sistema, mas a sua interface de acesso. Ao expor para algum exterior, os detalhes, a outra parte fica no interno caso mude algo que está mais interno isso não gerará impacto na interface.

- Herança (Prototype): A capacidade de herdar características de outros objetos. Herança por composição: Faz parte do objeto, pois também possuem suas características. Podem ser objetos mais simples dentro dele como por exemplo: o carro é um objeto, mas ele tem um sub-objeto que é o tipo do motor. 

    - Em JavaScript é permitido somente ter 1 objeto pai, existe a cadeia de protótipos. (Prototypes)
    
- Polimorfismo: Conceito abstrato que representa múltiplas formas, é possível substituir por objetos concretos. Exemplo: um carro em um momento aponta para uma ferrari e depois, para um uno.

