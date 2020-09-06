/* IIFE - Imediately Invoked Function Expression. 
 * É uma função auto-invocada, uma função que declaro ela mesmo sem nome e que no momento da declaração 
 * já a chama a execução dela. É útil para quando usamos o browser e queremos fugir do escopo global. 
 * A função auto-invocada, será chamada e tudo que for criado dentro dela será escopo local e não global.
 * É importante porque evitaria inconsistências e manipulações indesejadas. 
 */

(function() {
    console.log('Será exacutado na hora que a função for declarada.')
    console.log('Fugindo do escopo abrangente.')
})()