          // Corchetes []

// Tipo Explicito

let palabras: String[];
palabras = ['hola', 'como', 'estas',];
// users = [1, true, 'test',] //Error en el 1 y 2 valor;


// Tipo inferido

let otherUsers = ['hola', 'como', 'estas',]
// otherUsers = [1, true, 'test',] //Error en el 1 y 2 valor;\

          // Array<TIPO> 

let pictureTitle: Array<string>;
pictureTitle = ['sunset', 'Vacation time', 'landscape',];

// Accediento a los valores en un array.

console.group(`Accediento a los valores en un array.`)
  console.log('frist word:', palabras[0]);
  console.log('first title:', pictureTitle[0]);
console.groupEnd();

// Propiedades en Array 

console.group(`Propiedades en Array`)
  console.log('palabras.lenght:', palabras.length);
console.groupEnd();

// Uso de funciones 

palabras.push('todo bien');
palabras.sort();


console.group(`Uso de funciones`)
  console.log(`palabras despues del sort:`, palabras)
console.groupEnd()
