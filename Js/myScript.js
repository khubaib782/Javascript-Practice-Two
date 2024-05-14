/*
const markBMI = 28.3;
const johnBMI = 23.9;
console.log("Who has higher BMI?");
console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
  console.log("Mark's BMI" + markBMI, "is higher than John's" + johnBMI);
} else {
  console.log("John;s BMI is higher than Mark's!");
}

const num = prompt("Enter Number");
console.log(num);

if (num === 15) {
  console.log("15 is right answer !");
}


const DolphinScore = (96 + 108 + 89) / 3;
const KoalasScore = (88 + 91 + 110) / 3;
console.log(DolphinScore, KoalasScore);

if (DolphinScore > KoalasScore) {
  console.log("Dolphin is Winner with an average", "" + DolphinScore, "!");
} else {
  console.log("Koalas in Winner with an average" + KoalasScore, "!");
}

const DolphinScore2 = (97 + 112 + 101) / 3;
const KoalasScore2 = (109 + 95 + 123) / 3;
console.log(DolphinScore2, KoalasScore2);
if (DolphinScore2 > KoalasScore2 && DolphinScore2 >= 100) {
  console.log("Dolphin is Winner with an average", "" + DolphinScore2, "!");
} else if (KoalasScore2 > DolphinScore2 && KoalasScore2 >= 100) {
  console.log("Koalas in Winner with an average", "" + KoalasScore2, "!");
}

const DolphinScore3 = (97 + 112 + 101) / 3;
const KoalasScore3 = (109 + 95 + 106) / 3;
console.log(DolphinScore3, KoalasScore3);
if (DolphinScore3 > KoalasScore3 && DolphinScore3 >= 100) {
  console.log("Dolphin is Winner with an average", "" + DolphinScore3, "!");
} else if (KoalasScore3 > DolphinScore3 && KoalasScore3 >= 100) {
  console.log("Koalas in Winner with an average", "" + KoalasScore3, "!");
} else if (DolphinScore3 == KoalasScore3) {
  console.log("Match Drawn");
} else if (DolphinScore3 < 100 || KoalasScore3) {
  console.log("No team won the match");
}

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAverage = (a, b, c) => (a + b + c) / 3;
const dolphinsScore = calcAverage(44, 23, 71);
const koalassScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalassScore);

const checkWinner = function (avgKoalass, avgDolphin) {
  if (avgDolphin >= 2 * avgKoalass) {
    console.log(`Dolphin win ${avgDolphin} vs ${avgKoalass}`);
  } else if (avgKoalass >= avgDolphin) {
    console.log(`Koalass win ${avgKoalass} vs ${avgDolphin}`);
  } else {
    console.log(`No team wins`);
  }
};
checkWinner(koalassScore, dolphinsScore);

const array = ["ali", "ahmed", "imran"];
console.log(array);

//Hoisting
//Function Calling
textDisplay();
function textDisplay() {
  console.log(`Hello`);
}
//Variable Calling
console.log(x);
var x = 2;
//Regular Function
function sum(x, y) {
  return x + y;
}
//Arrow Function
const mul = (x, y) => x * y;

console.log(sum(2, 3));
console.log(mul(4, 5));

//Anonymous Function
const welcome = function () {
  console.log("Hello");
};
welcome();

//If else statements
let age = 15;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

let num = 10;
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

const day = "Monday";
switch (day) {
  case "Monday":
    console.log("First day of week");
    break;
  case "Sunday":
    console.log("Last day of week");
    break;
  default:
    console.log("It is a regular day");
}

function bootcamp() {}
const result = bootcamp();
console.log(result);

//Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Callback 1");
}, 3000);

setTimeout(() => {
  console.log("Callback 2");
}, 1000);

console.log("End");

//Template Literal --> (${})
//Assignmen: Use Template Literals to create event loop

const name1 = "Khubaib";
const age1 = 21;

const message = `My name is ${name1} and my age is ${age1}`;
console.log(message);

//Callback Function

function dosSomething(callback) {
  setTimeout(() => {
    console.log("Something is completed");
    callback();
  }, 2000);
}
function afterDone() {
  console.log("callback is executed");
}

dosSomething(afterDone);
*/

