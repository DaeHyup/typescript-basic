/* eslint-disable */
var ElementType;
(function (ElementType) {
    ElementType["Earth"] = "brown";
    ElementType["Wind"] = "grey";
    ElementType["Fire"] = "red";
    ElementType["Water"] = "blue";
})(ElementType || (ElementType = {}));
var myFavouriteElementType = ElementType.Fire;
myFavouriteElementType = ElementType.Water;
var isWaterMyFavouriteElementType = myFavouriteElementType === ElementType.Water;
var myFavouriteColour = 'blue';
switch (myFavouriteColour) {
    case ElementType.Water:
        console.log('Water matches');
        break;
    default:
        console.log('This element type does not ');
        break;
}
