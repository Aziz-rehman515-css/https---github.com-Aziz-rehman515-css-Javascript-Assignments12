// 🔸 Assignment 1: Welcome Message 
//  Objective: 
//  Use prompt() to ask for the user's name.  
//  Use alert() to display:  "Welcome, [name]!" 
//  Concepts used: prompt, alert, var, concatenation 

var userName = prompt("Enter your name ");

alert("Welcome, " + userName + " !");

// ============================

//  Assignment 2: Age Message 
//  Objective: 
//  Ask the user for their name and age using prompt().  
//  Log this message in the console:  "[name] is [age] years old." 
//  Concepts used: prompt, console.log, var, concatenation

var usrName = prompt("Enter your name ");
var age = prompt("Enter your age ");

console.log(usrName + " is " + age + " years old.");


// =========

//  Assignment 3: Favorite Color 
//  Objective: 
//  Ask the user for their favorite color.  
//  Show an alert like:  "Wow! [color] is a nice color!" 
//  Concepts used: prompt, alert, var, concatenation

var favoriteColor = prompt("Enter your favorite color");
alert("Wow! " + favoriteColor + " is a nice color!");


// ======================================================

//  Assignment 4: Simple Math Sentence 
//  Objective: 
//  Ask the user for two numbers using prompt().  
//  Show a sentence in the console like: 
//  "The result of 4 + 5 is 9." 
//  (You can just add the numbers directly — no need to convert types yet.) 
//  Concepts used: prompt, console.log, var, concatenation

var num1 = +prompt("Enter the value number 1");
var num2 = +prompt("Enter the value number 2");
var sum = num1 + num2

console.log("The result of " + num1 + " + " + num2 + " is " + sum + ".");


// =============================================

//  Assignment 5: About Me Summary 
//  Objective: 
//  Ask the user for their name, hobby, and country using prompt().  
//  Show an alert like:  "Hi, I'm [name] from [country], and I love [hobby]!" 
//  Concepts used: prompt, alert, var, concatenation 

var fullName = prompt("Enter your name");
var hobby = prompt("Enter your hobby");
var country = prompt("Enter your country name");

alert("Hi, I'm " + fullName + " from " + country + ", and I love " + hobby + " !");




// ==============================================
                                                                                                        ##
//                                                                                                           ##
//                                           String Concatenation                                            ##
                                                                                                    ##

// ======================================================

// 🔹 Task 1: Create a Full Address 
//  Instruction: 
//  Ask the user to enter their street, city, and country. 
//  Concatenate these values into one full 
//  address string and display it like:  "Your full address is: 123 Main St, Springfield, USA"

let street = prompt("Enter your street");
let city = prompt("Enter your city");
let country = prompt("Enter your country");

console.log("Your full address is: " + street + ", " + city + ", " + country);


// ===========================================

// 🔹 Task 2: Make a Custom Username 
//  Instruction: 
//  Ask the user to input their first name and a favorite number. 
//  Concatenate them to create a 
//  simple username like:  "john42" 
//  Display the result with a message: "Your new username is: john42" 

let userName = prompt("Enter your first name");
let favoriteNumber = prompt("Enter your favorite number");

console.log("Your new username is: " + userName + favoriteNumber);


// ========================================

// 🔹 Task 3: Email Generator 
//  Instruction: 
//  Ask the user for their first name and last name. 
//  Combine them into an email address format 
//  like:  "firstname.lastname@example.com" 
//  Show the result. 

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

console.log(firstName + lastName + "@email.com");


// =============================================


//  Task 4: Combine Favorite Things 
//  Instruction: 
//  Ask the user for their favorite color, animal, and food. Create a sentence like:  
//  "Your favorite things are: blue dogs and pizza!"

let favoriteColor = prompt("Enter your favorite color");
let favoriteAnimal = prompt("Enter your favorite animal");
let favoriteFood = prompt("Enter your favorite food");

console.log("Your favorite things are: " + favoriteColor + " " + favoriteAnimal + " and " + favoriteFood + "!");


// ====================================

// Task 5: Quote with Author 
//  Instruction: 
//  Ask the user for a quote and the author’s name. Display it in the format:  
//  "The only limit is your mind." - John Doe

let quote = prompt("Write the author quote");
let authorName = prompt("Enter the author name");

console.log(quote + " - " + authorName);



// ================================================================
//                                                                                                       ##
//                                                                                                         ##
//                                         Operators Practice Questions                                     ##
//                                                                                                        ##



