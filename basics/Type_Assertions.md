# Type Assertions

Sometimes you might know a more specific type than TypeScript can infer. In these canses, you can use type assertions to specify the type you're confident about.

```ts
let someValue: any =  "Ths is a string";
let strLength: number = (<string>someValue).length;
// Or using as-syntax
let strLengthAs: number = (someValue as string).length;

```

In general, type assertions should be avoided if possible. But sometimes it is impossible, especially when dealing with JSON serialization and deserialization from a serve, for example.

# Exercise

You are given a varialbe of type ``` any ``` that is supposed to contain a string. Write a function that takes this variable and return the length of the string using type assertions.

Answers:

```ts
let data: any = "Hello , TypeScript!";

function getStringLength(value: any): number {
    return (value as string).length;
}

console.log(getStringLength(data)); // 18
```

