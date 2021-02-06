/* eslint-disable */

type StringOrNumber = string | number;
type StockCount = number;

type Shirt = {
  name: string;
  numberInStock: number;
};

let myNewShirt: Shirt = {
  name: 'Cool Red Shirt',
  numberInStock: 100,
};

let numberOfShirtsInStock: StockCount = 500;
let numberOfJacketsInStock: StockCount = 250;

let typesCityPopulation: StringOrNumber = 9000000;
typesCityPopulation = 'Nine Million';
