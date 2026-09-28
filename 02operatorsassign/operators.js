let schoolOneCollect=15000;
let schoolTwoCollected=12500;
let totalCollected=schoolOneCollect+schoolTwoCollected;
console.log(totalCollected)

let readMorning=18;
let readEvening=25;
let total=readMorning+readEvening;
console.log("You read pages both evening and morning are",total)

let soldMonday=125;
let soldTuesday=178;
let totalSold=soldMonday+soldTuesday;
console.log("Total sold on monday and tuesday is:",totalSold)

//substraction
let busSeats=80;
let seatOccupied=53;
let emptySeats=busSeats-seatOccupied;
console.log(emptySeats);

let marks=500;
let marksLoss=35;
let finalMark=marks-marksLoss;
console.log("Your total marks after negative marking:",finalMark);

let boxes=2500;
let sendBoxes=875;
let remainingBoxes=boxes-sendBoxes;
console.log(remainingBoxes);

//multiplication

let notebookCost=45;
let totalNotebook=8;
let totalCost=notebookCost*totalNotebook;
console.log(totalCost);

let machineProduce=120;
let producePerHours=6;
let totalPerHourProduce=machineProduce*producePerHours;
console.log(totalPerHourProduce);

let gardenRows=7;
let plantsEachRows=15;
let totalPlants=gardenRows*plantsEachRows;
console.log(totalPlants);

//division

let pencils=144;
let noOfStudents=12;
let studentReceived=pencils/noOfStudents;
console.log(studentReceived);

let companyDistributed=72000;
let department=9;
let receivedEachDepartment=companyDistributed/department;
console.log(receivedEachDepartment);

//modulus
let student=53;
let formsGroup=5;
let studentLeft=student%formsGroup;
console.log(studentLeft);

let candies=128;
let candiesEachBox=10;
let leftUnpacked=candies%candiesEachBox;
console.log(leftUnpacked);

number=Number(prompt("Enter a number:"))
if (number%2===0){
    console.log("Number is even.")
}else{
    console.log("Number is odd.")
}

let toys=237;
let packBoxes=6;
let toysLeft=toys%packBoxes;
console.log(toysLeft);

let peopleWait=180;
let peopleCarry=40;
let peopleLeft=peopleWait%peopleCarry;
console.log(peopleLeft);

//exponential
let sideLength=6;
let voulume=sideLength**3;
console.log(voulume);

let bacteria=1;
let bacteriaIncPerHours=2;
let NumberOfBacteria=4;
let totalBacteria=bacteria*bacteriaIncPerHours**NumberOfBacteria;
console.log(totalBacteria);

let squareArrangement=9;
let cellEachSides=squareArrangement**2;
console.log(cellEachSides);

let a=5;
let b=a**4;
console.log(b);

let pixels=1024;
let totalPixels=pixels**2;
console.log(totalPixels);

//part-B:Assignment operators.

//1(Simple assignment =)

let age=17;
console.log(age);

let penPrice=15;
console.log(penPrice);

let dayInWeek=7;
console.log(dayInWeek);

let city="Sitamrhi"
console.log(city);

const piValue=3.14159;
console.log(piValue);

//2(Add and assign +=)
let studentMarks=200;
studentMarks +=35;
console.log("Your total marks:",studentMarks);

let savingAccount=5000;
let depositedBalance=1200;
let totalBalance=savingAccount+depositedBalance;
console.log(totalBalance);

let phoneBattery=45;
phoneBattery +=30;
console.log(phoneBattery);

let playerPoint=1250;
playerPoint +=375;
console.log("your total point:",playerPoint);

let libraryBook=840;
libraryBook +=160;
console.log("Total book availabe in library is :",libraryBook)

//3) Subtract and Assign -=

let waterTank=1000;
waterTank -=375;
console.log(waterTank);

let studentHaveMoney=500;
studentHaveMoney -=180;
console.log(studentHaveMoney);

let phoneBatterys=90;
phoneBatterys -=45;
console.log(phoneBatterys);

let warehouseBoxes=2400;
warehouseBoxes -=950;
console.log(warehouseBoxes);

