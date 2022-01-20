              // Definimos tipos de parametros 

type SquareSize = '100x100' | '500x500' | '1000x1000';

const createPicture = (title: string, date: string, size: SquareSize) => { 
  // Se crea la fotografia 
  console.log('Create picture using:', title, date, size)
}

createPicture('La ciudad', '2018', '1000x1000');

// createPicture('colombia trip', '2020-01') //Error



            // Parametros opcionales 

const createPicture1 = (title?: string, date?: string, size?: SquareSize) => { // el ? a la par del parametro lo define como opcional.
  // Se crea la fotografia 
  console.log('Create picture using v1:', title, date, size)
}

createPicture1('colombia trip', '2020-01') 


              // Flat arrow functions 
              // Aqui nos regresa un objeto literal

const createPic = (title: string, date: string, size: SquareSize): object => { 
  // return { 
  //   title: title,
  //   date: date, 
  //   size: size,
  // };
  return { title, date, size, }
}

const picture = createPic('Platzi session', '2019-9-12', '100x100');
console.log(picture);








