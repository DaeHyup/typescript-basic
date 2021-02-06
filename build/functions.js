/* eslint-disable */
var multiply = function (a, b) {
    var aNumber = typeof a === 'string' ? parseInt(a, 10) : a;
    var bNumber = typeof b === 'string' ? parseInt(b, 10) : b;
    return String(aNumber * bNumber);
};
multiply(2, 5);
multiply('2', 10);
multiply(10, '5');