let playerPoints=2000;
playerPoints -=625;
console.log("Your overall point are:",playerPoints);

//4)Multiply and Assign *=

let populationTown=5000;
populationTown *=3;
console.log("Updated population is :",populationTown);

let factoryProducePerDay=120;
factoryProducePerDay *=4;
console.log("Factory Daily produce :",factoryProducePerDay);

let savingAmount=2000;
savingAmount *=2;
console.log("Your total balance is :",savingAccount)

let gardenPlants=50;
gardenPlants *=5;
console.log("After a season number of plant:",gardenPlants);

let gameScore=150;
gameScore *=3;
console.log("Your score after bonus is :",gameScore);

//5. Divide and Assign /=

let clothLength=1200;
clothLength /=4;
console.log("Lenght of one part of cloth is :",clothLength);

let companyBudget=80000;
companyBudget /=8;
console.log("Budget for per project is :",companyBudget);

let jarHasSugar=960;
jarHasSugar /=6;
console.log("Sugar in one packet is :",jarHasSugar);

let distanceCovered=450;
distanceCovered /=5;
console.log("Distace per trip:",distanceCovered);

let totalMarks=2500;
totalMarks /=10;
console.log("Marks per studnet is :",totalMarks);

//6.Modulus and Assign %=

let candy=137;
candy %=10;
console.log("Candies left:",candy);

let coachHasStudent=250;
coachHasStudent %=7;
console.log("Student left:",coachHasStudent);

let projectRunDay=1000;
projectRunDay %=7;
console.log("Days left after full weeks:",projectRunDay);

let chairs=89;
chairs %=5;
console.log("Chairs left :",chairs);

let loanDuration=365;
loanDuration %=12;
console.log("Months left after full year :",loanDuration);

//7.Exponentiation and Assign **=

let side=10;
side **=2;
console.log("Area of square is :",side);

let cube=4;
cube **=3;
console.log("Volume of cube is:",cube);

let imageSize=3;
imageSize **=2;
console.log("Image size is :",imageSize);

//1. Loose Equality ==

let strongPass=1234;
let enterPass="1234";
let isMatch=strongPass==enterPass;
console.log(isMatch);

let userAns=0;
let defaultAns=false;
let isMatchAns=(userAns==defaultAns);

let userInput="";
let submitFlag=false;
let isMatchInput=userInput==submitFlag;
console.log(isMatchInput);

let backend=null;
let frontend=undefined;
let bothMatch=(null==undefined);

let device=500;
let anotherDevice="500";
let isEqual=device==anotherDevice;
console.log(isEqual);

//2. Loose Inequality !=

let code1="Save10";
let code2="Save20";
let isDiff=code1!=code2;
console.log(isDiff);

let userRole="Admin";
let defaultRole="guest";
let isDiff=(userRole!=defaultRole);
console.log(isDiff);

let userAnswer=40;
let correctAns=42;
let isDiff=(userAnswer!=correctAns);
console.log(isDiff)

let emailInput="";
let emptyFlag=false;
let isDiff=(emailInput!=emptyFlag);
console.log(isDiff);

let userId=null;
let validId=101;
let isDiff=(userId!=validId);
console.log(isDiff);

//Strict Equality ===

let storedPass=1234;
let enteredPass="1234";
let isEquality=(storedPass===enterPass);
console.log(isEquality);

let account=1234567890;
let account2=1234567890;
let isEquality=(account===account2);
console.log(isEquality)

let featureFlad=true;
let requildState=1;
let isEquality=(featureFlad===requildState);
console.log(isEquality);

let databaseValue=null;
let cacheValue=undefined;
let isEquality=(databaseValue===cacheValue);
console.log(isEquality);

let score1=85;
let score2=85;
let isEquality=(score1===score2);
console.log(isEquality);

//Strict Inequality !==

console.log("101" !== 101); 

console.log(true !== 1);

console.log("abc123" !== "abc124");

console.log(null !== undefined);

console.log(10 !== 20);

//5. Greater Than >

