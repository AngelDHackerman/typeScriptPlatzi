"use strict";
// Tipo explicito 
let idUser;
idUser = 1; // number
idUser = '1'; //string
console.log(idUser, `
  Esta es la variable de idUser, ${typeof (idUser)}
`);
// Tipo inferido 
let otherId;
otherId = 2;
otherId = '2';
// otherId = true;
console.log(otherId, `Esta es la varaible otherId ${typeof (otherId)}`);
let surprise = 'hello typeScript';
// surprise.sayHello(); //Error
const res = surprise.substring(5); //Error
console.log(`usando el substring comenzando desde el caracter N. 5:`, res);
// Any se usa solo cuando no sabemos cual va a ser el tipo de dato que se va almacenar en la variable
// Este NO debe ser el tipo por defecto en el codigo typeScript.
