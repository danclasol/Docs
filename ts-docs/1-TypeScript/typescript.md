# TypeScript

`TypeScript` is a superset of JavaScript that adds static typing to the language.

## Differences with JavaScript

`TypeScript` add some additional features that JavaScript doesn't have.

- _Static-typing_: declare and enforce types for variables, function parameters, and return values.
- _Language features_:
  - advanced object-oriented
    - interfaces
    - Abstract classes
  - enums
  - namespaces
  - generics
  - Data modifiers
  - optionals
  - function overloading
  - decorators
  - type utils
  - readonly keyword

# Compatibility with JavaScript engines

All JavaScript code is also TypeScript code, and a TypeScript program can seamlessly consume JavaScript.

The additional features of `TypeScript` are not natively supported by `JavaScript` engines, so it needs to be compile and convert it to JavaScript, ensuring compatibility with various runtime enviroments (browsers, node, etc).

The generated JavaScript code is equivalent to the TypeScript code but lacks the type annotations and other features.

Is important to know that, when you write type checking in TypeScript occurs during compilation, not at runtime. Therefore, this type checking is a valuable tool primarily the development phase.

This compilation can be made by on the following:

- using TypeScript compiler
- using TypeScript-compatible transpiler (_Babel_, _swc_, or _Sucrase_)

# Type hints

The core feature of `TypeScript` is its type system.

In `TypeScript`, you can identify the data type of a variable or parameter by using a type hint. With type hints, you describe the shape of an object, which provides better documentation and allows TypeScript to validate that your code is working correctly.

Writing types can be optional in `TypeScript`, because type inference allows you to get much of this power without writing extra code. If TypeScript can determine the data type implicitly (for example, when you assign a value to a variable by using let age = 42), it automatically infers the data type.

## Advantages

- Catches code issues early in development that JavaScript can't normally catch until the code is run in the browser.
- Types also let you describe what your code is intended to do.
- Increase benefits of development tools, such as IntelliSense, symbol-based navigation, go to definition, find all references, statement completion, and code refactoring.

# Migrate from JavaScript to TypeScript

When you work with `TypeScript`, the code will be compiled (or transpiled) into JavaScript, and the JavaScript is actually executed by the runtime. You can use TypeScript on any project where you use JavaScript.

Adopting `TypeScript` isn't a binary choice, so you can gradually migrate your codebase.

You can start by annotating your existing JavaScript with JSDoc, and then switch a few files to be checked by TypeScript. You can prepare your codebase over time to be converted completely.
