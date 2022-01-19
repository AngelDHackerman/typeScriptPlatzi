export {}
// 10, '10';

let idUser: number | string;
idUser = 10;
idUser = 'diez';

console.log(idUser, typeof(idUser))

            // Buscar userName dado un ID 

const getUserNameById = (id: number | string) => { 
  // logica de un negocio para encontrar el user;

  return ('Dariaux');
}

console.log(getUserNameById(20));
console.log(getUserNameById('20'));


          // Alias de tipos: TS 

type IdUser = number | string;
type UserName = string;

const getUser = (id: IdUser): UserName => { //(id: IdUser): UserName esto indica que el valor de retorno sera un 'string' porque ese es el valor del alias UserName
  
  return '10066022';
}


            // Tipos Literales 
// 100 x 100, 500 x 500, 1000 x 1000;

type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; //Error
let smallPicture: SquareSize = '100x100'; 
let mediumPicture: SquareSize = '500x500'; 
let bigPicture: SquareSize = '1000x1000'; 

console.log('small:', smallPicture, 'medium:', mediumPicture, 'big:', bigPicture)



