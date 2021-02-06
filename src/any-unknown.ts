/* eslint-disable */
let myAnyVariable: any;

myAnyVariable = 'Hello there!';
myAnyVariable = 1;
myAnyVariable = {
  greeting: 'Hello there',
};

const property = myAnyVariable.doesNotExist;
myAnyVariable.sayHello();

let myUnknownVariable: unknown;

myUnknownVariable = 'Hello there!';
myUnknownVariable = 1;
myUnknownVariable = {
  greeting: 'Hello there',
};
