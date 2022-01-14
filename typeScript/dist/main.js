"use strict";
console.log('hola platzi');
console.log('probando el compilador');
//Tipo: Number 
//Explicit 
let phone;
phone = 44425358;
// phone = 'hola'; //Error
// Inferido 
let phoneNumber = 44425358;
// phoneNumber = 'hola'; //Error (porque no es de tipo Number)
let hexadecimal = 0xf00d; //0x para inicar un valor hexadecimal(comprendidos entre 0 y f);
let binario = 0b1010; //0b para iniciar un valor binario (comprendidos entre 0 y1 );
let octal = 0o744; //0o para iniciar un valor octal (comprendidos entre 0 y 7 );
//Tipo: boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1; //Error 
// Tipado Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; //Error (porque no es de tipo boolean)
// Tipo: String
let userName = 'Angel';
userName = "Dario";
// userName = 10; //Error (porque no es de tipo String)
// Templa String
// Uso de back-tick `
let userInfo;
userInfo = `
  User info: 
  userName: ${userName}
  firstName: ${userName} Santiago
  phone: ${phone}
  isPro: ${isPro}
`;
console.log(userInfo);
