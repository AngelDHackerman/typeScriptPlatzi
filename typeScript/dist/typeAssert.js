"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
let userName;
userName = 'Dariaux';
// Tenemos una cadena, TS confia en mi!
let message = userName.length > 5 ? //con <string> el valor pasa de ser un tipo any a un tipo String
    `Welcome ${userName}` :
    `UserName is too short`;
console.log('message:', message);
let userNameWithId = 'Dariaux 1';
// como obtener el user name? 
userName = userNameWithId.substring(0, 7);
console.log('User name only', userName);
// Sintaxis "as";
message = userName.length > 5 ?
    `Welcome ${userName}` :
    `User name is too short`;
let helloUser;
helloUser = 'hello Kitty';
userName = helloUser.substring(6);
console.log('userName:', userName);
