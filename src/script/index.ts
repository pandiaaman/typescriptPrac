console.log("hello there jello");

//access modifiers
//public, private, protected
//public makes it available eveyrywhere
//private limits its access to its own class
//protected let us access in the classes inherited

//creating classes in typescript
class User {
  public readonly id: number; //by default everything is public
  public email?: string; //optional parameter
  public name: string;
  public city: string = "defaultCity";
  private money: number; //setting money as private as it cant be accessed directly, we need getters and setters

  constructor(
    id: number,
    name: string = "defaultName",
    email: string = "defaultEmail",
    money: number
  ) {
    this.email = email;
    this.name = name;
    this.id = id;
    this.money = money;
  }

  public get getMoney(): number {
    //use get and set for getters and setters
    return this.money;
  }

  public set setMoney(money: number) {
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
  constructor(
    public readonly id: number,
    public name: string = "defaultName",
    public email: string = "defaultEmail",
    private money: number
  ) {}
  public get getMoney(): number {
    //use get and set
    return this.money;
  }

  public set setMoney(money: number) {
    this.money = money;
  }
}

//inheritence in typescript
class SubUserBetter extends UserBetter {
  constructor(
    public name: string,
    public readonly id: number,
    public email: string,
    public number: number,
    public isEmployee: boolean = true, //adding up two new values
    public role: "student" | "teacher" | "management" | "default" = "default"
  ) {
    super(id, name, email, number); //correct order should be maintained
  }
}

//Abstract class in typescript
abstract class Vehicle {
  constructor(
    public vehicleSpeed: number,
    public vehicleBrand: "tata" | "hyundai"
  ) {}
  public get getvehicleSpeed(): number {
    return this.vehicleSpeed;
  }
  public set setvehicleSpeed(shtrspd: number) {
    this.vehicleSpeed = shtrspd;
  }
  public get getvehicleBrand(): string {
    return this.vehicleBrand;
  }
  public set setvehicleBrand(cmramd: "tata" | "hyundai") {
    this.vehicleBrand = cmramd;
  }
  public abstract runVehicle(): string;
}

//creating an object
// const photo1 = new TakePhoto(10, "filter1"); //Cannot create an instance of an abstract class
class Car extends Vehicle {
  constructor(
    public vehicleSpeed: number,
    public vehicleBrand: "tata" | "hyundai",
    public noOfTyres: number,
    private windowCompany: string
  ) {
    super(vehicleSpeed, vehicleBrand);
  }
  public runVehicle(): string {
    return `${this.getvehicleBrand} car is running `;
  }
}

//Generics in typescript
//generics helps us generalize the data types that are getting used inside a class or a function
//suppose we have a function that takes in number and returns number too,

function withoutGenerics(input: number): number {
  return input * 10;
}

//similarly we might have a method that takes in string and returns us string

function withoutGenericsStr(innput: string): string {
  return innput.toUpperCase();
}

//there can be times, when we are not sure about the data type that can be coming in
//in such cases, we want to generalize the methods, and hence we can use generics

function withGenerics<T>(input: T): T {
  return input;
}

let blah = (i: string): string => {
  return "asdd";
};

let withGenericsArrow = <T>(input: T): T => {
  return input;
};

function withGenericsInputArray1<T>(inp: T[]): T[] {
  return inp;
}
//below see how we put a comma after T, that is to not let browser get confuse it from a html tag like h1 or p tags
const withGenericsInputArray2 = <T>(inp: Array<T>): Array<T> => {
  return inp;
};
