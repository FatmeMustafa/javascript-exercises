//Exersise 1: 
//Create two input elements and a submit button. 
//When the user clicks the submit button, the entered values in both inputs should show in an alert.

function showAlert() { //function that shows alert message.
    var userNameInput = document.getElementById('inputName'); //new variable is created which holds the value of inputName.
    var userNumberInput = document.getElementById('inputNumber'); //new variable is created which holds the value of inputNumber.
    alert("Name: " + inputName.value + '\n' + "Number: " + inputNumber.value); //the values of inputName and inputNumber are displayed in an alert message.
}

//Exersise 2: 
//Create a div containing three buttons. 
//When the user hover over a specific button a new paragraph with info about the button should be added under the div. 
//When the mouse leaves the button, the paragraph should disappear again.

function showPara1() { //function that shows the first paragraph when mouseover on button1.
    document.getElementById('first').style.opacity = 1;
}
function showPara2() { //function that shows the second paragraph when mouseover on button2.
    document.getElementById('second').style.opacity = 1;
}
function showPara3() {
    document.getElementById('third').style.opacity = 1;
}
function hidePara1() { //function that hides the first paragraph when mouse is not on button1.
    document.getElementById('first').style.opacity = 0;
}
function hidePara2() {
    document.getElementById('second').style.opacity = 0;
}
function hidePara3() {
    document.getElementById('third').style.opacity = 0;
}

//Exersise 3: 
//Create an input element. While the user types into the input field, each letter should change to uppercase within the input field.
function capLetters() { //function for capital letters.
    var userCountryInput = document.getElementById('inputCountry'); //userCountryInput equals the inputCountry, which is the value the user types in.
    userCountryInput.value = userCountryInput.value.toUpperCase(); //returns userCountryInput with uppercase.
}

//Exersise 4: 
//Create two input element (first name and last name) and a submit button. 
//When the user enteres first and last name and clicks the button the two strings should be displayed as one string in an abbreviated form in a paragraph. 
//Example If the user enters "Pelle" and "Karlsson" The paragraph should display "PK".
function showInitials() { //function to show user initials.
    var userFirstName = document.getElementById('inputFirstName'); //gets users first name.
    var userLastName = document.getElementById('inputLastName'); //gets users last name.
    var string1 = userFirstName.value.charAt(0); //takes first charecter of first name.
    var string2 = userLastName.value.charAt(0); //takes first charecter of last name.
    document.form3.initials.value = string1 + string2; //puts charecters of first name and last name together.
}