// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 1 :  

function power(a, b){
    var result = a**b;
    document.write("The result of " + a + "^" + b + " is : " + result);
}
power(5, 2);





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 2 


var userInput = Number(prompt("Enter year to check if it's leap year or not : \n e.g: 2008 "));
function leapYear(year){
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        document.write("The year " + year + " is a leap year !")
    }
    else{
        document.write("The year " + year + " is <b>not</b> a leap year !")
    }
}

leapYear(userInput);







// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 3 

var side1 = Number(prompt("Enter length of the side # 1 of triangle "));
var side2 = Number(prompt("Enter length of the side # 2 of triangle "));
var side3 = Number(prompt("Enter length of the side # 3 of triangle "));

function calculate_S(a, b, c){
    var s = ( (a+b+c) / 2 )
    return s;
}

function areaOfTriangle(a, b, c){
    var s = calculate_S(a, b, c);
    var area = Math.sqrt( (s*((s - a)*(s - b)*(s - c))) );
    document.write("The area of triangle is : " + area.toFixed(2));
}

areaOfTriangle(side1, side2, side3);






// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 4 

var sub1 = Number(prompt("Enter the obtained marks of subject # 1 out of 100 :  "));
var sub2 = Number(prompt("Enter the obtained marks of subject # 2 out of 100 :  "));
var sub3 = Number(prompt("Enter the obtained marks of subject # 3 out of 100 :  "));

function averageCal(a, b, c){
    return ( (a+b+c)/3 )
}

function percentageCal(a, b, c){
    return ( ((a+b+c)/300) * 100 )
}

function mainFunction(a, b, c) {
    var average = averageCal(a, b, c);
    var percentage = percentageCal(a, b, c);

    document.write("Result : <br><br>");
    document.write("Average : " + average.toFixed(2) + "<br>" );
    document.write("Percentage : " + percentage.toFixed(2) + " %" );

}

mainFunction(sub1, sub2, sub3);







// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 5 

function custom_indexOf(word, letter) {
    var index ;
    for (var i = 0; i < word.length ; i++){
        if (word[i] === letter){
            index = i;
            break
        }
        index = "Not Found";
    }
    return index
}

var word = prompt("Enter the word :  ");
var letter = prompt("Enter the letter to find it's index number in word :  " + word);

var index =  custom_indexOf(word, letter);
document.write("The index of '" + letter + "' in '" + word + "' is : <b>" + index + "</b>");








// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 6 

var userInput = prompt("Enter the sentence of maximum 25 characters long \n (Note that a space is also counted as a character !) :  ");

function vowels_deleter(sentence) {
    if (sentence.length > 25) {
        document.write("Your sentence exceeds the limit of 25 characters !!!");
    }
    else {
        document.write("<b>Before:</b><br>" + sentence + "<br><br><br>");
        var sentence_del = [];

        for (var i = 0; i < sentence.length; i++) {

            if (sentence[i] === "a" || sentence[i] === "A" || sentence[i] === "e" || sentence[i] === "E" || sentence[i] === "i" || sentence[i] === "I" || sentence[i] === "o" || sentence[i] === "O" || sentence[i] === "u" || sentence[i] === "U") {
                sentence_del[i] = "";
            }else{
                sentence_del.push(sentence[i]);
            }
        }

        document.write("<b>After:</b><br>" + sentence_del.join(""));
    }
}

vowels_deleter(userInput);






// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 7 

function doubleVowelChecker(sentence){
    var result = [] , counter = 0;

    for (var i = 0 ; i < sentence.length ; i++){
        if ( (sentence[i] === "a" || sentence[i] === "A" || sentence[i] === "e" || sentence[i] === "E" || sentence[i] === "i" || sentence[i] === "I" || sentence[i] === "o" || sentence[i] === "O" || sentence[i] === "u" || sentence[i] === "U") && (sentence[i+1] === "a" || sentence[i+1] === "A" || sentence[i+1] === "e" || sentence[i+1] === "E" || sentence[i+1] === "i" || sentence[i+1] === "I" || sentence[i+1] === "o" || sentence[i+1] === "O" || sentence[i+1] === "u" || sentence[i+1] === "U") ){
            result += sentence[i] + sentence[i+1] + " ";
            counter += 1;
        }
    }
    document.write("The number of occurrences of of any two vowels in succession is : " + counter + "<br>");
    document.write("The list of occurrences of vowels is : " + result);

}
var userInput = prompt("Enter the sentence to check the occurrences of any two vowels in succession  :  "); 
doubleVowelChecker(userInput);






// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 8 

var userInput = prompt("Enter the distance in Kilometers to convert it into Meters , Feet , Inches and Centimeters  :  ");

function toMeters(km){
    var meter = km * 1000;
    document.write("Meters : "+ meter +"<br>");
}
function toFeet(km){
    var feet = km * 3280.84;
    document.write("Feet : "+ feet +"<br>");
}
function toInches(km){
    var inch = km * 39370.1;
    document.write("Inches : "+ inch +"<br>");
}
function toCentimeters(km){
    var cm = km * 100000;
    document.write("Centimeters : "+ cm +"<br>");
}

