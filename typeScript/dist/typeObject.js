"use strict";
//  type: object
// Object: instancia de la clase Object de javaScript 
// object: tipo para valores no primitivos.
// Con este tipo no se puede acceder a las propiedades del objeto.
let user; //Tipo object de TypeScript
user = {}; //Object 
user = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pablo',
    isPro: true,
};
console.log(`user:`, user);
// Object vs object(clase JS vs tipo TS)
const myObject = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pablo',
    isPro: true,
};
// const myObject = {...user} //Esto no es valido para typeScript aun lo detecta como error.
const isInstance = myObject instanceof Object; //Clase object de javaScript
console.log('isInstance', isInstance);
console.log(`myObject.userName:`, myObject.userName);
