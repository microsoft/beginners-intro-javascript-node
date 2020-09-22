/***************************************************
 * JavaScript for Beginners
 * JS101 - Functions Demo
 *
 * BASICS    : What are Functions?
 * SYNTAX    : Define & invoke your functions
 * NAMING    : Conventions (valid and invalid)
 * PARAMETERS: Inputs (/ arguments)
 * RETURN    : Output (/ result)
 ****************************************************/

// 1. Function Definition
function printHello(name){
    console.log("Hello "+name);
    return "name "+" hello!";
}

// 2. Function Invocation
let result = printHello("Microsoft !");
console.log(result);

// 3. Function Naming

// 4. Function Parameters

 // 5. Function Return


/** 
// Step 1: Define function
function printHello(){
    // execution
    console.log("Hello world!")
}
console.log(typeof printHello);

// Step 2: Invoke it
printHello()

// Step 3: Explore valid and invalid function names
print$ello();              // invalid: gives editor error
function print-Hello(){ }  // invalid: gives editor error

// Step 4: Modify printHello code
function printHello(name){
    console.log("Hello"+name);
}

printHello("Microsoft");

// Step 5: Invoke it with no arguments - what happens?
// Show output undefined

// Step 6: What if you had more than required number of args?
// Show that it ignores extra arguments
printHello("Microsoft ", "!!");

// Step 7: Look at type of returned results
let result = printHello("Microsoft !");
console.log(result);

// Final state of code is above
*/