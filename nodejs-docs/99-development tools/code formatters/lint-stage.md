# lint-staged

Esta libreria permite ejecutar linters antes de subir commit a git.

https://www.npmjs.com/package/lint-staged

## Instalacion

To install _lint-staged_ in the recommended way, you need to:

1. Install _lint-staged_ itself:

```
npm install --save-dev lint-staged
```

2. Set up the _pre-commit_ git hook to run _lint-staged_

   - Husky is a popular choice for configuring git hooks

   ```
   npm install husky -D
   ```

   - Read more about git hooks here: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

3. Install some linters, like ESLint or Prettier
4. Configure lint-staged to run linters and other tasks:
   - for example: { "\*.js": "eslint" } to run ESLint for all staged JS files
   - See Configuration for more info: https://www.npmjs.com/package/lint-staged#Configuration

Don't forget to commit changes to package.json and .husky to share this setup with your team!

Now change a few files, git add or git add --patch some of them to your commit, and try to git commit them.
