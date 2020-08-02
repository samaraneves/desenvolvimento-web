//Exemplo que será testado no console do navegador.
document.getElementsByTagName('body')[0].onclick = function(evento) {
        console.log('O evento ocorreu!!')
    }
    /* Inserindo esse código no navegador, é notado que enquanto eu não clico no body, o evento não dispara.
     * Essa ação de eu ter que clicar ao seja, os eventos em javascript, podem ser considerados um callback
     por que irá chamar a função que irá disparar o console.log.*/