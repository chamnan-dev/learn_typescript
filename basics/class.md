# Classes

Classes in TypeScript are a foundational concept from object-oriented programming (OOP).They provide a blueprint for creating objects, encompassing both the data attributes and the methods to mainpulate this data.

# Defining a Class

In TypeScript , a class is created using the ``` class ``` keyword. Classes may contain:

Fields: These are variables withhin the class that store data.

```ts
name: string;
```
<b>Constructor</b>: This is a special method used to initialize a new instance of the class.

```ts
constructor(name: string) {
 this.name =  name;
}

```

<b>Methods</b>: Functions defined within the class to perform specific tasks.

```ts
speak(): void {
    console.log(`${name} makes a noise.`);
}

```

# Inheritance

TypeScript supports inheritance , allowing a new class (known as a subclass) to derive from an existing class (supperclass). The `` extends `` keyword facilitates this.

When as subclas extends as superclass, it inherits all properties and methods. Howerver, it can also:

1. Add new properties or methods.
2. Override existing methods.

Example:

```ts
class Animal {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name =  name;
        this.description = description;
    }
    
    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }

    details(): void {
        console.log(`${this.description}`);
    }
    
}

class Dogs extends Animal {
    // my code

    hello(): void {
        console.log("In class dog");
    }
}

const myClass = new Dogs("Rosa", "This is dog has name rosa");

myClass.speak();
myClass.details();
myClass.hello();


```

## Exercise 

Using the inheritance concept in TypeScript , you're tasked to extends the `` Animal `` class to craft a ``` Dog ``` class. Ensure the ``` Dog ``` class overrides the ``` speak ``` method so it prints ``` ${name} barks ``` when called.

```ts 
class Animal {
    name: string;

    constructor(name: string) {
        this.name =  name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    // my code for override function speak()

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

const myCall = new Dog("Reaksa");
myCall.speak(); // output  Reaksa barks.

```