document.write("<b>" + userInput +" Kilometers into following : </b><br><br>");
toMeters(userInput);
toFeet(userInput);
toInches(userInput);
toCentimeters(userInput);






// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 9 : 

var userInput = prompt("Enter the total worked hours :  ");

function workHoursCalculator(hrs){
    var overtimePay = ( (hrs - 40) * 12 )
    document.write("The overtime pay of " + hrs + " hours is : <b>$" + overtimePay + "</b>");
}

workHoursCalculator(userInput);







// FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 10 

var userInput = Number(prompt("Enter the currency amount in hundreds :  "));
function currencyNotes(amount) {
    var hundred = 0, fifty = 0, ten = 0;

    hundred = Math.floor(amount / 100);
    fifty = Math.floor((amount % 100) / 50);
    ten = Math.floor(((amount % 100) % 50) / 10);

    document.write("You will have <b>" + hundred + "</b> hundred notes , <b>" + fifty + "</b> fifty notes and <b>" + ten + "</b> ten notes");
}

currencyNotes(userInput);







// EVENTS (Ch#43-48): Task # 1 

function greetUser(){
    alert("Hi");
}







// EVENTS (Ch#43-48): Task # 2 

function Nokia1(){
    alert("This is Nokia phone" );
}
function SamsungGalaxy(){
    alert("This is Samsung Galaxy S20 Ultra" );
}
function samsungS20(){
    alert("This is Samsung Galaxy A91" );
}
function samsungS10(){
    alert("This is Samsung Salaxy A8s" );
}







// EVENTS (Ch#43-48): Task # 3 

function deleteToRow(row){
    var row_Delete = row.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(row_Delete);
}






// EVENTS (Ch#43-48): Task # 4 

//  done on html page !







// EVENTS (Ch#43-48): Task # 5 

function addCounter(){
    var counter = document.getElementById("counter").innerHTML;
    counter++;
    document.getElementById("counter").innerHTML = counter;

}
function subCounter(){
    var counter = document.getElementById("counter").innerHTML;
    if (counter > 0){
        document.getElementById("counter").innerHTML -= 1;
    }

}






// EVENTS (Ch#49-52): Task # 1 

function hideForm(){
    document.getElementById("signupForm").className = "hideForm";
    document.getElementById("formData").className = "displayForm";

    var firstName = document.getElementById("firstName").value;
    document.getElementById("firstNameSpan").innerHTML = firstName;

    var lastName = document.getElementById("lastName").value;
    document.getElementById("lastNameSpan").innerHTML = lastName;

    var password = document.getElementById("password").value;
    document.getElementById("passwordSpan").innerHTML = password;

    var email = document.getElementById("email").value;
    document.getElementById("emailSpan").innerHTML = email;

    var phoneNumber = document.getElementById("phoneNumber").value;
    document.getElementById("phoneNumberSpan").innerHTML = phoneNumber;

    var address = document.getElementById("address").value;
    document.getElementById("addressSpan").innerHTML = address;

    var postalCode = document.getElementById("postalCode").value;
    document.getElementById("postalCodeSpan").innerHTML = postalCode;
}







// EVENTS (Ch#49-52): Task # 2 

function paraExpand(){
    var detailedPAra = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, saepe! Excepturi rem rerum iusto numquam, ratione, veniam eum quia corrupti omnis quaerat dolor recusandae  temporibus illum? Suscipit aliquid ea in!"
    document.getElementById("ParaShortLong").innerHTML = detailedPAra;
}







// EVENTS (Ch#49-52): Task # 3 

var studentNameArray = [];
var studentClassArray = [];

var studentFormTable = document.getElementById("studentFormTable");
studentFormTable.innerHTML = "<tr><td><b>Index</b></td><td><B>Name</B></td><td><b>Class</b></td></tr>";

function addNew() {
    var studentName = document.getElementById("studentName");
    var studentClass = document.getElementById("studentClass");
    studentFormTable.innerHTML = "";

    studentNameArray.push(studentName.value)
    studentClassArray.push(studentClass.value)

    studentFormTable.innerHTML = "<tr><td><b>Index</b></td><td><B>Name</B></td><td><b>Class</b></td></tr>";

    for (var i = 0; i < studentNameArray.length; i++) {
        var row = "<tr><td>" + i + "</td><td>" + studentNameArray[i] + "</td><td>" + studentClassArray[i] + "</td><td><input type='button' value='Delete' onclick='deleteToRow(this)'><input id='editBtn' type='button' value='Edit' onclick='edit_row(this)'><input id='saveBtn' type='button' value='Save' onclick='save_row(this)' style='display: none;'></td></tr>";
        studentFormTable.innerHTML += row;
    }

    studentName.value = ""
    studentClass.value = ""
}

function deleteToRow(row) {
    var row_Delete = row.parentNode.parentNode.rowIndex;
    document.getElementById("studentFormTable").deleteRow(row_Delete);

    studentNameArray.splice(row_Delete - 1, 1);
    studentClassArray.splice(row_Delete - 1, 1);

}