console.log(20 >= 18);
console.log(650 >= 500);
console.log(1200 >= 1000);
console.log(40000 >= 30000);
console.log(11000 > 10000);

//6. Less Than <

console.log(30 < 35);      // true
console.log(8000 < 10000);  // true
console.log(7 < 10);        // true
console.log(40 < 50);       // true
console.log(4 < 5);         // true

//Greater Than or Equal >=

console.log(18 >= 18);  // true
console.log(75 >= 75);  // true
console.log(14 >= 13);  // true
console.log(500 >= 500); // true
console.log(3 >= 2);    // true

//8. Less Than or Equal <=

// 1
console.log(7 + 1 <= 8);    // true

// 2
console.log(5 <= 5);        // true

// 3
console.log(12 <= 12);      // true

// 4
console.log(9.5 <= 10);     // true

// 5
console.log(40 <= 40);      // true

//1. Logical AND &&

let storeName="admin";
let password=1234;
let result=(username==="admin" && password===1234);
console.log(result);

let isLoggedIn = true;
let hasPermission = true;
let result=(isLoggedIn===true && hasPermission===true);
console.log(result);

let inStock = true;
let price=800;
let result=(inStock===true && price>=1000);
console.log(result);

let studentMark=75;
let attendence=80;
let result=(studentMark>65 && attendence>70);
console.log(result);

let isWeekend = true;
let isHoliday = false;
let result=(isWeekend===true && isHoliday===true);
console.log(result);

// 2.Logical Or||

let passwordCorrect = true;
let otpValid = false;
let check = passwordCorrect || otpValid

console.log("Is login allowed:",check)


let isMember=false;
let hasCoupon = true;
let check=isMember || hasCoupon

console.log("Will Discount be Apply:",check)

let age=false;
let height=true;
let check = age || height

console.log("Is Allowed",check)

let emailGiven = true;
let phoneGiven=false;
let check = emailGiven || phoneGiven

console.log("Is Form Valid",check)


let score = false;
let timeBonus = true;
let check = score || timeBonus

console.log("Will Game Open:", check)


// 3. LOGICAL NOT (!)


// 1. User can login if they are not banned
let isBanned = false;
console.log(!isBanned); // true


// 2. Task is still pending if it is not completed
let isCompleted = false;
console.log(!isCompleted); // true


// 3. Check if the light is off
let isOn = true;
console.log(!isOn); // false


// 4. Check if premium access is not allowed
let isActive = false;
console.log(!isActive); // true


// 5. Check if file can be edited
let isReadOnly = false;
console.log(!isReadOnly); // true

// // 6.
// let a = 0;
// let b = 1;
// console.log(!a, !b); // true false


// // 7.
// let x = "Hello";
// let y = "";
// console.log(!x, !y); // false true


// // 8.
// let val = 5;
// let result = !val;
// console.log(result); // false


// // 9.
// let a2 = 10;
// let b2 = 20;
// let result2 = !(a2 && b2);
// console.log(result2); // false


// 10.
let x2 = 0;
let y2 = 1;
let result3 = !(x2 || y2);
console.log(result3); // false


// 4. MIXED LOGICAL OPERATORS (&&, ||, !)

// 1. Member AND not banned
let isMember = true;
let isBanned2 = false;

let canEnter = isMember && !isBanned2;
console.log(canEnter); // true


// 2. Student OR senior, but not banned
let isStudent = true;
let isSenior = false;
let isBanned3 = true;

let getsDiscount = (isStudent || isSenior) && !isBanned3;
console.log(getsDiscount); // false


// 3. Name AND (email OR phone)
let nameGiven = true;
let emailGiven = false;
let phoneGiven = true;

let isFormValid = nameGiven && (emailGiven || phoneGiven);
console.log(isFormValid); // true


// 4. Admin OR token, AND not suspended
let isAdmin = true;
let hasToken = false;
let isSuspended = false;

let accessAllowed = (isAdmin || hasToken) && !isSuspended;
console.log(accessAllowed); // true


// // 5. Score above 1000 AND (time bonus OR extra life)
// let score = 1200;
// let timeBonus = false;
// let extraLife = true;

