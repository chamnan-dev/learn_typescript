# keyof and typeof Operators

The ``` keyof ``` type operator works with object types to create a string or numeric literal union of its keys.

The ``` typeof ``` type operator queries the type of a value, allowing you to refer to it in various places.

```ts
let person = {name: "Alice", age: 28}
type Person = typeof person;
type PersonKeys =  keyof Person; // "name" || "age"

```

# Exercise 

Create a function that updates a property's value in an object, given the object, a property key, and a new value.

Answers:

```ts
function updatePropertyj<T>(obj: T, key: keyof T, value: any): T {
    // Your code here 
    obj[key] = value;
    return obj;
}

console.log(updatePropertyj({name: "Alice", age: 28}, "name", "Bob"));
```

