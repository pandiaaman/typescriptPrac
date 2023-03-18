"use strict";
console.log("hello there jello");
//access modifiers
//public, private, protected
//public makes it available eveyrywhere
//private limits its access to its own class
//protected let us access in the classes inherited
//creating classes in typescript
class User {
    constructor(id, name = "defaultName", email = "defaultEmail", money) {
        this.city = "defaultCity";
        this.email = email;
        this.name = name;
        this.id = id;
        this.money = money;
    }
    get getMoney() {
        //use get and set for getters and setters
        return this.money;
    }
    set setMoney(money) {
        //A 'set' accessor cannot have a return type annotation
        if (money < 1) {
            throw new Error("money cannot be set less than one");
        }
        this.money = money;
    }
}
//creating an instance of this class
const instanceuser1 = new User(1, "aman", "aman@gmail.com", 14);
// instanceuser1.id = 3; //Cannot assign to 'id' because it is a read-only property
console.log(instanceuser1.getMoney);
//Another way to write a class
//MORE PROFESSIONAL WAY TO WRITE A CLASS
class UserBetter {
    //just by defining public and private in the constructor we dont need to anymore declare the variables
    //we dont need to use this. this. here
    constructor(id, name = "defaultName", email = "defaultEmail", money) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.money = money;
    }
    get getMoney() {
        //use get and set
        return this.money;
    }
    set setMoney(money) {
        this.money = money;
    }
}
//inheritence in typescript
class SubUserBetter extends UserBetter {
    constructor(name, id, email, number, isEmployee = true, //adding up two new values
    role = "default") {
        super(id, name, email, number); //correct order should be maintained
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
        this.isEmployee = isEmployee;
        this.role = role;
    }
}
//Abstract class in typescript
class Vehicle {
    constructor(vehicleSpeed, vehicleBrand) {
        this.vehicleSpeed = vehicleSpeed;
        this.vehicleBrand = vehicleBrand;
    }
    get getvehicleSpeed() {
        return this.vehicleSpeed;
    }
    set setvehicleSpeed(shtrspd) {
        this.vehicleSpeed = shtrspd;
    }
    get getvehicleBrand() {
        return this.vehicleBrand;
    }
    set setvehicleBrand(cmramd) {
        this.vehicleBrand = cmramd;
    }
}
//creating an object
// const photo1 = new TakePhoto(10, "filter1"); //Cannot create an instance of an abstract class
class Car extends Vehicle {
    constructor(vehicleSpeed, vehicleBrand, noOfTyres, windowCompany) {
        super(vehicleSpeed, vehicleBrand);
        this.vehicleSpeed = vehicleSpeed;
        this.vehicleBrand = vehicleBrand;
        this.noOfTyres = noOfTyres;
        this.windowCompany = windowCompany;
    }
    runVehicle() {
        return `${this.getvehicleBrand} car is running `;
    }
}
//Generics in typescript
//generics helps us generalize the data types that are getting used inside a class or a function
//suppose we have a function that takes in number and returns number too,
function withoutGenerics(input) {
    return input * 10;
}
//similarly we might have a method that takes in string and returns us string
function withoutGenericsStr(innput) {
    return innput.toUpperCase();
}
//there can be times, when we are not sure about the data type that can be coming in
//in such cases, we want to generalize the methods, and hence we can use generics
function withGenerics(input) {
    return input;
}
let blah = (i) => {
    return "asdd";
};
let withGenericsArrow = (input) => {
    return input;
};
function withGenericsInputArray1(inp) {
    return inp;
}
//below see how we put a comma after T, that is to not let browser get confuse it from a html tag like h1 or p tags
const withGenericsInputArray2 = (inp) => {
    return inp;
};