//                                              ✴ Arithmetic Operator Tasks 

//                          1.  Ask the user to enter two numbers. Show the result of adding them using alert(). 

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

alert(num1 + num2);

// ============================================================

//                    2.  Ask for two numbers. Subtract the second number from the first and log the result to the console. 

let num3 = +prompt("Enter first number");
let num4 = +prompt("Enter second number");

console.log(num3 - num4);

// ============================================

//                          3.  Ask for two numbers. Multiply them and display the answer in an alert.  

let num5 = +prompt("Enter first number");
let num6 = +prompt("Enter second number");

alert(num5 * num6);


// ============================================

//                      4.  Ask the user for two numbers. Divide the first by the second and log the result.  

let num7 = +prompt("Enter first number");
let num8 = +prompt("Enter second number");

console.log(num7 / num8);

// ==========================================================

//              5.  Ask the user for two numbers and show the remainder when the first is divided by the  second (use %)

let num9 = +prompt("Enter first number");
let num10 = +prompt("Enter second number");

console.log(num9 % num10);

// ==========================================================================



//                                                      ✴ Assignment Operator Tasks 

//                          6.  Create a variable with the value 10. Add 5 to it using += and log the new value.  

let val1 = 10;
val1 += 5;
console.log(val1);

// ==============================================

// 7.  Create a variable with the value 20. Subtract 4 from it using -= and alert the result.  

let val2 = 20;
val2 -= 4;
alert(val2);

// ================================================================================

//                      8.  Create a variable with the value 6. Multiply it by 3 using *= and display the result.  

let val3 = 6;
val3 *= 3;
console.log(val3);

// ========================================================================

//                      9.  Set a variable to 50. Divide it by 2 using /= and log the final value.  

let val4 = 50;
val4 /= 2;
console.log(val4);

// ====================================================================

//                  10. Create a variable, assign it a value from prompt(), then increase it by 10 and show the result.

let val5 = +prompt("Enter any number");
val5 += 10;
alert(val5);

// ======================================================================


//                                                 ✴ Comparison Operator Tasks 
//                          11. Ask the user for two numbers. Use > to check if the first number is greater than the second, then log the result (true/false).  

let number1 = +prompt("Enter your first number");
let number2 = +prompt("Enter your second number");

console.log(number1 > number2);


// ==========================\=======================================



//                  12. Ask the user for two numbers. Use < to check if the first number is less than the second, then alert the result.

let number3 = +prompt("Enter your first number");
let number4 = +prompt("Enter your second number");

alert(number3 < number4);

// ====================================================================  

//                      13. Ask the user for a number. Use == to check if it equals 100 and log the result.  

let number5 = +prompt("Enter any number you want");

console.log(number5 == 100);


// ==========================================================  

// 14. Ask the user for a number. Use === to check if it is exactly equal to the string "100" and log the result

let number6 = prompt("Enter any number you want");

console.log(number6 === "100");


// ================================================================  

// 15. Ask the user for two numbers. Use != to check if they are not equal and alert the result.  

let number7 = +prompt("Enter your first number");
let number8 = +prompt("Enter your second number");

alert(number7 != number8);

// =========================================================  

// 16. Ask the user for two numbers. Use !== to check if they are not strictly equal and log the result.

let number9 = +prompt("Enter your first number");
let number10 = +prompt("Enter your second number");

console.log(number9 !== number10);

// =====================================================================================================================  

// 17. Ask for two numbers and check if the first is greater than or equal to the second.  Display result using alert.  

let number11 = +prompt("Enter your first number");
let number12 = +prompt("Enter your second number");

alert(number11 >= number12);

// =====================================================================================================================  

// 18. Ask for two numbers and check if the first is less than or equal to the second. Show result in the console. 

let number13 = +prompt("Enter your first number");
let number14 = +prompt("Enter your second number");

console.log(number13 <= number14);



// ================================================================================

//                                              ✴ Logical Operator Tasks 



//                          19. Ask the user for age and country. Use && to check if age is over 18 and country is "USA". Log the result.  

let age = +prompt("Enter your age");
let country = prompt("Enter your country");

console.log(age > 18 && country === "USA");

// =====================================================================================================================

//                          20. Ask the user to enter a color and a shape. Use || to check if the color is "red" or the  shape is "circle". Show the result in an alert

let color = prompt("Enter any color name");
let shape = prompt("Enter your shape");

alert(color === "red" || shape === "circle");