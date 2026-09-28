// console.log("Hello");

// x = 10+25;
// console.log(x);

// x = 66;
// console.log(typeof(x));



// let a = Number(prompt("Enter the number 1 :"));
// let b = Number(prompt("Enter the number 2 :"));
// let sum = a+b;
// console.log(`The sum of a and b ${sum}`); 



// let x = 25;
// let y = 5;
// x /= y ;

// console.log(x)



// let totalInternet = 10;
// let totalMembers = 5;
// totalInternet /= totalMembers

// console.log("Internet per Member will be :" , totalInternet   , "GB")



// let playlistIndex = 17;
// let songs = 5;
// playlistIndex %= songs;

// console.log("The song  number will be",playlistIndex);

// compare only checks number (Not datatype)

// console.log(7==7) //true
// console.log(7!=7) //false
// console.log(7==70) //false
// console.log(7==07) //true
// console.log(7== "07") //true
// console.log(7==1) //false
// console.log(0==false) //true
// console.log(1==false) //false
// console.log(null=="") //false

// let storedPin=1234;
// let enteredPin=1243;
// let result= (storedPin==enteredPin);
// console.log("The Enterred pin is Correct:",result);


// let savedTheme="Dark";
// let currentTheme ="White";
// let match= (savedTheme==currentTheme);
// console.log("The Current Theme Matches the Saved Theme:",match);


// let savedCode=1234;
// let currentCode=124;
// let isDifferent= (savedCode!=currentCode);
// console.log("The SavedCode matches the CurrentCode  :",isDifferent
//     =
// );

// console.log(10 === "ashish")
// console.log(10 === "10")

// console.log(10 !== "10")

// let storedProductId = 123;
// let scannnedProductId = 123;

// let verifiying = (storedProductId === scannnedProductId)

// console.log(verifiying)
// let selectedPaymentMethod = "Upi";
// let savedPaymentMethod = "Cash";

// let verifying = (selectedPaymentMethod === savedPaymentMethod)

// console.log(verifying)

// let selectedCountryCode = "+91";
// let savedCountryCode = "+81";

// let verifying = (selectedCountryCode !== savedCountryCode)

// console.log(verifying)

// let currentDeviceType = "v60";
// let registerredDeviceType = "v70" ;

// let verifying = (currentDeviceType !== registerredDeviceType);

// console.log(verifying)



// let comfortabletemperature = 26;
// let roomTemperature = 30;

// let verify = (comfortabletemperature < roomTemperature);

// console.log("Turn on the Ac:",verify)



// let expectedTime = 45;
// let actualTime = 30;

// let verify = (expectedTime < actualTime);

// console.log("Is the actual delivery time more than expected: ", verify);

// let requiredHours = 8;
// let workedHours = 10;

// let checkHours = (workedHours >= requiredHours)

// console.log("Is the worked hours at least of required hours:", checkHours);

// let verifiedEmail = true;
// let phoneVerified = true;
// let verify =(verifiedEmail&&phoneVerified);

// console.log(verify)

// let newUser = true;
// let hasnotPurchased = false;

// let isApllicableForSpecialOffer = (newUser||hasnotPurchased)

// console.log(isApllicableForSpecialOffer)

 

// let loggedIn = false;
// let canSignUp = !loggedIn
// console.log(loggedIn)

// 26-09-2026

// let x=100;
// let y=x++;

// console.log(x,y)\


// let x=99;
// let y=++x;

// console.log(x,y)



// let x=99;
// let y=x--;

// console.log(x,y)


// let x=99;
// let y=--x;

// console.log(x,y)


// let name= "ankit";0  //string
// let age = 16 ;       //number
// let isStudent=false;    //boolean
// let isSelected = ;       //undefined
// let phoneNo= null;        //null
// let registrationNo  = 1234567890123;   //bigint
// let id = Symbol('id');        //symbol

// let arr=[1,2,3];                       //object
// let obj={name:"anirudd",age:35}         //object
// let myFunc = function(){};

// 28-09-2026
// if(condition){}

// let marks=30

// if (marks<35){
//     console.log("Fail")
// }

// let  num=1

// if (num>=0){
//     console.log("Positive number")
// }


// let isLoggedIn = true;
// if(isLoggedIn)
//     {console.log("Welcome")}

// let isLoggedIn = false;
// if(!isLoggedIn){
//     console.log("User is not loggedin")
// }\

// let age = 18;
// if (age >= 18){
//     console.log("eligible")
// }


// let num=2;
// if (num%2==0){
//     console.log("even")
// }


// let temperature = 45;
// if (temperature > 35){
//     console.log("Hot")
// }

let num =5;
if (num %2 == 0){
    console.log("even")
}
else{console.log("odd")}





let days = 365
if (days %4 == 0){
    console.log(" leap year")
}
else{console.log("non leap year")}

let letter = "a"
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    console.log("vowel")
}
else{
    console.log("consonant")
}