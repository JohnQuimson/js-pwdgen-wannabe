'use strict';

//Dichiarazione
const elementNome = prompt('Nome: ');
const elementCognome = prompt('Cognome: ');
const elementColore = prompt('Colore: ');

//numero casuale da 1 a 100
const elementNumCasuale = Math.floor(Math.random() * 100) + 1;

//password
const password =
  elementNome + elementCognome + elementColore + elementNumCasuale;

//stampa sulla pagina
document.write('La Password è: ' + password);

//stampa sulla console
console.log(password);