// let levelOpens = score > 1000 && (timeBonus || extraLife);
// console.log(levelOpens); // true



// 6.
let a3 = 0;
let b3 = 10;
let c3 = 20;

let result4 = a3 || b3 && c3;
console.log(result4); // 20


// // 7.
// let p = true;
// let q = false;
// let r = true;

// let result5 = p && q || r;
// console.log(result5); // true


// 8.
let x3 = 10;
let y3 = 20;

let result6 = !(x3 && y3) || (x3 > 5 && y3 < 30) && true;
console.log(result6); // true


// 9.
let a4 = 5;
let b4 = 0;
let c4 = 10;

let result7 = a4 && b4 || c4;
console.log(result7); // 10


// // 10.
// let val1 = false;
// let val2 = true;
// let val3 = false;

// let result8 = !(val1 || val2) && val3 || true;
// console.log(result8); // true


// PART G: TYPE COERCION


// Part A

// 1. Convert string to number and add 10
let numberValue = Number("25");
console.log(numberValue + 10); // 35

// 2. Convert number to string
let rupees = String(100);
console.log(rupees + " rupees"); // 100 rupees

// 3. Convert 0 to boolean
console.log(Boolean(0)); // false

// 4. Convert "Hello" to boolean
console.log(Boolean("Hello")); // true

// 5. Unary + converts string to number
console.log(+"50" * 2); // 100


// Part B


// 6.
console.log("10" - 5); // 5
console.log("10" + 5); // 105
console.log("10" * 2); // 20
console.log("10" / 2); // 5

// 7.
console.log("5" - "2"); // 3
console.log("5" + "2"); // 52
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5

// 8.
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// 9.
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

// 10.
console.log(String(100)); // "100"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(100 + ""); // "100"


// 11.
console.log("5" + 3 + 2); // "532"
console.log(5 + 3 + "2"); // "82"
console.log("5" - 3 + 2); // 4
console.log(5 - "3" + "2"); // "22"

// 12.
console.log(true + true); // 2
console.log(true + false); // 1
console.log(true + "false"); // "truefalse"
console.log(false + "true"); // "falsetrue"

// 13.
console.log(null + 5); // 5
console.log(undefined + 5); // NaN
console.log(null + "5"); // "null5"
console.log(undefined + "5"); // "undefined5"

// 14.
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"
console.log({} + {}); // "[object Object][object Object]"

// // 15.
// let a = "10";
// let b = 5;
// let c = a + b;
// let d = a - b;
// let e = +a + b;

// console.log(c, typeof c); // 105 string
// console.log(d, typeof d); // 5 number
// console.log(e, typeof e); // 15 number

// 16.
console.log(!!"Hello"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true
console.log(!!null); // false
console.log(!!undefined); // false

// 17.
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("0")); // 0
console.log(Number("  25  ")); // 25
console.log(Number("25px")); // NaN

// // 18.
// let val1 = "5";
// let val2 = 2;

// console.log(val1 + val2); // "52"
// console.log(+val1 + val2); // 7
// console.log(val1 - val2); // 3
// console.log(val1 * val2); // 10
// console.log(val1 / val2); // 2.5


// 19.
let count = 5;

console.log(typeof count++); // "number"
console.log(count); // 6
console.log(typeof ++count); // "number"
console.log(count); // 7

// // 20.
// let x = "10";
// let y = ++x;

// console.log(x, y, typeof x, typeof y);
// // 11 11 "number" "number"

// 21.
let a2 = "5";
let b2 = a2++;

console.log(a2, b2, typeof a2, typeof b2);
// 6 5 "number" "string"

// 22.
console.log(typeof (1 + "2")); // "string"
console.log(typeof (1 - "2")); // "number"
console.log(typeof (1 * "2")); // "number"
console.log(typeof (1 / "2")); // "number"

// 23.
let val = null;

console.log(typeof val); // "object"
console.log(val + 1); // 1
console.log(val - 1); // -1
console.log(val * 1); // 0
console.log(Boolean(val)); // false