/*
console.log("start");
const message1 = "callback 1";
const delay1 = 1000;
setTimeout(() => {
  console.log(`${message1} - after ${delay1}`);
}, delay1);

const message2 = "callback 2";
const delay2 = 500;
setTimeout(() => {
  console.log(`${message2} - after ${delay2}`);
}, delay2);
*/
/*
//map method

const nums = [1, 2, 3, 4, 5];

const squareNumber = nums.map((num) => num * 2);
console.log(squareNumber);

//filter method
const numbers = [4, 5, 6, 7, 8, 9];
const evenNumber = numbers.filter((num) => num % 2 == 0);
console.log(evenNumber);

//reduce method
const digits = [1, 3, 4, 6, 7, 8, 11];

const sum = digits.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

const fruits = ["apple", "mango", "Banana", "Orange", "cherry"];
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits);
*/
//this keyword

/*
const arr1 = {
  yourName: "Khubaib",
  birthYear: 2002,
  job: "Developer",
  friends: ["Atisam", "Mutahir", "Taha"],
  hasDiverLicense: true,

  calcAge: function () {
    // console.log(this);
    return 2027 - this.birthYear;
  },
  getSummary: function () {
    return `${this.yourName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDiverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(arr1.calcAge());
console.log(arr1.getSummary());
*/
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips, bill);

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(total);
*/
/*
const inf = {
  myName: "Khubaib",
  year: 2002,
  calcInf: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // answer in undefined because of arrow function
  //this keyword in not accesible inside arrow function
  greet: () => console.log(`Hey ${this.myName}`),
};
inf.greet();
*/
/*
function calculateArea(length, width) {
  const area = length * width;
  console.log(area);
}

calculateArea(5, 6);
calculateArea(6, 7);
calculateArea(8, 9);
*/
/*
function printNumbersSync() {
  for (i = 1; i <= 5; i++) {
    console.log(i);
  }
}
printNumbersSync();

function Async() {
  setTimeout(() => {
    for (i = 1; i <= 5; i++) {
      console.log(i);
    }
  }, 2000);
}
Async();
*/
/*
function usage() {
  let x = 5; //Blocked Scope Variable
  if (true) {
    let x = 40;
    console.log(x); //Output 40
  }
  console.log(x); //Output 5 (Outer x remains unchanged)
}
usage();
*/
/*
function usage() {
  var y = 5; //Function scoped variable
  if (true) {
    var y = 40;//This will override the outer x
    console.log(y);//Output 20
  }
  console.log(y);//Output 20
}
usage();
*/
/*
function usage() {
  const z = 5; //Blocked Scope Variable
  //const z = 10; The value will not overwite, It will give an eror
  console.log(z);
}
console.log(z); //Cant acces outside the block
usage();
*/

/*
let count = 5;
console.log(count);
count = 10;
console.log(count);
var message = "Hello";
console.log(message);
message = "Hi";
console.log(message);
const Pi = 3.14;
console.log(Pi);
Pi = 3.1415;
console.log(Pi); //Cant uodate the value if once initialized
*/

//console.log(10 == 10n);

//map method practice
/*
const arr = [50, 70, 90, 150];
const eurtousd = 1.5;

const usd = arr.map(function (currency) {
  return currency * eurtousd;
});

console.log(arr);
console.log(usd);
*/
/*
const arr2 = [];
for (currency of arr) arr2.push(currency * eurtousd);
console.log(arr2);

const arrDescription = arr.map((currency, i, arr) => {
  if (currency > 0) {
    return `Movements ${i + 1}: You deposited ${currency}`;
  } else {
    return `Movements ${i + 1}: You withdrew ${Maths.abs(currency)}`;
  }
});
console.log(arrDescription);
*/

/*const arr = [-50, -75, 70, 90, 150];

const deposits = arr.filter(function (currency) {
  return currency > 0;
});
console.log(arr);
console.log(deposits);
*/

//Optional Chaining
/*
const data = undefined;
data.toString(); //It will give error

data?.toString(); //It will match first


const data = { name: "Ali" };

data.marks.english;
data.marks?.english;
*/

