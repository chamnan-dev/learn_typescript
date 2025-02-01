# Operators

Operators in TypeScript are fundamental element that allow you to perform various operations on your data. This can range from simple arithmetic calculations to more complex logical evaluations and comparisions.Understanding theses operators is essential to writing robust and efficient  TypeScript code.

# Arithmetic Operators

Arithmetic operators allow you to perform mathematical operators between numbers.
<h1>Addition</h1> (`+`): Add two numbers.

```ts
const sum: number = 5 + 3; // output 8
```

<h1>Subtraction</h1> (`-`): Subtraction one number from another.

```ts
const difference: number = 8 - 5; // output 3
```
<h1>Multiplication</h1> (`*`): Multiplies two numbers.

```ts
const products: number = 4 * 7 ; // output 28
```

<h1>Division</h1> (`*`): Divides one number by another.

```ts
const qoutient: number =  20 / 4; // output 5
```
<h1>Modulus</h1> (%): Returns the remainder of a division.

```ts
const remainder: number = 11 % 3; // output 2 
```

# Logical Operators

Logical operators allow you to combine multiple conditions.

* <h1>AND</h1> (`&&`): Returns true if both conditions are true.
* <h1>OR</h1> (`||`): Return true if at last one of conditions is true.
* <h1>NOT</h1> (`!`): Reverses the truthiness of the condition.

Logical operators allow you to create a complex boolean expression, for example:

```ts
const isHome: boolean =  true;
const inPajamas: boolean =  false;
const wantsToEat: boolean =  false;
const isBoard: boolean = false;

// I should go outside if I am home , not in my pajamas , and 
// either I want to eat or I am board

const shouldGoOutside = isHome && !inPajamas && (wantsToEat || isBoard);
console.log(shouldGoOutside);
```

Operators are vital tools in TypeScript that enable various operators. They offer great flexibility in processing and evaluating data, making your coding experience efficient and expressive . Familierizing yourself with these operators will significantly boost your TypeScript proficiency.

# Comparision Operators

Comparision operators allow you to compare two values.

* <h1>Equal to</h1>(`==`) : Checks if two values are equal.
* <h1>Not Equal to</h1> (`!=`): Checks if two values are not equal.
* <h1>Strictly equal to </h1> (`===`): Checks if two values are equal in value and type.
* <h1>Strictly not equal to</h1> (`!==`): Checks if two values are not equal in value and type.
* <h1>Greater than</h1> (`>`): Checks if the value on the left is greater than the value on the right.
* <h1>Less than</h1>(`<`): Checks if the value on the left is less than the value on the right.
* <h1>Greater than or equal to</h1> (`>=`): Checks if the value one the left is greater than or equal to the value on the right.
* <h1>Less than or equal to</h1> (`<=`): Checks if the value one the left is less than or equal to the value on the right.

For example, to check if a number is between 3 and 7 , we can write: 

```ts
const number = 5;
const between =  number > 5 && number <  7 ;

console.log(between); // output show false

const isNotZero =  number !== 0;

console.log(isNotZero); // true

```

# Exercise

Declare two variables: `a` initialized to 5 and `b` initialized to 7. Create a third variable `c` that stores the result of `(a `+` b) * 3`.