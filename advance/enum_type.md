# Enum Type
Enums are a way of giving friendly names to sets of numeric values. They can make code more readable and less error-prone.

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

```

By default, ` Red ` is 0 , ` Green ` is 1, and so on. You can also manually set values.

```ts
enum Color {Red = 1, Green =  2, Blue = 4};
let c: Color = Color.Green;

```

# Exercise

Create an enum for days of the week and a function that takes a day and returns whether it's a weekend or a weekday.

Solutions:

```ts
enum Days {Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7}

function classifyDay(day: Days):string {
    switch(day) {
        case Days.Sunday: 
        case Days.Saturday:
            return "Weekend";
        default: 
          return "Weekday";
    }
}

console.log(classifyDay(Days.Monday));
console.log(classifyDay(Days.Saturday));

```
