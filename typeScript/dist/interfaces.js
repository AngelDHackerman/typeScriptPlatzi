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
