# Iterables objects

Objects that can be used in `for..of` are called iterable.

There are many objects that are iterable:

- Arrays
- Strings
- Map, Set

Iterables objects must implement the method name `Symbol.iterator`, that handles the iteration process.

```js
const object = { name: "Peter" };
const string = "Test";
const set = new Set([1, 2, 3]);
const array = ["a", "b", "c"];

object[Symbol.iterator]; // return undefined (objects are not iterable)
string[Symbol.iterator]; // return generator function
set[Symbol.iterator]; // return generator function
array[Symbol.iterator]; // return generator function
```

An iterator must have the method `next()` that return an object

```js
let str = "Hello";
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}
// {
//   value: any, // value retrieve from the next iteration
//   done: Boolean; // indicates if the last value has been already consumated
// }
```

The `Symbol.iterator` method is called automatically by `for..of`.

```js
let str = "Hello";

for (let char of str) alert(char);
```

```js
let numbers = [1, 2, 3];

for (let number of numbers) alert(number);
```

# Making Objects iterable

Objects are not iterables but we can force them to be iterables

## Using a Generator Function

We need to create the generator function indicating every value that should be retrieved with each iteration

Set this function as the `Symbol.iterator` method.

```js
personObj[Symbol.iterator] = function* () {
  yield personObj.name;
  yield personObj.surname;
  yield personObj.age;
  yield personObj.mail;
  yield personObj.favoriteColor;
};
```

Now we can use iterate the object using `for..of`

```js
for (const prop of personObj) {
  console.log(prop);
}
```

## Using an iterator object

We also can make iterable an object by using an iterator instead of a generator function:

We must implement explicity the method `next()` that should return the same object as the original `{value,done}`

```js
personObj[Symbol.iterator] = function () {
  const values = Object.values(personObj);

  return {
    next() {
      const value = values[index];
      index++;

      if (index > values.lenght) {
        return {
          value: undefined,
          done: true,
        };
      }

      return {
        value,
        done: false,
      };
    },
  };
};
```

# Iterables and array-likes

They look similar, but are very different.

- Iterables are objects that implement the `Symbol.iterator` method.

- Array-likes are objects that have indexes and length, so they look like arrays. But they don't have push, pop, etc.

Example of an array-like object:

```js
let arrayLike = {
  // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2,
};
```

We can't iterate with it like an array

```js
// Error (no Symbol.iterator)
for (let item of arrayLike) {
}
```

However, we can use `Array.from` to make it a real array and use the methods push, pop, etc.

```js
let arr = Array.from(arrayLike);
```

## Strings

Strings are both iterable (`for..of` works on them) and array-like (they have indexes and length)

```js
for (let char of "test") {
  console.log(char);
}
```

```js
let str = "Hello";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```
