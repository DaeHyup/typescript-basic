/* eslint-disable */

enum ElementType {
  Earth = 'brown',
  Wind = 'grey',
  Fire = 'red',
  Water = 'blue',
}

let myFavouriteElementType: ElementType = ElementType.Fire;
myFavouriteElementType = ElementType.Water;
const isWaterMyFavouriteElementType: boolean =
  myFavouriteElementType === ElementType.Water;

const myFavouriteColour = 'blue';

switch (myFavouriteColour) {
  case ElementType.Water:
    console.log('Water matches');
    break;
  default:
    console.log('This element type does not ');
    break;
}
