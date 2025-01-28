# Variables and Types

In TypeScript , Variables are containers for storing data values. TypeScript enhance variable with type annotations, allowing you to enforce the type of data your variables can hold. This helps in catching type-related errors early in the development  process, making your code more robust and maintainable.There are serveral basic types in Typescript, Including:

- ```number```: For numberic values.
- ```string ```: For textual data. 
- ```boolean```: For true/false values.
- ```any```: A wildcard type that can be anything.
- ```array```: For collections of values, denoted by ```Type[] ``` or ```Array <Type>```.

Defining a variable is done in TypeScript can be done either using type or omitting it. If omitted (បានលុបចោល) , The interpreter will set the type according to the type of variable it was defined with.

```js
let name: string = "Chamnan";
let age: number = 25;
let hobbies: string[] = ["Reading book", "Listening musics", "Learn coding"];

let stringOrNumber = "This is string!";
console.log(typeof age);
```

TypeScript has a very strong typing system. One of the more useful features of it is that it allows you to define a variable to hold specific range or types.

For example, to create a variable that can hold either ```null```  or a number, use the following notation:

```ts
let numberOrNull: number | null;

// these assignments will work
numberOrNull = 3;
numberOrNull = null;

// this is not allowed in typescript
numberOrNull = "Invalid assignment";


```

When declaring variables, TypeScript use ```let```  and  ```const ``` keywords from modern JavaScript:

- `let`: Declares a block-scoped variable, optionally initializing it to a value. `let` variables can be reassigned.
- `const`: Declares a block-scoped constant, One assigned, `const` variables cannot be reassigned.  

## Declaring variables

### Using ```let ```:
When you use ```let ```, you're telling Typescript that the variable may change its value over time.For example:

```ts
let age: number = 25;
age =  26; // This is allowed with `let`.
```

### Using `const`:
With `const` , the variable must be initialized at the time of declaration, and it can not be reassigned later. This is useful for values that should not change throughout the application.

```ts

const pi: number = 3.14;
pi = 3.15; // This would be an error because  `pi` is a constant.

```

## Types 
TypeScript  is statically typed. This means that the type of a variable is known at compile time. This is different from Javascript, Where types are understood dynamically at runtime.

### Basic Types
Here are basic type in TypeScript:

<h3>Number: </h3> All numbers in TypeScript are floating-point values. These can be integers, decimals, etc.

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

```

<h3>String: </h3> Represents a sequence of characters. TypeScript , Like , JavaScript , uses double qoutes(`"`) or single qoute (`'`) to surround string data.

```ts
let color: string = "blue";

color = 'red'; // Both single and double quotes are acceptable.

```
<h3>Boolean:</h3> The most basic datatype is the simple true/false value.

```ts
let isDone : boolean = false;

```
<h3>Any:</h3> It can be any type of value. It is useful when you don't want to write a specific type, but use should limited to when you really don't know what type there will be.

```ts
let notSure: any = 4;
notSure =  "maybe a string instead.";
notSure = false;

```