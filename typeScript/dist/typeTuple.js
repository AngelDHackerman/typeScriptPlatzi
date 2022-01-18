"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuplas
// [1, 'user']
let user; // Asi agregados 2 tipos de valores en Ts
user = [1, 'dariaux'];
console.group(`Tuplas`);
console.log(user);
console.log(`userName: ${user[1]}, ID: ${user[0]}`);
console.log(`userName.lenght: ${user[1].length} characters.`);
console.groupEnd();
// Tuplas con varios valores 
// id, userName, isPro
console.group(`Tuplas con varios valores`);
let userInfo;
userInfo = [2, 'dariaux', true];
console.log(`infoUser:`, userInfo);
console.groupEnd();
// Arreglo de tuplas
console.group(`Arreglo de tuplas`);
let array = [];
array.push([1, 'dariaux']);
array.push([2, 'angel']);
array.push([3, 'amoureux']);
console.log(array);
// Uso de funciones Array 
// amoureux --> amoureux001
array[2][1] = array[2][1].concat('001');
console.log(array);
console.groupEnd();
