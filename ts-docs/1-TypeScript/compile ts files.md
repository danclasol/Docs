## Compile a TypeScript File

You run the `TypeScript` compiler at the command prompt by using the _tsc_ command.

When you run `tsc` with no parameters, it compiles all the `.ts` files in the current folder and generates a `.js` file for each one.

```
tsc
```

You can also compile a specific file.

```
tsc utility_functions.ts
```

If there are no compiler errors, the `tsc` command generates a _JavaScript_ file named _utility_functions.js_.

## Compiler options

You can set the options either at the command prompt, as you would with many command-line interfaces:

```
tsc utility_functions.ts --noImplicitAny
```

Or in a JSON file named _tsconfig.json_.

```ts
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
    }
  }
}

```

Numerous compiler options are available. (https://www.typescriptlang.org/docs/handbook/compiler-options.html).
