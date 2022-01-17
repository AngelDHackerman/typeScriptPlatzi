// Null
// Explicito 
var nullVariable;
nullVariable = null;
// nullVariable = 1; //Error!!!
var otherVariable = null; //Aqui typeScript solo lo reconoce como de tipo: any no como null.
otherVariable = 'test';
console.group("valores en null");
console.log('nullVariable:', nullVariable);
console.log("otherVariable: ".concat(otherVariable));
console.groupEnd();
// Undefined 
// Explicito
var undefinedVariable = undefined; // Su tipo es: undefined
// undefinedVariable = 'test'; //Error 
// NO explicito
var otherUndefined = undefined; // Su tipo es: Any 
otherUndefined = 1;
console.group("valores Undefined");
console.log("undefinedVariable: ".concat(undefinedVariable));
console.log("otherUndefined: ".concat(otherUndefined));
console.groupEnd();
//Null y Undefined: Como suptipos.
// --strictNullchecks 
var albumName;
albumName = null;
albumName = undefined;
