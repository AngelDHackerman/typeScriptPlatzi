          // Orientacion para fotografias 

// const ladscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation { 
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape1:', PhotoOrientation[0])

enum PictureOrientation { 
  Landscape = 10, // 10 
  Portrait ,  // 11 
  Square , // 12 
  Panorama, // 13
}

const landscapePicture: PictureOrientation = PictureOrientation.Landscape;
const portraitPicture: PictureOrientation = PictureOrientation.Portrait;

console.log(landscapePicture) // 10 
console.log(portraitPicture) // 11



enum Country { 
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex', 
  EEUU = 'usa',
  Espana = 'esp',
}

const Colombia: Country = Country.Colombia;
console.log( 'Colombia:',Colombia)


















