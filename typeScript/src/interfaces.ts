// Funcion para mostrar una fotografia 
export {};

enum PhotoOrientation { 
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

interface Picture { 
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

const showPicture = (picture: Picture) => { 
  console.log(
`       [title: ${picture.title}, 
        date:${picture.date}, 
        orientation: ${picture.orientation}]`);
}

let myPic = { 
  title:"Test Tile", 
  date: '2020-03', 
  orientation: PhotoOrientation.Landscape,
}

showPicture(myPic);

        // Enviar un objeto anonimo

showPicture ({ 
  title:'test title 2',
  date: '2022-01', 
  orientation: PhotoOrientation.Portrait,
  // extra: 'prueba', //Error
})

              // Interfaces opcionales

interface PictureConfig { 
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

const generatePicture = (config: PictureConfig) => { 
  const pic = {title: 'Default', date: '2022-01'};
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) { 
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture ({});
console.log('picture:' ,picture);

picture = generatePicture({title: 'Travel pic'});
console.log('picture:' ,picture);

picture = generatePicture({title: 'Travel pic 2', date: '2025-01'});
console.log('picture:' ,picture);



          // Interfaz: Usuario
          // propiedad ReadOnly 

interface User { 
  readonly id: number; //Solo lectura
  userName: string;
  isPro: boolean;
}

let user: User;
user = {id: 10, userName: 'Dariaux', isPro: true}; 
console.log('user:',user);

user.userName = 'DXarrr';
// user.id = 20; //Error
console.log('user:',user);

