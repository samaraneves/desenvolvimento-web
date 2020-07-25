   /* function imprimirNomeGritado(obj) {
    *   console.log(obj.name.toUpperVase() + '!')
    *  }
    *   const obj = { name: 'Roberto' }
    * 
    *     imprimirNomeGritado(obj)
    *  Dá erro pois, não poderia realizar a função sendo que o parâmetro obj, não foi definido. 
    *  (Atenção as posições do escopo, onde foi declarado com const após a função, o que está errado)
    */


   //Seguindo com uma solução de tratamento de erros.
   function tratarErro(erro) {
       throw new Error('Ocorreu um erro no sistema!') //Vai ocorrer erro de novo, mas dessa vez vai exibir essa mensagem
           //throw 10 (Também é possível lançar valores numéricos, booleanos, strings)
   }

   function imprimirNomeGritado(obj) {
       try { //Try é usado para os casos onde existe um bloco de código do qual julgamos que poderá gerar um erro. 
           //Considerado uma exceção.
           console.log(obj.name.toUpperCase() + '!')
       } catch (e) { //Ao ser gerado uma exceção/erro o código passa para a parte do catch
           //Aqui podemos tratar o erro, por exemplo: exibir mensagem para o usuário.
           tratarErro(e)
       } finally { //Esse bloco sempre será executado, mesmo ocorrendo erro ou não.
           console.log('Final')
       }
   }
   const obj = { name: 'Roberto' }
   imprimirNomeGritado(obj)