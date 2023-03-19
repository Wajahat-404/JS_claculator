// alert("Hii, there:");
// alert(23);
// alert("Wajahat");
// console.log("Hello World");
// console.log(23);
// document.write("Hello_World ");
// document.write(23);

// var age = 45;
// var nationality = "Pakistani";
// var feePaid = true;

// var a;
// a = 87;
// console.log(age);
// alert(a);
// console.log(nationality);
// console.log(feePaid);

// const name='Ali';
// alert(name);
// var name1 = "Hammad";
// alert(name);

// Dynamic Data types
// var age = 35;
// console.log(age);
// age = "Hello";
// console.log(age);
// age = false;
// console.log(age);

// TYPEOF OPERATOR
// var a = 34;
// console.log(typeof a);
// a = "Hello";
// console.log(typeof a);
// a = false;
// console.log(typeof a); 

// STATEMENT SEPARATER
// var a = 4; var b= 3; var c = a + b;
// console.log("Here is your answer: " , c);

//PROMPT FUNCTION *(USER INPUT)
// var name = window.prompt("What is your name?");
// console.log("My name is: " + name);
// var age = window.prompt("What's your age now?");
// console.log("And my age is: " + age);

//SIMPLE ADDITION PROGRAM USING PROMPT FUNCTION
// var a = prompt("Enter first Number: ");
// a = parseFloat(a);
// var b = prompt("Enter second number: ");
// b = parseFloat(b);
// var c = a + b;

// console.log("Here is your answer: " + c);
//BODMAS
// var a =4;
// var b =2; 
// var c = a + b;
// var d = a - b;
// var e = a * b;
// var f = a / b;
// var g = a ** b;
// var h = a % b;
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

//INCREMENT & DECREMENT
// var a = 4;

// var b = --a;
// console.log(a);
// console.log(b);
//PARSE INT FUNCTION: 
// var age = prompt("What is your age: ");
// var num = 4;
// var sum = parseInt(age) + num; 
// console.log(sum);
// var age1 = prompt("What is your second age: ");
// var sum = parseFloat(age1) + num; 
// console.log(sum);

// //NUMBER FUNCTION
// var a = prompt("Enter your 1st Number: ");
// var b = prompt("Enter your second number: ");
// var c = parseFloat(a);
// var d = parseFloat(b);
// var e = c + d;
// console.log(e);

// console.log(Number(true));

// var a = Number(true);
// var b = Number(false);
// console.log(a,b);

//LOGICAL OPERATORS
// var a = 5; 
// var b = prompt("Enter your desired number only: "); 
// var c = parseInt(b);
// var d = (a >= c ) && (c <= 5);
// console.log("Your input is: " + c);
// console.log("Your answer is: " + d);

//A SIMPLE CALCULATOR

var a = prompt("Enter your first number: ");
var b = Number(a);
var e = prompt("Enter your operator: ");
var c = prompt("Enter your second number: ");
var d = Number(c);

 if(e == '+'){
    console.log("Your 1st number was: " + b);
    console.log("Your 2nd number was: " + d);
    var f = Number(b + d);
    console.log("So the addition leads to: " + f);
 }
 else if(e == '-'){
    console.log("Your 1st number was: " + b);
    console.log("Your 2nd number was: " + d);
    var f = Number(b - d);
    console.log("So the subtraction leads to: " + f);
 }
 
 else if(e == '*'){
    console.log("Your 1st number was: " + b);
    console.log("Your 2nd number was: " + d);
    var f = Number(b * d);
    console.log("So the multiplication leads to: " + f);
 }
 else if(e == '/'){
    console.log("Your 1st number was: " + b);
    console.log("Your 2nd number was: " + d);
    if(d != 0){

        var f = Number(b / d);
        console.log("So the division leads to: " + f);
    }
    else 
    console.log("Impossible!!! Because 2nd number can't be 0");
    // if(d == 0) { 
    //     console.log("Couldn't be possible:(");

    // }
    // else { 
    //     var f = Number(b / d);
    //     console.log("Division leads to: " + f);
    // }
}

//NESTED IF-ELSE
// var score = prompt("What is your score: ");
// score = parseInt(score);
// if(score >= 80) {
//       console.log("Grade A");
//    if(score > 90) { 
//       console.log("Reward of $100");
//    }  
//    else if(score > 85) { 
//       console.log("Reward of $50");
//    }
//    else { 
//       console.log("$20");
//    }
// }
// else {
//    console.log("Failed.");
// }

//SWITCH
// var score = prompt("What is your score: ");
// score = parseInt(score);
// switch(score) { 
//    case 80:  
//       console.log("Grade A");
//       console.log("Reward of $20");
//       break;
//    case 85: 
//       console.log("Grade A");
//       console.log("Grade $30");
//       break;
//    case 90: 
//       console.log("Grade A");
//       console.log("Grade $50");
//       break;
//    case 95: 
//       console.log("Grade A");
//       console.log("Grade $70");
//       break;
//    case 100: 
//       console.log("Grade A");
//       console.log("Grade $100");
//       break;
//   default: 
//        console.log("Please enter number greater than 80");    

// }