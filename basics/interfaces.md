# Interfaces 

In TypeScript, interface play a pivotal role in defining the shape or structure that objects should adhere to. They don't get compiled into JavaScript and exist only for static type checking. When you deifine an object based on an interface , the object must fulfill the shape required by that interface.

```ts
interface Dog {
    name: string;
    age: number;
}
```

Using the above interfae, any object declared with type ``` Dog ``` should have bboth a ``` name ``` property of type of ``` string ``` and an `` age `` property of type ``` number ```.

An interface may also have optional fields, denoted using the `` ? `` operator, as follows:

```ts 
interface Dog {
    name: string;
    age: number;
    vaccinated?: boolean;
}
```

This interface allows omitting the property ``` vaccinated ```  if a person does not want to specify if his dog was vaccinated or not.

# Exercise 

Your task to create an interface named ` Car `. This interface should possess two properties: ` model `, which will be a string , and ` year `, a number. Once you've defined the interface, make an object that fits criteria set by the interface.

```ts
interface Car {
    model: string;
    year: number;
}

let myCar: Car = {
    name: "Toyota",
    model: 2025
}

console.log(myCar.model); // output 2025

```
