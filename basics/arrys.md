# Arrays 

Arrays serve as one of the primary data structures in TypeScript and Javascript.In TypeScript, they offer the added advantage of type safety, ensuring that onces an array is defined to hold a particular type of data.It will alway maintain that type.

### Defining Arrays 

Arrays can be defined in TypeScript using either the array type syntax or the generic array type:

```ts
let names: string[] = ["Chamnan", "Vichet", "Seyha", "Kosal", "Makara", "Vorn"];
let ids: Array<number> = [12,33,44, 34, 33, 44, 44];

```

### Adding and Removing elements

Arrays offer serveral methods to add or remove items:
1. `push()`: Adds one or more elements to the end of an arry.
2. `unshift()`: Inserts one or more elements at the beginning.
3. `pop()`: Removes the last element.
4. `shift()`: Removes the first element.

Example 

```ts
let colors: string[] = ["red", "blue"]; // define of array 2 elements
colors.push("yellow"); // output ["red", "blue", "yellow"]
console.log(colors);
colors.unshift("pink"); // output ["pink","red", "blue", "yellow"]
console.log(colors);
colors.pop(); // output ["pink", "red", "blue"]
console.log(colors);
colors.shift(); // output ["red", "blue"]
console.log(colors);

```

### Accessing and Modifying Elements

Array elements can be accessed using their index, starting from 0. They can also be modified using their index.

```ts
let fruits: string[] = ["apple", "orange", "grape"];

console.log(fruits[1]); // output 'orange'
fruits[1];
console.log(fruits); // output ["apple", "orange", "grape"] 

```

### Finding elements

You can search for an element using `indexOf()` or check its existence with `includes()` ;

```ts
let pets: string[] = ["cat","dog", "bird"];

console.log(pets.indexOf("cat")); // output 0
console.log(pets.indexOf("dog")); // output 1
console.log(pets.includes("fish")); // oupt false
```
Notice that arrays in TypeScript, like in many other languages, have zero-based indices.

### Array Length

The `length` property provides the number of elements in an array.

```ts

let degits: number[] = [1, 2, 3, 4, 5, 6];
console.log('length = ', degits.length); // output length =  6

```

Understanding and mastering array manipulations is essential for effective TypeScript programming. Whether you're handling data sets , managing lists, or storing configurations, arrays offer flexibility and efficiency.


# Exercise 

Create an array of numbers named `ages`. Initialize it with three values: 25, 30, and 35. Add new age , 20 to the start of array. 
Finally , remove the last age from the array.

``` Resolve ```
```ts
// define array
let ages: number[] = [25, 30, 35];

// after add new age to in array this.
ages.unshift("20"); // output [20, 25, 30, 35] 
console.log(ages);

// remove the last element of above array 
ages.pop();
console.log(ages); // output [20, 25, 30]
```
