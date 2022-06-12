//Get the string from the page
//Controller function
function getValue(){

    //Controls the div that displays the results (hidden for now)
    document.getElementById("alert").classList.add("invisible");

    //Get the user input
    let userString = document.getElementById("userString").value;

    let modString = modifyString(userString);

    //Validate user input, remove spaces, and to lower case
    if(modString.length > 0 && userString.length < 200){
        
        //Reverse the modified string
        let revString = reverseString(modString);
        
        //Compare the user's string to its reversed version
        let pal = checkForPalindrome(modString, revString);

        //Tell user if palindrome or not
        if(pal == true){
            displayString(userString);
        }else{
            notPalindrome(userString);
        }
    }else{
        if(modString.length == 0){
            tooShort();
        }else{
            tooLong();
        }
    }
}

//Remove spaces and make all lowercase in user's string
function modifyString(userString){

    userString = userString.toLowerCase();
    let regex = /[^a-z0-9\u0590-\u05fe]/gi;
    let modifiedString = userString.replace(regex,"");

    return modifiedString;
}

//Reverse the string
//Logic function
function reverseString(modString){

    let revString = [];

    //Reverse a string using a for-loop
    for (let i = modString.length - 1; i >= 0; i--) {
        if(modString[i] == " "){
            continue
        }else{
            revString += modString[i];
        }
    }
    return revString;
}

//Compare reversed string to user's string
function checkForPalindrome(modString, revString){
    let pal = modString == revString ? true : false;
    return pal;
}

//Display reversed string to the user
//View function
function displayString(revString){

    //Write the message to the page
    document.getElementById("msg").innerHTML = `<strong>Yup! ${revString} is a palindrome.</strong>`;

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

//Error functions
function tooShort(){
    
    //Error message for empty input
    document.getElementById("msg").innerHTML = "<strong>You must enter content to play.</strong>";

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

function tooLong(){
    
    //Error message for empty input
    document.getElementById("msg").innerHTML = "<strong>Your input is too long. Try something with a maximum of 200 characters.</strong>";

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

function notPalindrome(userString){
    
    //Error message for empty input
    document.getElementById("msg").innerHTML = `<strong>Sorry! ${userString} is not a palindrome.</strong>`;

    //Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}

//Reset function
function clearFields(){
    
    //Clear text input
    document.getElementById("userString").value = "";

    //Hide the alert with previously reversed strings
    document.getElementById("alert").classList.add("invisible");
}