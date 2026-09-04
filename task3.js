//Task 1 — Variables
//Create variables using var, let, and const.
//Name
//Age
//City
//College
//Requirements:
//Print all values.
//Change the var value.
//Change the let value.
//Try changing the const value.
//Try redeclaring each variable and observe what happens.
var name="Shyam";
let age=21;
const city="Gobi";
const college="Kongu Engineering College";
//Print all values
console.log("Name:",name);
console.log("Age:",age);
console.log("City:",city);
console.log("College",college);
//Change the var value
name="Reddy";
console.log("Changed Name:",name);
//Change the let value
age=24;
console.log("Changed age:",age);
//Try changing the const value
//City="Saidabad";
//console.log("Redeclared city:",City);
//Type of error because assignment to constant variable it not change
//Redeclaring var
var name="Erode";
console.log("Redeclared var:",name);
//Redeclaring let
//let age=25;
//console.log("Redeclared age:",Age);
//Syntax error because let has already been declared.
//Redeclaring const
//const city="Kharmanghat";
//console.log("Redeclared city:"city);
//Syntax error because city has already been declared.
//Redeclaring college
//const college="Matrusri ENgineering College";
//console.log("Redeclared college:",college);
//Syntax error because college has already been declared.

//Task 2 — Printing Statements
//Use:
//console.log()
//alert()
//confirm()
//prompt()
//document.writeln()
//Create one example for each.
console.log("Hello Javascript!");
alert("Welcome to Javascript!");
confirm("Do you like Javascript?");
var name=prompt("Enter your name:");
console.log("Your name is: Shyam");
document.writeln("Hello"+" Shyam"+" Welcome to my Page.");

//Task 3 — User Details
//Get from the user:
//Name
//Age
//City
//Qualification
//Print the details in the console.
var name1=prompt("Enter your name:");
var age1=prompt("Enter your age:");
var city1=prompt("Enter your city:");
var qualification=prompt("Enter your qualification:")
console.log("Name:",name1);
console.log("Age",age1);
console.log("City:",city1);
console.log("Qualification:",qualification);

//Task 4 — Find Data Types
//Create variables containing:
//"JavaScript"
//100
//99.5
//true
//false
//undefined
//null
//Print their values and use typeof to identify their data types.
var language="Javascript";
var number=100;
var decimal=99.5;
var isStudent=true;
var isTeacher=false;
var valueUndefined;
var valueNull=null;
console.log("Value:",language,"Data type:", typeof language);
console.log("Value:",number,"Data type:", typeof number);
console.log("Value:",decimal,"Data type:", typeof decimal);
console.log("Value:",isStudent,"Data type:", typeof isStudent);
console.log("Value:",isTeacher,"Data type:", typeof isTeacher);
console.log("Value:",valueUndefined,"Data type:", typeof valueUndefined);
console.log("Value:",valueNull,"Data type:", typeof valueNull);

//Task 5 — Student Array
//Create an array containing:
//Student names
//Example:
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
Print:
//First student
console.log("First Student:",students[0]);
//Second student
console.log("Second Student:",students[1]);
//Last student
console.log("Last Student:",students[students.length-1]);
//Total students
console.log("Total Students:",students.length);
//Use only:
//array[index]
//array.length

//Task 6 — Employee Object
//Create an employee object containing:
//name
//age
//role
//skills
//isWorking
//qualification
//skills and qualification should be arrays.
let employee={
    name2:"Shyam",
    age2:21,
    role2:"Software Engineer",
    skills2:["HTML","CSS","JavaScript","React"],
    isWorking2: true,
    qualification2:["B.Tech","Javascript Certification"]
};
//Print:
//Employee name
console.log("Employee Name:",employee.name2);
//Age
console.log("Age:",employee.age2);
//Role
console.log("Role:",employee.role2);
//First skill
console.log("First skill:",employee.skills2[0]);
//Last qualification
console.log("Last Qualification:",employee.qualification2[employee.qualification2.length-1]);
//Working status
console.log("Working status:",employee.isWorking2);
//This follows the same array-inside-object structure from your notes.

