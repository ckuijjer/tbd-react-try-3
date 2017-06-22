/* eslint-disable */

// use const and let instead of var
// - block scoped
// - can't be redeclared

// use const by default
// - can't be reassigned, can't be redeclared
const unchangeable = "I can't be changed";
unchangeable = "Really I can't";

// use let if you have to
let changeable = 'I can be changed';
changeable = 'Really I can';

// remember Array and Object isn't immutable
const list = [1, 2, 3];
list.push(4);

const dictionary = { a: 1, b: 2 };
dictionary.c = 3;

// arrow functions
// - lexical this binding, no need for `var that = this` or `this.fn = this.fn.bind(this)`
// - no array like arguments 
var add = function(x, y) {
  return x + y;
}

const add = (x, y) => {
  return x + y;
}

const add = (x, y) => x + y;

// template strings
// - string interpolation
// - multiline
var location = 'World';
var greeting = 'Hello ' + location;

const greeting = `Hello ${location}`;

// destructuring
const list = [1, 2, 3];
const [a, b] = list; // a = 1, b = 2

const dictionary = { a: 1, b: 2, c: 3 };
const { a, b } = dictionary; // a = 1, b = 2

// rest operator
const [head, ...tail] = list; // head = 1, tail = [2, 3]

// spread operator
// - the opposite of the rest operator
const list = [tail, ...head]; // list = [1, 2, 3]

// combine all the things
fn(1, 2, 3);
const fn = (...args) => { // rest operator
  console.log(args) // [1, 2, 3]
  fn(...args) // spread operator (and Maximum call stack size exceeded errors :D)
}

// default parameters
const fn = (location = 'World') => `Hello ${location}`;
fn(); // Hello Casper

// object shorthand names
const c = 3;

const dictionary = {
  a: 1,
  b: 2,
  c
};

// classes
class Subclass extends Superclass
  constructor() {
    super();
  }
}

// importing and exporting modules
