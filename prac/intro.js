"use strict";
exports.__esModule = true;
var myName = "aman";
var myAge = 25;
var myEmail = "pandiaaman16@gmail.com";
console.log("my name is ".concat(myName, " and my age is ").concat(myAge));
var myObject = {
    name: "aman",
    age: 25,
    email: "pandiaaman16@gmail.com"
};
console.log("my name is ".concat(myObject.name, " and my age is ").concat(myObject.age));
// console.log(`my id is ${myObject.id}`);//Property 'id' does not exist on type
// let email = user.email; //Property 'email' does not exist on type '{ name: string; age: number; }'
/*
        types in TypeScript
            number string boolean void
            null undefined
            array object tuples
            never unknown any (dont use any, it makes our code similar to js, and makes the use of ts useless )


        when is using TS helpful
            to make sure that a function only accepts correct data types
            correct data type is returned everytime
    */
var greetings = "hello aman";
// greetings=6; //Type 'number' is not assignable to type 'string'
console.log(greetings);
/*
typescript does not have int or float, we call them all numbers
*/
// let hero; //let hero: any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);
/*
        functions in typescript
          functions take in values and return something/void based on the requirement and the calulations inside

          it is a compulsion to use proper types in your functions
*/
function addBoth(num1, num2) {
    // num1.toUpperCase(); //Property 'toUpperCase' does not exist on type 'number'
    return num1 + num2;
}
var sumval = addBoth(2, 3);
console.log(sumval);
//defining an arrow function
var loginUser = function (userName, userId, isPaid) {
    // return 1; //Type 'number' is not assignable to type 'void'.
    console.log("user's name is ".concat(userName));
};
loginUser("aman", 2, true);
//setting up default values for parameters
var loginUserUpdated = function (userName, userId, isPaid) {
    if (userId === void 0) { userId = 1; }
    if (isPaid === void 0) { isPaid = false; }
    console.log("username is ".concat(userName, " and did they pay? : ").concat(isPaid));
};
loginUserUpdated("anand");
//writing a function with multiple possible return types
var checkVal = function (inputVal) {
    if (inputVal > 5) {
        return true;
    }
    else {
        return "200 OK";
    }
};
console.log(checkVal(10));
console.log(checkVal(2));
//defining a list in typescript and using MAP function to traverse
var heroes = ["thor", "spiderman", "batman", 1];
heroes.map(function (hero) {
    console.log(hero);
});
//use of NEVER data type to handle the errors and throw
function handleErr(errMsg) {
    //ERROR HANDLING USING NEVER
    throw new Error(errMsg);
}
//Objects in typescript
var User = {
    userName: "aman",
    userAge: 25,
    isTemp: false
};
function createUser(_a) {
    var _b = _a.name, string = _b === void 0 ? "defaultName" : _b, boolean = _a.isPaid;
}
// createUser({"aman", true}); //need to set it up with parameters keys
createUser({ name: "aman", isPaid: true });
var userNew1 = {
    _id: 1,
    name: "aman",
    age: 12,
    address: {
        flatNo: "G14",
        city: "bangalore",
        state: "karnataka",
        pin: 23455,
        panIndia: true
    },
    isActive: true,
    creditCardDetails: {
        cardNo: 234325,
        cardName: "aman pandia"
    }
};
var user2Address = {
    flatNo: "G16",
    city: "kota",
    state: "rajasthan",
    pin: 23455
};
var userNew2 = {
    _id: 2,
    name: "aman",
    age: 12,
    address: user2Address,
    isActive: false
};
userNew2.age = 18; //can be changed since its allowed
// userNew2._id = 3; //Cannot assign to '_id' because it is a read-only property.
function createUserWithType(user) {
    console.log("name of the user is : ".concat(user.name, " and age is : ").concat(user.age, " and they are ").concat(user.isActive, " active"));
}
createUserWithType(userNew1);
createUserWithType(userNew2);
var user1Card = {
    credNo: "2525445",
    credName: "dafg",
    expiryMonth: 2,
    exppiryYear: 2034,
    cvv: 235,
    isVisa: true
};
//Arrays in typescript
//datatpe definition is a must
var supes = ["thor", "spiderman", "ironman", "wanda"];
supes.push("black panther");
supes.push("black widow");
// supes.push(23);//Argument of type 'number' is not assignable to parameter of type 'string'
var supesOrNums = ["thanos", 2];
var users = [];
users.push(userNew1);
users.push(userNew2);
users.map(function (user) {
    console.log("user with id : ".concat(user._id, " is having name : ").concat(user.name));
});
//Union types in functions ( stirng | number)
//writing a method that can take id either as number or string, and then returns it after converting it to a string
function getId(id) {
    // id.toUpperCase(); //Property 'toUpperCase' does not exist on type 'string | number'.
    //above even tho we are defining the data type as either no or string, it doesnt allow us to use the respective methods
    //we need to check the data type first
    if (typeof id === "string") {
        var idstr = id.toUpperCase();
        return idstr;
    }
    else if (typeof id === "number") {
        var idstr = id.toString();
        return idstr;
    }
    else {
        return "";
    }
}
var id1 = getId("a34");
var id2 = getId(4);
console.log(id1 + " " + id2);
//  to create constants in type script we can use the concept of types
var pi = 3.14;
//  now the variable pi can not have any other value then 3.14
// pi = 23; //Type '23' is not assignable to type '3.14'.
//   we can also restrict the values a variable can be assigned
var seatType;
// seatType = "asd"; //Type '"asd"' is not assignable to type '"aisle" | "middle" | "window"'.
//
/*
      TUPLES in typescript : its an array with some restrictions
        lets say we have an array but we want the values in side the array to follow a precise order
        to make sure that values are coming in correct order of data types we use tuples
  */
var usersarr = [1, "sdf", "as", 45]; //no particular order is followed
//lets say we want the the first value to be a number then a boolean then a string and again a boolean
var userTuple;
userTuple = [23, true, "asdf", false];
userTuple.push(false);
console.log(userTuple); //after the specific order is followed, it can add more independently
//ENUMS in typescript
//restrict someone's choice
//lets say we have plane seats to select we have three options, defining each option as a constant is not a good idea
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
//using ENUMS
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 21] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
//now if we assign a seat we can use the enum
var seatselected = SeatChoice.AISLE; //we will only get three options to choose from
var user3 = {
    _id: 3,
    name: "anand",
    age: 30,
    address: user2Address,
    isActive: true,
    startUserTrial: function () {
        return "trial started";
    },
    getCoupon: function (couponName) {
        return 20;
    },
    gitHubToken: "asdf"
};
var admin1 = {
    _id: 4,
    adminId: 1,
    role: "Superior",
    name: "anand",
    age: 30,
    address: user2Address,
    isActive: true,
    startUserTrial: function () {
        return "trial started";
    },
    getCoupon: function (couponName) {
        return 20;
    },
    gitHubToken: "asdf"
};
