/* 26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/
function valoresPares() {
    for (let index = 1; index < 100; index++) {
        if (index % 2 == 0) {
            console.log(index)
        }
    }
}
valoresPares()

//Resolução Leitão
function acharPares() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

acharPares()