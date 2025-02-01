# Loops 

Looping is a foundational concept in programming , Allowing repeated execution of a block of code. TypeScript, building upon Javascript, offers a variety(រាងចម្រុះ) of loop constructs to handle different scenarios(សេណារីយ៉ូ).
This tutorial will delve into the primary loop mechanisms(យន្តការ) in TypeScript, discussing their syntax and use cases.

# For Loop:

The tranditional `for` loop is composed of anitializer, a condition, and an increment expression. It's perfect for cases where you know in advance how many iterations you need.

```ts

for(let i = 0; i < 100; i++) {
    consloe.log(i);
}

```
This prints numbers 0 through 99.

# For...of Loop: 

Ideal for iterating over elements in arrays or other iterable objects, the `for...of` loop offers simplicity.

```ts
const fruits =  ['banana', 'apple', 'orange', 'cherry'];

for(let fruit of fruits) {
    console.log(fruit); // output banana apple orange cherry
}


```
This is prints 'Apple', 'apple', 'orange'and 'cherry'.

# For...in Loop:

This loop iterates over the properties (keys) of an object, making it suitable for object property traversal.

```ts
const persons = {
    first_name: 'Chamnan',
    last_name: 'Dev',
    job: 'IT',
    gender: 'Male',
    age: 1000,
};

for(let key in persons) {
    console.log(key, ',', persons[key]);
    
}

```

This prints 'first_name, Chamnan', 'last_name, Dev', 'job, IT', 'gender, Male' and 'age, 1000';

# While and do...while Loop:

The `while` loop continues executing its block as long as its condition rmains `true`. On the other hand , the `do...while` loop ensures the block gets executed at least once befor checking the condition.


Example for using while loop
```ts
let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}

```
This prints 0 through 9.

Example for do...while loop

```ts
let count = 0;

do {
    console.log(count);
    count++;
} while(count < 10 );

```

This prints 0 through 9.

Familiarizing yourself with these loop constructs is crucial for robust TypeScript programming. They offer the versatility and power to address a broad range of iteration-based tasks and scenarios.


# Exercise 

Give an object representing a collection of books, use the `for...in` loop to print out each book's title and author.

```ts

const books = {
    "TypeScript Basics": "T. Author",
    "Advanced TypeScript": "A. Expert",
    "TypeScript Projects": "P. Builder"
};

// your code 

for (let key in books) {
    console.log(key, '-', books[key]);
}
// output  'TypeScript Basics - T. Author', 'Advanced TypeScript - A. Expert' and 'TypeScript Projects -  P. Builder'.

```




