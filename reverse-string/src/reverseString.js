'use strict'

var reverseString = function reverseString(str){

    //Return null if str is an empty string or invalid input
    if (typeof str !== 'string') return null;
    if (str.length === 0) return null;

    //Split the string into an array, reverse the array and re-join the letters back to a string
    var strReversed = str.split('').reverse().join('');
    return (strReversed === str) ? true : strReversed;
}

module.exports = reverseString;