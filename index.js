"use strict";
// Base Types & Primitives
//number
let x;
x = 5;
x = 1.5;
//string
let y;
y = 'Hello world';
//boolean
let z;
z = true;
z = false;
let a;
a = 1;
a = 'Hello world';
a = false;
a = [1, 2, 3];
// Array & Object Types
let nums;
nums = [1, 2, 3];
nums.push(4);
let strs;
strs = ['Hello', 'World'];
let student;
student = {
    firstName: 'John',
    lastName: 'Doe',
    courses: ['Code Labs']
};
let student2;
student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    courses: ['CS50']
};
let specialNum;
specialNum = 1;
// Type Inference
let firstName = 'Matt';
let topSpeed = 15;
// Union Types
let b;
b = 'Hello world';
b = 10;
b = false;
b = student2;
let c;
c = 'Hello world';
c = 10;
c = false;
c = student2;
c = undefined;
c = null;
// Function Types (Parameters & Return)
function getStudent(firstName) {
    return {
        firstName: 'Bob',
        lastName: 'Ross',
        courses: ['Art 101']
    };
}
const newStudent = getStudent('Bob');
function doSomething(message) {
    console.log(message);
}
// Generics
function createArrayFrom(a, ...args) {
    return args;
}
const newArr = createArrayFrom('Hello World', 2, 3, 4, 5);
console.log(newArr);
class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    broadcast(data) {
        this.observers.forEach(obs => {
            obs(data);
        });
    }
}
const obs = new Observable();
function printStudent(student) {
    console.log(student);
}
obs.subscribe(printStudent);
obs.broadcast(student2);
function insertAtBeginning(original, newItem) {
    return [newItem, ...original];
}
const currentArray = [1, 2, 3, 4];
const newArray = insertAtBeginning(currentArray, 5);
// Class Constructors
class Boat {
    constructor(model, length, price) {
        this.length = length;
        this.price = price;
    }
}
const myBoat = new Boat('Model', 50, 250);
console.log(myBoat);
// Interfaces
