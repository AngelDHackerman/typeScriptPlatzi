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