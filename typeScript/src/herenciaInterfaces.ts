export {}; 

enum PhotoOrientation { 
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

interface Entity { 
  id: number;
  title: string;
}

interface Album extends Entity{ 
  // copia de los atributos Entity
  description: string;
}

interface Picture extends Entity { 
  // copia de los atributos Entity

  orientation: PhotoOrientation;
}

const album: Album = { 
  id: 10,
  title: 'reuniones',
  description: 'Fotos de las reuniones del equipo',
}

const picture: Picture = { 
  id: 11,
  title: 'Family',
  orientation: PhotoOrientation.Landscape,
}

let newPicture = {} as Picture; // ese AS es de las asserciones de typeScript
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);


