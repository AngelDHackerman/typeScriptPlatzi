export {};

enum PhotoOrientation { 
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

class Picture {
  // propiedades
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  public constructor (id: number, 
              title: string, 
              orientation: PhotoOrientation) { 
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }
  // Comportamiento
  
  public toString() { 
  return `[id: ${this.id}, 
  title: ${this.title},
  orientation: ${this.orientation}]`;
  }
}

class Album { 
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor (
    id:number, 
    title: string,
  ) { 
    this.id = id;
    this.title = title;
    this.pictures = [];
  }
  public addPicture (picture: Picture) { 
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal photos',);
const picture: Picture = new Picture(2, 'Platzi sessions', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album:', album);



          // Accediendo a los miembros publicos

picture.id = 100; // public 
picture.title = 'Another title'; //public 
album.title = 'Personal activities'; 
console.log('album', album);
