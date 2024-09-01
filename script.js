// Explain Code
/*
This is a commented-out block, which seems to be a reference or template for how the arrays should be structured.
It's just an annotation, so it's not executed.

var NumbersArr = [] // [10, 55, 30, 11];
var paramtersArr = [] // ["killogram", "milligram", "once", "pounds"];
var arr = ["10 killogram","55 milligram","30 once","11 pounds"];
*/

// Declare an empty array to store the numeric values extracted from the main array.
var numbersArr = [];

// Declare an empty array to store the parameter (unit) strings extracted from the main array.
var paramtersArr = [];

// Initialize an array with strings containing both numbers and units.
var mainArr = ["10 killogram", "55 milligram", "30 Once", "11 pounds"];

// Log the main array to the console to see its contents.
console.log(mainArr);

// Loop through each element of the mainArr array.
for (var i = 0; i < mainArr.length; i++) {
    // Get the current element from the main array.
    var element = mainArr[i];

    // Extract the numeric part from the current element using parseInt, which parses the leading number in the string.
    var numbersArray = parseInt(element);

    // Push the extracted number into the numbersArr array.
    numbersArr.push(numbersArray);
}

// Log the numbersArr to the console to see the array of extracted numbers.
console.log("NumberArr>", numbersArr);


// /*
// // var NumbersArr = [] // [10, 55, 30, 11];
// // var paramtersArr = [] // ["killogram", "milligram", "once", "pousnd"]
// // var arr = ["10 killogram","55 milligram","30 once","11 pounds"]
// */
// var numbersArr = [];
// var paramtersArr = [];
// var mainArr = ["10 killogram", "55 milligram", "30 Once", "11 pounds"];
// console.log(mainArr)
// for (var i = 0; i < mainArr.length; i++) {
//     var element = mainArr[i];   
//     var numbersArray = parseInt(element)
//     numbersArr.push(numbersArray)
// }
// console.log("NumberArr>",numbersArr);

// // Next Class Assignment Page 19