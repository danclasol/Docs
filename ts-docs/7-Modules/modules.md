# Modules

Modules provide a way to organize and categorize your code, enabling you to group related code together. Also, when code is inside a module, it is pulled from the global scope and into the scope of the module. This can help you avoid naming conflicts between components in the global namespace.

## export

You can export any declaration (such as a variable, function, class, type alias, or interface) by adding the `export` keyword or import it by using the import keyword.

Any file containing a top-level import or export statement is considered a module.

The `export` statement explicitly makes a component in one module available to other modules.

```ts
export function returnGreeting(greeting: string) {
  console.log(`The message from Greetings_module is ${greeting}.`);
}
```

## import

The `import` statement allows you to consume that component from another module.

The import statement can take several forms depending on your objectives.

```ts
import { <component name> } from '<module name>'
```

Rename an `import`, use the the `as` keyword

```ts
import { <component name> as <new name> } from '<module name>'
```

To import the entire module into a single variable, and use it to access the module exports

```ts
import * as <variable name> from '<module name>'
```
