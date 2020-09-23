//Adding data during creation
console.log("\n********Adding data during creation********\n");
let arr1 = ["A", true, 2];
console.log(arr1[0]);
console.log(arr1[1]);

//Adding data after creation
console.log("\n********Adding data after creation********\n");
let arrayLength = 2;
let arr2 = Array(arrayLength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr2[1]); //No value present at index

//Length and index
console.log("\n********Length and index********\n");

console.log(arr1.length);
console.log(arr1[3]); //Doesn't exist
console.log(arr1[2]); //Last index of array
console.log(arr1[arr1.length - 1]); //Equals 2

console.log("\n********Length and index Part 2********\n");
let arr3 = Array(3); //Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]); //Last index of array 
console.log(arr3[arr3.length - 1]); //Index: 2
console.log(arr3[0]); //No value yet
console.log(arr3[1]); //No value yet