//Task 7 — Calculator
//Create:
let a = 20;
let b = 5;
//Calculate:
//Addition
console.log("Addition:",a+b);
//Subtraction
console.log("Subtraction:",a-b);
//Multiplication
console.log("Multiplication:",a*b);
//Division
console.log("Division:",a/b);
//Modulus
console.log("Modulus:",a%b);
//Exponentiation
console.log("Exponentiation:",a**b);

//Task 8 — Shopping Bill
//Create:
//Shirt = 999
//Pant = 1499
//Shoes = 1999
//Bag = 799
let shirt=999;
let pant=1499;
let shoes=1999;
let bag=799;
//Calculate:
let total=shirt+pant+shoes+bag;
//Total price
console.log("Total price:",total);
//Use arithmetic operators only.

//Task 9 — Increment & Decrement
//Find the output without running the code first.
//A
let a1 = 10;
let b1 = a1++;
console.log(a1);
console.log(b1);
//The output is 11,10.

//B
let a2 = 10;
let b2 = ++a2;
console.log(a2);
console.log(b2);
//The output is 11,11.

//C
let a3 = 10;
let b3 = a3--;
console.log(a3);
console.log(b3);
//The ouput is 9,10.

//D
let a4 = 10;
let b4 = --a4;
console.log(a4);
console.log(b4);
//The output is 9,9.

//Task 10
//Start with:
//let num = 10;
//Perform separately:
//Print the result after each operation.

let num=10;
num += 5
console.log(num);

let num1=10;
num1 -= 3
console.log(num1);

let num2=10;
num2 *= 2
console.log(num2);

let num3=10;
num3 /= 4
console.log(num3);

let num4=10;
num4 %= 3
console.log(num4);

let num5=10;
num5 **= 2
console.log(num5);

//Task 11 — Find Output
//Predict the result:
console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(10 <= 9); //false
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(10 != "10"); //false
console.log(10 !== "10"); //true

//Task 12 — AND
//Find the output:
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//Task 13 — OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//Task 14 — NOT
console.log(!true); //false
console.log(!false); //true
console.log(!(5 > 10)); //true
console.log(!(10 > 5)); //false

//Task 15 — Combination
//Find the output without executing:
console.log(5 == "5" && !(5 === 5) || 6 > 7);
//true && false || false = false
console.log(10 > 5 && 8 < 12 || 4 === "4");
//true && true || false = true
console.log(7 === 7 && 10 != "10" || 5 >= 5);
//true && false || true = true
console.log(15 < 10 || 20 > 15 && 5 == "5");
//false || true && true = true
//These follow the same comparison + logical style in your code.

//Task 16 — Voting
//Create:
let age3 = 20;
//Use the ternary operator:
//age >= 18 → "Eligible to vote"
//age < 18  → "Not eligible"
let result = age3 >= 18 ? "Eligible to vote" : "Not eligible";
console.log(result);

//Task 17 — Password
//Create:
let password = true;
//Use ternary:
//true  → "Login successful"
//false → "Wrong password"
let result1 = password ? "Login successful" : "Wrong password";
console.log(result1);

//Task 18 — User Introduction
//Create:
let name4 = "Shyam";
let age4 = 21;
let city4 = "Gobi";
//Print:
//My name is Naveen. I am 25 years old. I live in Trichy.
//Do it two ways:
//Using +
console.log("My name is " + name4 + ". I am " + age4 + " years old. I live in " + city4 + ".");
let name5 = "Shyam";
let age5 = 21;
let city5 = "Gobi";
//Using template literals `${}`
console.log(`My name is ${name5}. I am ${age5} years old. I live in ${city5}.`);
//Your notes cover both approaches.

//Task 19 — String Conversion
//Use String() to convert:
//100
console.log(String(100), typeof String(100));
//true
console.log(String(true), typeof String(true));
//undefined
console.log(String(undefined), typeof String(undefined));
//null
console.log(String(null), typeof String(null));
//[1, 2]
console.log(String([1,2]), typeof String([1,2]));
//Print the result and its typeof.

