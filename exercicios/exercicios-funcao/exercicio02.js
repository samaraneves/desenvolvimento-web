/*
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */
const tipoTriangulo = (ld1, ld2, ld3) => {
    if (ld1 !== ld2 && ld2 !== ld3) {
        return console.log('Triângulo Escaleno.')
    } else if (ld1 == ld2 && ld2 == ld3) {
        return console.log('Triângulo Isósceles.')
    } else {
        return console.log('Triângulo Equilátero.')
    }
}
tipoTriangulo(1, 3, 3)

//Resolução Leitão
function classificaTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));