function edit_row(row){
    var row_edit = row.parentNode.parentNode;

    row.style.display="none";
    row.nextSibling.style.display="inline";

    // document.getElementById("editBtn").style.display="none";
    // document.getElementById("saveBtn").style.display="inline";

    var student_Name = row_edit.childNodes[1].innerHTML
    var student_Class = row_edit.childNodes[2].innerHTML

    row_edit.childNodes[1].innerHTML = "<input type='text'  value='" + student_Name + "'>";
    row_edit.childNodes[2].innerHTML = "<input type='text'  value='" + student_Class + "'>";



}

function save_row(row){
    var row_edit = row.parentNode.parentNode;

    row.style.display="none";
    row.previousSibling.style.display="inline";

    // document.getElementById("editBtn").style.display="inline";
    // document.getElementById("saveBtn").style.display="none";

    var student_Name = row_edit.childNodes[1].firstChild.value
    var student_Class = row_edit.childNodes[2].firstChild.value

    row_edit.childNodes[1].innerHTML = student_Name
    row_edit.childNodes[2].innerHTML = student_Class


}







// EVENTS (Ch# 53-57): Task # 1 

var imagesArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
var imagesDiv = document.getElementById('imagesDiv');

for (var i = 1; i <= 4; i++){
    imagesDiv.innerHTML += "<img class='phonePics' id='img" + i + "' src='images/" + i + ".jpg' onclick='showModal(" + i + ")'>"
}

function showModal(no){
    var modal = document.getElementById('modal');
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display="block";
    modal.childNodes[3].src="images/" + no + ".jpg";
}

function onClosedImagModal(){
    var modal = document.getElementById('modal');
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}






// EVENTS (Ch# 53-57): Task # 2 

function zoomIn(){
    var zoom_Para = document.getElementById('zoomPara');
    var style = window.getComputedStyle(zoom_Para, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    zoom_Para.style.fontSize = (fontSize + 10) + 'px';
}

function zoomOut(){
    var zoom_Para = document.getElementById('zoomPara');
    var style = window.getComputedStyle(zoom_Para, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    zoom_Para.style.fontSize = (fontSize - 10) + 'px';
    
}






// DOM (Ch# 58-67): Task # 1 


// i. Get element of id “main-content” and assign them in a variable.
document.write("i. Get element of id “main-content” and assign them in a variable. <br><br>");
var main_content = document.getElementById("main-content");


// ii. Display all child elements of “main-content” element.
document.write("ii. Display all child elements of “main-content” element. <br><br>");
var childNodesOf_main_content = main_content.childNodes;


// iii. Get all elements of class “render” and show their innerHTML in browser.
document.write("iii. Get all elements of class “render” and show their innerHTML in browser. <br><br>");

var renderClassList = document.getElementsByClassName("render");
document.write("<h3>Output : </h3>")

for (var i = 0; i < renderClassList.length; i++){
    document.write(renderClassList[i].innerHTML + "<br>");
}


// iv. Fill input value whose element id first-name using javascript.
document.write("iv. Fill input value whose element id first-name using javascript. <br><br>");

var first_name = document.getElementById("first-name");
first_name.value = "Abdullah";


// v. Repeat part iv for id ”last-name” and “email”.
document.write("v. Repeat part iv for id ”last-name” and “email”. <br><br>");

var last_name = document.getElementById("last-name");
last_name.value = "Bin Abdul Qadeer";

var email = document.getElementById("email");
email.value = "abdullahaqr786@gmail.com";







// DOM (Ch# 58-67): Task # 2 

// i. What is node type of element having id “form-content”.
document.write("i. What is node type of element having id “form-content”. <br><br>");

var form_content = document.getElementById("form-content");
var nodeTypeOf_form_content = form_content.nodeType;
document.write("Node type of form-content is : " + nodeTypeOf_form_content  +"<br>")

// ii. Show node type of element having id “lastName” and its child node.
document.write("i. What is node type of element having id “form-content”. <br><br>");


var lastName = document.getElementById("lastName");
var nodeTypeOf_lastName = lastName.nodeType;
document.write("Node type of lastName is : " + nodeTypeOf_lastName  +"<br>");

var nodeTypeOf_lastName_childNodes = lastName.firstChild.nodeType;
document.write("Node type of lastName child is : " + nodeTypeOf_lastName_childNodes  +"<br><br>");


// iii. Update child node of element having id “lastName”.
document.write("iii. Update child node of element having id “lastName”. <br><br>");

document.getElementById("lastName").innerHTML = "Last Name : John (Updated)";

// iv. Get First and last child of id “main-content”.
document.write("iv. Get First and last child of id “main-content” <br><br>");

var main_content_firstChild = main_content.firstChild;
var main_content_lastChild = main_content.lastChild;

// v. Get next and previous siblings of id “lastName”.
document.write("v. Get next and previous siblings of id “lastName”. <br><br>");

var lastName_previousSibling = lastName.previousSibling;
var lastName_nextSibling = lastName.nextSibling;

// vi. Get parent node and node type of element having id “email”
document.write("vi. Get parent node and node type of element having id “email” <br><br>");

var email_parentNode = email.parentNode;
var email_parentNode_nodeType = email_parentNode.nodeType;

