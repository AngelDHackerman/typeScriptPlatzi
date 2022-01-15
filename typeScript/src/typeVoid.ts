            // Void
      // Tipo explicito

function showInfo (user: any): any { 
  console.log('user info', user.id, user.userName, user.firstName)
  // return 'hola';
}

showInfo({ 
  id: 1, 
  userName: 'Dariaux',
  firstName: 'Angel',
})

      // Tipo inferido

 function showformattedInfo (user: any) { //Este es un tipo de funcion void.
   console.log('User info', `
    id: ${user.id}
    userName: ${user.userName}
    firstName: ${user.userName}
   `)
 }

 showformattedInfo({ 
  id: 1, 
  userName: 'Dariaux',
  firstName: 'Angel',
})

            // tipo void, como tipo de dato en variable

let unusable: void;
// unusable = null;    //Error en el modo estricto
unusable = undefined;     


            // tipo NEVER, 

function handleError(code: number, message: string): never { 

  // process your code here. 
  // Generate a message. 
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, `page not found`);
} catch (error) {
  console.error(`Error was detected thanks to the try catch`)
}

function sumNumbers (limit: Number): never { //NEVER significa que nunca va a haber un retorno 
  let sum = 0;
  while(true) {
    sum++;
  }
}

sumNumbers(100);