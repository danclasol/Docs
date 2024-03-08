# Namespaces

As modules, `namespaces` provides a way way to organize and categorize your code, enabling you to group related code together. Namespaces allow you to group variables, functions, interfaces, or classes related to business rules in one namespace and security in another.

All components defined within the namespace are scoped to the namespace and remove from the global scope and into the scope of the namespace. This placement can help you avoid naming conflicts between components in the global namespace and can be beneficial when working with distributed development teams that may use similar component names.

You can use namespaces to:

- Reduce the amount of code in the global scope, limiting "global scope pollution."
- Provide a context for names, which helps reduce naming collisions.
- Enhance reusability.

## Define namespaces

They are similar to _modules_ but provide a way to structure code using a different syntax.

- can define multiple namespaces within a single TypeScript file
- use `export` to make function or class available outside of the namespace
- If you omit the export keyword, the component is only available inside the namespace.

```ts
namespace A {
  export function functionName() {
    // ...
  }
}

namespace B {
  export function functionName() {
    // ...
  }
}
```

To use a class or function within a namespace, prefix the component name with the namespace name.

```ts
const var1 = A.functionName(); // OK
const var2 = B.functionName(); // OK
const var3 = functionName(); // error
```

When the _TypeScript_ code is transpiled to _JavaScript_, namespaces are often converted to a combination of _IIFE_ (Immediately Invoked Function Expression) and object literals.

## Nested namespaces

You can also nest namespaces within namespaces, providing even more options for organizing your code.

Add the `export` keyword before namespace names to allows them to be accessible outside of the namespace.

```ts
namespace NestedNamespace {
  export namespace A {
    export function functionName() {
      // ...
    }
  }
  export namespace B {
    export function functionName() {
      // ...
    }
  }
}
```

```ts
const var1 = NestedNamespace.A.functionName();
const var2 = NestedNamespace.B.functionName();
```

## Namespace Alias

Nested namespaces can become more complex, and you may want to create an alias to shorten and simplify your code.

You can use the `import` keyword to define an alias that represents the namespace.

You can now use greet in place of AllGreetings.Greetings in your code.

```ts
import newAlias = NestedNamespace.A;

NestedNamespace.A.functionName(); // without alias
newAlias.functionName(); // with alias
```

# Multi-file namespaces

When you have namespaces in multiple files that relate to each other, you must add `reference` tags to tell the _TypeScript_ compiler about the relationships between the files.

For example, assume that you have three Typescript files:

- _interfaces.ts_: contains some interface definitions.
- _functions.ts_: functions that implement the interfaces in interfaces.ts.
- _main.ts_: calls the functions in functions.ts and represents the main code of your application.

Add references using the triple slash (///) syntax to the top of the files which has a relationship with another file.

```ts
namespace Interfaces {}
```

```ts
/// <reference path="interfaces.ts">
namespace Functions {
    export function functionName {}
}
```

When there is a reference to more than one file, start with the highest-level namespace and then work your way down. TypeScript will use this order when compiling the files.

```ts
/// <reference path="interfaces.ts">
/// <reference path="functions.ts">
let x = Functions.functionName();
```
