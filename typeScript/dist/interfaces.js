"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const showPicture = (picture) => {
    console.log(`       [title: ${picture.title}, 
        date:${picture.date}, 
        orientation: ${picture.orientation}]`);
};
let myPic = {
    title: "Test Tile",
    date: '2020-03',
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
// Enviar un objeto anonimo
showPicture({
    title: 'test title 2',
    date: '2022-01',
    orientation: PhotoOrientation.Portrait,
    // extra: 'prueba', //Error
});
const generatePicture = (config) => {
    const pic = { title: 'Default', date: '2022-01' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
};
let picture = generatePicture({});
console.log('picture:', picture);
picture = generatePicture({ title: 'Travel pic' });
console.log('picture:', picture);
picture = generatePicture({ title: 'Travel pic 2', date: '2025-01' });
console.log('picture:', picture);
let user;
user = { id: 10, userName: 'Dariaux', isPro: true };
console.log('user:', user);
user.userName = 'DXarrr';
// user.id = 20; //Error
console.log('user:', user);