//Task 20 — Number Conversion
//Predict the output:
console.log(Number()); //0
console.log(Number("")); //0
console.log(Number("123")); //123
console.log(Number("a1")); //NaN
console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number(undefined));  //NaN
console.log(Number(null)); //0
//Your notes specifically cover these conversions.

//Task 21 — Boolean Conversion
//Predict:
console.log(Boolean()); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(123)); //true
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true

//Task 22 — Voting Eligibility
//Get age using prompt().
//18 or above → "You can vote"
//Below 18   → "You can't vote"
//Use:
let age6=Number(prompt("Enter your age:"));
//if
if(age6 >= 8){
    console.log("You can vote");
//else
}else{
    console.log("You can't vote");
}

//Task 23 — Positive or Negative
//Get a number from the user.
//Check:
//Positive
//Negative
//Zero
//Use if / else if / else.
let num6= Number(prompt("Enter a number:"));
if(num > 0){
    console.log("Positive");  
} else if(num < 0){
    console.log("Negative");
} else{
    console.log("Zero"); 
}

//Task 24 — Grade System
//Get marks from the user.
//Create:
//90–100 → A Grade
//80–89  → B Grade
//70–79  → C Grade
//60–69  → D Grade
//Below 60 → Fail
//Use if / else if / else.
let marks = Number(prompt("Enter your marks:"));
if(marks >= 90 && marks <= 100){
    console.log("A Grade");
    
}else if(marks >=80){
    console.log("B Grade");
    
}else if(marks >= 70){
    console.log("C Grade");
    
}else if(marks >= 60){
    console.log("D Grade");
    
}else{
    console.log("Fail");
    
}

//Task 25 — Job Eligibility
//Get:
//Age
//Height
//Weight
//Rules:
//Age >= 18
//Height >= 160
//Weight >= 60
//If all conditions are satisfied:
//"Congratulations! You are selected"
//Otherwise display the appropriate reason.
//This is based directly on the nested-if structure in your code.
let age7=20;
let height=175.5;
let weight=68;
if (age7 >= 18){
    if(height >= 18){
        if(weight >= 60){
            console.log("Congralutions! You are selected");       
        } else{
            console.log("You are not selected because your weight is below 60 kg");
        }
    } else{
        console.log("You are not selected because your height is below 160 cm");  
    }
} else {
    console.log("You are not selected because your age is below 18");  
}

//Task 26 — Traffic Light
//Get a traffic light color:
//red
//yellow
//green
//Use switch.
//red    → Stop
//yellow → Ready
//green  → Go
let color="red";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

//Task 27 — Day
//Create:
//let day = 1;
//Use switch:
//1 → Monday
//2 → Tuesday
//3 → Wednesday
//4 → Thursday
//5 → Friday
//6 → Saturday
//7 → Sunday
//Add:
//default → Invalid day
let day=1;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");  
}

//🏆 FINAL MINI PROJECT
//Task 28 — Student Result System
//Create a small Student Result System using everything you've learned.
//Step 1 — Get user details
//Name
//Age
//City
//Step 2 — Get marks
//Tamil
//English
//Maths
//Step 3 — Calculate
//Total
//Average
//Step 4 — Check result
//Use if / else if / else:
//90+ → A
//80+ → B
//70+ → C
//60+ → D
//Below 60 → Fail
//Step 5 — Check voting
//Age >= 18
//Step 6 — Display
//Use a template string:
//Name: Naveen
//Age: 22
//City: Trichy
//Total: 250
//Average: 83.33
//Grade: B
//Voting: Eligible
let name7="Dharani";
let age8=23;
let city7="Hyderabad";

let telugu=80;
let english=85;
let maths=90;

let total1=telugu+english+maths;
let average=total/3;

let grade;

if(average >= 90){
    grade="A";

} else if (average >= 80){
    grade="B";
} else if (average >= 70){
    grade="C";
} else if (average >=60){
    grade="D";
} else{
    grade="Fail";
}

let voting;
if (age >= 18){
    voting="Eligible";
} else {
    voting="Not Eligible";
}

console.log(`
Name7: ${name7}
age8: ${age8}
city7: ${city7}
Total1: ${total1}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);

