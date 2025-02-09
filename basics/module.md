# Modules

Modules in TypeScript allow you to organize and split your code across multiple files. You can use the ``` export ``` keyword to expose parts of your module to other modules.


```ts
// in math.ts
export function add(x: number, y: number): number {
    return x + y;
}

```

Once this module is defined , you can use it from another module in the same directory as follows:

```ts
// in main.ts
import { add } from './math';
```

You can also export a default export, if you have a main variable you want to export from a module. This is useful for modules which export a single class or function . For example:

```ts
// in Component.ts
export default function Component(): string {
    return "Hello world!";
}
```

To use the default export , use the following notation (without the curly braces):

```ts
// in main.ts
import Component from './Component';

```

# Naming imports

TypeScript allows you to name imports. This is useful if you've already defined a variable in a local scope and you still want to import a variable from another module.

```ts
// let's import the implementations frorm the modules

import { add as notMyAdd} from './math';
import NotMyComponent from './Component';

// these are the local implementations in main.ts
function add(x: number, y: number): number {
    return x + y;
}

function Component(): string {
    return "Hello !";
}

```
This example refers to ``` add ``` for the local implementation and ``` notMyAdd ``` as the implementation from math.ts.

Note that importing default values can simply be done using any variable name, as shown in the example above.

