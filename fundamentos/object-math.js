/* Como JS não tem um símbolo de exponenciação, é preciso usar a classe Math. No exemplo, será usado para calcular a área de uma circunferência*/
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
    /*Math.PI, PI corresponderia a representação da proporção 
        entre a circunferência e seu diâmetro. Ao seja, o valor de PI
        
        O método pow, retorna a base elevado o expoente declarado subsequentemente. Math.pow(BASE,EXPOENTE) */
console.log(area.toFixed(2))
console.log(typeof Math)