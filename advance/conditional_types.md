# Conditional Types :smile:

Conditional types help in expressing types in relation to other types, particularly in generic types. It has the syntax ` T extends U ? X : Y `.

```ts
type TypeName<T> = 
    T extends string ? "string" : 
    T extends number ? "number" : 
    T extends boolean ? "boolean" : 
    "object"; 
```

# Exercise 
Define a type function `IsString<T>` that checks if a given type is ` string `. If it is , it should return "Yes", otherwise "No".


Solutions:
```ts 
type isString<T> = T extends string ? "Yes" : "No";

```