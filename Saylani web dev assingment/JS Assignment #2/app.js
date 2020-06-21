// ///////////////////////////////////Chapter 21-25//////////////////////////////////////////////////////////////7
/////Q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variabletitled fullName. Greet the user using his full name.
var firstName = prompt("Enter Your First Name")
var lastName = prompt("Enter Your Last Name")
var fullName = alert("Hello, " + firstName + " " + lastName + " " + "Welcome To Our Page .")
// Q2. Write a program to take a user input about his favoritemobile phone model. Find and display the length of userinput in your browser.
var userInput = prompt("Enter Your Favourite Phone Model")
var lengthOfString = userInput.length;
console.log("length of string is " + lengthOfString);
// Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
function myfunction(){
    var nationality = "pakistani";
        var n = nationality.indexOf("n");
        console.log("index of n is : " + n );}
        myfunction()
//Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
function myfunction(){
    var x = "Hello World";
        var n = x.lastIndexOf("l");
        console.log("last index of l is : " + n );}
        myfunction()
// Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
function myfunction(){
    var nationality = "pakistani";
        var n = nationality.charAt(3);
        console.log("Character At Index 3 is : " + n );}
        myfunction()
// Q6. Repeat Q1 using string concat() method.
var firstName = prompt("Enter Your First Name" + " ");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName.concat(lastName);
var fullName = alert("Hello, " + fullName + " " + "Welcome To Our Page .")  
// Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var x = city.replace("Hyder","Islam");
console.log(x)
// Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var x = message.split("and").join("&");
console.log(x);
// Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var a = 472 ;
var x = parseInt(a);
console.log("Value :" +  a + "\n Type : String" + "\nValue :" + x + "\n Type : number");
// Q10. Write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter a word ")
console.log("User input :" + userInput + "\n UPPER CASE :" + userInput.toUpperCase())
// Q11. Write a program that takes user input. Convert and show the input in title case.
var userInput = prompt("Enter a word ")
console.log("User input :" + userInput + "\n UPPER CASE :" + userInput.toLowerCase())
// Q12. Write a program that converts the variable num to string. var num = 35.36 ;Remove the dot to display “3536” display in your browser.
var num = 35.36;
  var s = num.toString();
  x = s.replace(".","");
  console.log("Number :"+ num + "\n Result :" + x );
// Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var userName = prompt("Enter Username");
var validinput = false;
while(!validinput){
validinput = true ;
if (userName){
 
 for (var i = 0 ;i < userName.length;i++)
{
var x = userName.charCodeAt(i);
    if ((x > 32 && x < 48) || (x > 57 && x < 65)|| (x > 122 && x < 127) || ( x > 90 && x < 97)  ){
validinput = false ;
break;
    }
}
}
if (!validinput || !userName){
validinput = false ;
userName = prompt("Please enter Valid Username");
}
}
console.log(userName);
// Q14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var names = ['cake', 'apple pie', 'cookies','patties','chips'];
var search = prompt("enter a name you want to search");
var x  = search.toLowerCase() ;
if (names.indexOf(x) !==-1){ 
alert(search + " " + "is available at index" + " " +names.indexOf(x) + " " + "in our bakery") }          
 else{ 
alert("We are sorry,"+" "+ x +" " + "is not available in our bakery")
}
// Q15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var pass = prompt("Enter Your Password");
var validinput = false;
while(!validinput){
validinput = true;
var x = pass[0]
if (x >=0 && x < 10){
validinput = false;
pass = prompt("Password cannot begin with a number,Please Enter Valid Password");

}

else{
if (pass.length < 6){
validinput = false;
pass = prompt("Password must have atleast 6 characters")


}
if (pass && validinput){
for (var i=0;i <=pass.length;i++){
var a = pass.charCodeAt(i);

if (a < 47 || (a > 57 && a < 65) || (a > 90 && a < 97) || (a > 122)){

validinput = false;
break;

}
} 



if (!validinput || !pass){
validinput = false ;
pass = prompt("Password cannot have a special character,Please Enter valid password");
}


}

}
}

console.log(pass);
// Q16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = "University Of Karachi";
var x = university.split('');
console.log(x);
// Q17. Write a program to display the last character of a user input.
var userInput = prompt("Enter something");
var index = userInput.charAt(userInput.length-1);
console.log("User Input :" + userInput +  "\n Last character of input :" + index);
// Q18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var x =  "The quick brown fox jumps over the lazy dog";
         count = x.split("the").length;
        console.log("There are" + " " +count +" " + " " + " ocuurence of the word 'the'.");






























