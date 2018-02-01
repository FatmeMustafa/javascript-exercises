//Exersise 1: 
//Enter a name in the prompt and make sure that you can see the name you have entered in the console.

let input1 = prompt("Please enter your name: "); //the prompt() method displays a dialog box that prompts the user for input.
console.log("Your name is: ", input1); //the console.log() method displays data, in this case a string + the variable input1.

//Exersise 2: 
//Return the square number of the number that is entered in the prompt, and log it to the console window.

let input2 = prompt("Please enter a number: ");
let square = Math.sqrt(input2); //Returns the square root of input2
console.log("The square number of: ", input2, " is ", square);

//Stretch Exersise 2:
//Add an input, a submit button and a span to the web page you created in the previous exercise.

function doMath () { //Function called doMath that returns the square root
    let inputSquare = document.form1.input2_number.value; //Variable inputSquare is created and equals the value of the input2_number. We get the value through: document, form1 and input2_number.
    let result = Math.sqrt(inputSquare); //Variable result is created to save the value of the square root of inputSquare.
    document.form1.answer.value = result; //This line displays the value of the square root of inputSquare.
}

//Exersise 3: 
//Ask the user to enter two numbers. Then add the entered numbers and display the result in the console.

let input3 = prompt("Please enter your first number: ");
let input4 = prompt("Please enter your second number: ");
let firstNumber = parseInt(input3); //saves variable input3 as an int instead of a string.
let secondNumber = parseInt(input4);
console.log(input3, " + ", input4, " = ", firstNumber + secondNumber); //adds two integers together. If parseInt was not included in the code, input3 and input4 would have been added together as strings instead of integers. If the user chose 4 and 4 the result on the console would be 44 instead of 8.

//Stretch Exersise 3:
//Redo the exercise above, but use only one prompt. Remember that the prompt method returns a string value. Hint: You will need to use the split method
//?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

//Exersise 4: 
//In the body, add two inputs. Give each of the inputs a unique id. Add a submit button and give it a unique id. Display the largest number entered by the user in a span below the submit button.

function showLargest() { //Function called showLargest that returns the largest number the user enters.
    let firstNo = document.form2.first_number.value; //Variable firstNo is created and equals the value of first_number. We get the value through: document, form2 and first_number.
    let lastNo = document.form2.last_number.value; //Variable lastNo is created and equals the value of last_number. We get the value through: document, form2 and last_number.
    let largeResult = Math.max(firstNo,lastNo); //Variable largeResult is created to save the value of the largest number the user enters.
    document.form2.largest.value = largeResult; //This line displays the value of the largest number the user enters.
}

//Strech Exersise 4:
//Using the previous exercise, make it so that the user can enter three numbers, and then display the largest number.

function showLargests() { 
    let firstNos = document.form3.first_numbers.value;
    let secondNos = document.form3.second_numbers.value;
    let lastNos = document.form3.last_numbers.value;
    let largeResults = Math.max(firstNos,secondNos,lastNos); 
    document.form3.largests.value = largeResults; 
}

//Exersise 5: 
//Add a for loop which should iterate from 0 to 10. Check if the current number is odd or even, and display this in the console. Sample output: "0 is even" "1 is odd" "2 is even"

for (let x = 0; x <= 10; x ++) { //Let x = 0 sets a start-value to the loop, x<=10 is a condition and if it is true, x (0) is printed x ++ (+1) untill the loop is false.
    if ((x % 2) == 0) console.log(x + " is even"); //Modulo (%) calculates the remainder of a division operation. It calculates the remainder of x divided by 2. If i is an even number, the result will be 0 and if it is an odd number, the result will be 1. This statement thereby checks if a number is even or odd.
    else console.log(x + " is odd"); //If the x number is not even, then write x is odd. 
}

//Exersise 6: 
//Using the prompt , make it possible for a user to enter their full name. Split the first and last name and display it in a web page. The first name should be all lower case, and the last name upper case.
var input5 = prompt("Please enter your full name: (with uppercase)"); //Asking user for first and lastname
var input5Answer = input5; //User input is saved as input5Answer.
var fullNameSplit = input5Answer.split(" "); //Input5Answer is split into two strings with a new variable called fullNameSplit.
var firstName = fullNameSplit[0]; //We declare that the first element in the array (Fatme) equals the variable firstName.
var firstName1 = firstName.toLowerCase(); //The value of firstName is made to lower case letters and is declared with the variable firstName1.
var lastName = fullNameSplit[1]; //We declare that the last element in the array (Mustafa) equals the variable lastName.
var lastName1 = lastName.toUpperCase(); //The value of lastName is made to upper case letters and is declared with the variable lastName1.
console.log("your firstname is: ", firstName1, " (lowercase) ", "your lastname is: ", lastName1, "(uppercase)");