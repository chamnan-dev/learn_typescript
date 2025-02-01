# Functions

Functions in TypeScript can be have typed parameter and return values.

In the following example, The function `add` receives two numbers and returns a number. The function defines the types of the parameters and its return value using the `:` operator.

```ts
// create function sum
function sum(a: number, b: number): number {
    return a + b;
}

// create function sub
function sub(a: number, b: number): number {
    return a - b;
}
```

## Arrow functions

Function can also be defined as variable using "arrow function" notation:

```ts
// create function multiply
const mutiply =  (a: number, b: number): number => {
    return a * b;
}

// create function divs
const divs =  (a: number, b: number): number => {
    return a / b;
}

```

Arrow functions in TypeScript differ from regular functions when used in object -  They do not manipulate the `this` value and use the same scope as the parent function. However - this trait should not conern you if you are not using objects in TypeScript. 

Arrow functions also support as shorter form -  if the function is an expression and not a code block denoted using curly braces, It will return that expression as the output of the function.

For example: 

```ts
// create funcion name as add()

const add = (a: number, b: number): number => a + b;

console.log(add(40, 50));

// It show output 90

```

### Exercise

Create a function name 'multiply' that takes two number parameters and returns their product. 


* Answer

```ts
//create function name => multiply that has 2 parameters and return values 
function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(10, 40)); // output 400

```


