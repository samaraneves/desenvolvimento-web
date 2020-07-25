const [a, b, c, d] = [2, 5, 8, 10]
const soma = a + b + c + d
    //As operações aritméticas são realizadas em binários ao seja seria somado:
    //1) (a+b) resultado da soma, seria somado por c, resultado seria somado por d
    //(((a+b)+c)+d) operações binárias, operando em dois operandos
    //Esse tipo de sintaxe se chama infixa, o operador fica entre os operandos
d++ //Sintaxe pós-fixa, quando o operador fica após o operando
++d // Sintaxe pré-fixa, quando o operador fica antes do operando
    -
    a // Seria um operador unário, pois é um operador atuando em cima de um único operando