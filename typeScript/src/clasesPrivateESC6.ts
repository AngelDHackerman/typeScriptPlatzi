export {};

                // TypeScript 3.8

enum PhotoOrientation { 
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

class Picture {
  // propiedades
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  public constructor (id: number, 
              title: string, 
              orientation: PhotoOrientation) { 
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }
  // Comportamiento
  
  public toString() { 
  return `[id: ${this.#id}, 
  title: ${this.#title},
  orientation: ${this.#orientation}]`;
  }
}

class Album { 
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor (
    id:number, 
    title: string,
  ) { 
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }
  public addPicture (picture: Picture) { 
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal photos',);
const picture: Picture = new Picture(2, 'Platzi sessions', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album:', album);



          // Accediendo a los miembros publicos

// picture.id = 100; // Error because it is a private value.
// picture.title = 'Another title'; // Error because it is a private value.
// album.title = 'Personal activities'; // Error because it is a private value.
// console.log('album', album);
