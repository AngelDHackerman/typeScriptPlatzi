export {};

enum PhotoOrientation { 
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

        // Get & Set 

class Picture {
  // propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor (id: number, 
              title: string, 
              orientation: PhotoOrientation) { 
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() { 
    return this._id;
  }

  set id (id: number) { //Set es el metodo accesor 
    this._id = id;
  }

  get title () { 
    return this._title;
  }

  set title (title: string) { 
    this._title = title; 
  }

  get orientation () { 
    return this._orientation;
  }

  set orientation (orientation: PhotoOrientation) { 
    this._orientation = orientation;
  }
  // Comportamiento
  
  public toString() { 
  return `[id: ${this.id}, 
  title: ${this.title},
  orientation: ${this.orientation}]`;
  }
}

class Album { 
  private _id: number;
  private _title: string;
  private pictures: Picture[];

  public constructor ( id:number, title: string, ) { 
    this._id = id;
    this._title = title;
    this.pictures = [];
  }
  public addPicture (picture: Picture) { 
    this.pictures.push(picture);
  }

  get id () { 
    return this._id;
  }

  set id (id: number ) { 
    this._id = id;
  }

  get title () {
    return this._title;
  }

  set title (title: string ) { 
    this._title = title;
  }
}


const album: Album = new Album(1, 'Personal photos',);
const picture: Picture = new Picture(2, 'Platzi sessions', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album:', album);



          // Accediendo a los miembros publicos

console.log('picture.id:', picture.id); //invocando a get id();

picture.id = 100; // private, set id(100)     ya se puede modificar usando el metodo get y set
picture.title = 'Another title'; // ya se puede modificar usando el metodo get y set
album.title = 'Personal activities'; // ya se puede modificar usando el metodo get y set
console.log('album', album);