/*
const arr = [1, 2, 3, 4, 5];
arr.some((element) => element > 2);
arr.every((element) => element);
*/

//Closure A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.

/*
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();
*/
/*
const arr = [1, 2, 3];
//const a = arr[0];
//const b = arr[1];
//const c = arr[2];

//Destructure

const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

const person = {
  name: "Khubaib",
  age: 21,
  gender: "male",
};

//const name = person.name;
//const age = person.age;
//const gender = person.gender;

const { name, age, gender } = person;

console.log(name);
console.log(age);
console.log(gender);
*/

//Swapping
/*
var x = 4;
var y = 7;
[x, y] = [y, x];

console.log(x);
console.log(y);
*/

//this keyword
/*
let person = {
  myName: "Khubaib",
  age: 21,
  greet(name) {
    this.name = name;
    console.log(`Hello ${person.name}`);
  },
};
let newPerson = person;
// person = null;
person.greet("xyz");
*/
//constructor function
//run on online compiler
/*
function Person() {
  this.name = "Khubaib",
  this.age = 21;
}

const person = new Person();
console.log(this.name);
*/

//Spread Operator
/*
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);


const arr = [1, 2];
const newArr = [...arr, 3, 4];
console.log(newArr);


const string = "Hello";
const charArr = [...string];
console.log(charArr);
*/

//Promises
/*
const count = true;
let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);
*/

/*
function AsyncOperation(success) {
  return  new Promise ((resolve, reject) => {
    setTimeout(()=>{
      if(success){
        resolve("Operation Successful");
      }
      else{
        reject(new Error("Operation Failed"));
      }
    }, 2000);
});
}

//if a request is completed show it with .then and if there is an error use .catch
AsyncOperation(true)
.then((result) =>{
  console.log("Success",result);
})
.catch((error) =>{
  console.log("Error" ,error.message)
});
*/
/*
async function bootcamp() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Bootcamp is completed in 3 months successfully");
    }, 2000);
  });
  const result = await myPromise;
  console.log(result);
}
bootcamp();
*/
//this keyword
/*
const details = {
  name: "Khubaib",
  myName: function () {
    console.log(this);
    console.log(this.name);
  },
};
  
details.myName();
*/
/*
const information = {
  myName: "Khubaib",
  year: 2002,
  birthday: function () {
    console.log(this);
    console.log(2023 - this.year);
    //Error
    // this keyword is not accesible inside arrow function
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solution 1

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    //this will get data from its parent function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.myName}`);
  },
};

information.birthday();
// information.greet();
// information.isMillenial(); //We can also call function in this way
*/

//lexical scope inside arrow function
/*
let a = () => ({
  name: "Anna",
  func: () => console.log(this.name),
});

let b = () => ({
  name: "Brian",
  func: function () {
    console.log(this.name);
  },
});

let c = function () {
  return {
    name: "Charlie",
    func: function () {
      console.log(this.name);
    },
  };
};

let d = function () {
  return {
    name: "Denny",
    func: () => console.log(this.name),
  };
};
a().func(); // returns blank
b().func(); // returns "Brian"
c().func(); // returns "Charlie"
d().func(); // returns blank
*/
//Primitives types
/*
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);
*/
//Reference types
/*
const myDetails = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedDetails = myDetails;
marriedDetails.lastName = "Davis";

console.log("Before Marriage:", myDetails);
console.log("After Marriage:", marriedDetails);
*/
//Copying objects
/*
const myDetails2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const newDetails = Object.assign({}, myDetails2);
newDetails.lastName = "Davis";
//It will not work for object inside an object
newDetails.family.push("Mary");
newDetails.family.push("John");
console.log("Before Marriage:", myDetails2);
console.log("After Marriage:", newDetails);
*/

//cant console in arrow based react function
// const a = () => ({
//   myName: "Khubaib",
//   console.log(myName)
//   // func: function () {
//   //   console.log(this.myName);
//   //   //console.log(myName); //not defined
//   // },
// });
// a().func();

// const b = () => {
//   console.log("agds");
// };
// b();
// Closures
function parent() {
  var testvar = 10;
  function child() {
    console.log(testvar, "testvar");
  }
  child();
}
parent();
