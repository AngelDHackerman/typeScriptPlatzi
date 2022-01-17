
        // Null
// Explicito 

let nullVariable: null;
nullVariable = null; 
// nullVariable = 1; //Error!!!

let otherVariable = null; //Aqui typeScript solo lo reconoce como de tipo: any no como null.
otherVariable = 'test'; 

console.group(`valores en null`)
  console.log('nullVariable:', nullVariable);
  console.log(`otherVariable: ${otherVariable}`);
console.groupEnd()



        // Undefined 
      // Explicito

let undefinedVariable: undefined = undefined; // Su tipo es: undefined
// undefinedVariable = 'test'; //Error 


      // NO explicito

let otherUndefined = undefined;  // Su tipo es: Any 
otherUndefined = 1; 

console.group(`valores Undefined`);
  console.log(`undefinedVariable: ${undefinedVariable}`);
  console.log(`otherUndefined: ${otherUndefined}`);
console.groupEnd();



        //Null y Undefined: Como suptipos.

// --strictNullchecks 

// usando tsc /src/archivo.ts --strictNullchecks, nos da un reporte de los errores que tiene nuestro codigo.
// Tambien lo podemos hacer cambiando el strictNullChecks en el archivo tsConfig.json


let albumName: string = 'hola';
// albumName = null;
// albumName = undefined;
