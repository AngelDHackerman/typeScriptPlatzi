export {};
    // <tipo> // Angle Bracket syntax

let userName: any;
userName = 'Dariaux';

// Tenemos una cadena, TS confia en mi!

let message: string = (<string> userName).length > 5 ? //con <string> el valor pasa de ser un tipo any a un tipo String
                        `Welcome ${userName}` : 
                        `UserName is too short`;

console.log('message:', message);



let userNameWithId: any = 'Dariaux 1';
// como obtener el user name? 
userName = (<string>userNameWithId).substring(0, 7);
console.log('User name only', userName);


// Sintaxis "as";

message = (userName as string).length > 5 ? 
          `Welcome ${userName}` : 
          `User name is too short`;

let helloUser: any;
helloUser = 'hello Kitty';
userName = (helloUser as string).substring(6);
console.log('userName:', userName);