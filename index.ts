// Base Types & Primitives
//number
let x: number;
x = 5;
x = 1.5;

//string
let y: string;
y = 'Hello world';

//boolean
let z: boolean;
z = true;
z = false;

let a: any;
a = 1;
a = 'Hello world';
a = false;
a = [1, 2, 3];

// Array & Object Types
let nums: number[];
nums = [1, 2, 3];
nums.push(4);

let strs: string[];
strs = ['Hello', 'World'];

let student: {
  firstName: string,
  lastName: string,
  courses: string[]
}
student = {
  firstName: 'John',
  lastName: 'Doe',
  courses: ['Code Labs']
}

// Type Aliases
type Student = {
  firstName: string,
  lastName: string,
  courses: string[]
};
let student2: Student;
student2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  courses: ['CS50']
};

type SpecialNumber = number;
let specialNum: SpecialNumber;
specialNum = 1;

// Type Inference
let firstName = 'Matt';
let topSpeed = 15;

// Union Types
let b: string | number | boolean | Student;
b = 'Hello world';
b = 10;
b = false;
b = student2;

type MyNewType = string | number | boolean | null | undefined | { firstName: string, lastName: string, courses: string[]};
let c: MyNewType;
c = 'Hello world';
c = 10;
c = false;
c = student2;
c = undefined;
c = null;

// Function Types (Parameters & Return)
function getStudent(firstName: string): Student {
  return {
    firstName: 'Bob',
    lastName: 'Ross',
    courses: ['Art 101']
  };
}

const newStudent = getStudent('Bob');

function doSomething(message: string): void {
  console.log(message);
}

// Generics
function createArrayFrom<T>(a: string, ...args: T[]): T[] {
  return args;
}

const newArr = createArrayFrom('Hello World', 2, 3, 4, 5);
console.log(newArr);

class Observable<T> {
  observers: ((a: T) => void)[] = [];

  subscribe(fn: (a: T) => void) {
    this.observers.push(fn);
  }

  broadcast(data: T) {
    this.observers.forEach(obs => {
      obs(data);
    })
  }
}

const obs = new Observable<Student>();

function printStudent(student: Student): void {
  console.log(student);
}

obs.subscribe(printStudent);
obs.broadcast(student2);

function insertAtBeginning<T>(original: T[], newItem: T): T[] {
  return [newItem, ...original];
}

const currentArray = [1, 2, 3, 4];
const newArray = insertAtBeginning(currentArray, 5);

// Class Constructors
class Boat {
  constructor(public model: string, public length: number, private price: number) {
  }
}
const myBoat = new Boat('Model', 50, 250);
console.log(myBoat);

// Interfaces
interface Automobile {
  manufacturer: string;
  model: string;
  topSpeed: number;

  drive(): void;
};

let myAutomobile: Automobile;

myAutomobile = {
  manufacturer: 'Honda',
  model: 'Accord',
  topSpeed: 100,
  drive: () => console.log('vroom')
}

class Car implements Automobile {
  constructor(public manufacturer: string, public model: string, public topSpeed: number) {}

  drive(): void {
    console.log('vroom');
  }

  race(): void {
    console.log('vroom but faster');
  }
}

class Truck extends Car {
  tow(cargo: string) {
    console.log('towing ' + cargo);
  }
}
const truck = new Truck('Ford', 'F150', 100);
truck.drive();
truck.race();
truck.tow('haybales');

