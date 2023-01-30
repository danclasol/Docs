# if...else

The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

If there is only one line of code, we can avoid using braquets `{}`

```js
if (condition) statement1;
```

## truthy values

All these senteces will be true in a condition

```js
const number = 1;
const string = "Test";
const boolean = true;
const object = {};
const array = [];
const function = function () {};
```

## falsy values

```js
const number = 0;
const string = "";
const boolean = false;
const null = null;
const undefined = undefined;
```
