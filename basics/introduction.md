### Introduction

Typescript is a strict syntactical superset of javascript, adding optional static typing. Developed and maintained by microsoft, it allows developers to use the latest ECMAScript features and compile the code to plain Javascript, witch can be run and any browser or node.js environment.

The major advantage of using TypeScript is static typing feature, which help catch errors early during the developement phase. 
This can be invaluable for larger projects where catching bugs early can save a significant (សំខាន់) amount of time and money.

Let's start with the most basic Program "Hello World". In Typescrit just like Javascript, this can be done with simple  ``` console.log() ``` statment.

```js
 const message: string = "Hell world";
 console.log(message);

```

The ```: string ``` is a type annotation that tells Typescript that the ``` message ``` variable can only hold a string .This is one of the mony features Typescript adds to JavaScript.

Typescript also supports formatting strings using backtick operator. Here is an example:

```js 
    const name =  "Chamnan"
    const message: string = `Hello ${name}`

    console.log(message);
```

This print ``` Hello Chamnan``` , Because the ``` name ``` variable was formatted into the string right after the world ``` Hello ```. 







--------------------------------------------------------------------------------------
My Note: 
- ECMAScript (/ˈɛkməskrɪpt/; ES) is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers.