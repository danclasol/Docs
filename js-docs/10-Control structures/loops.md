# while

The `while` statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

The condition is evaluated before executing the statement.

The following `while` loop iterates as long as `counter` is less than five.

```js
let counter = 0;

while (counter < 5>) {
    counter++;
}
```

We can finish the execution of the loop with `break`

```js
let counter = 0;

while (counter < 5>) {
    counter++;

    if (counter === 3) break;
}
```

We can skip the current execution of the loop with `continue`.

```js
let counter = 0;

while (counter < 5>) {
    counter++;

    if (counter === 3) {
        counter++;
        continue;
    }
}
```

# do...while

The `do...while` creates a loop that executes a specified statement until the test condition evaluates to false.

The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

In the following example, the `do...while` loop iterates at least once and reiterates until `counter` is no longer less than 5.

```js
do {
  counter++;
} while (counter < 5);
```

# for

The `for` statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

The following `for` statement starts by declaring the variable `i` and initializing it to 0. It checks that `i` is less than lenght of the `array`, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

# for...in

The `for...in` iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

The for...in loop below iterates over all of the object's properties and logs a string of the property names and their values.

```js
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

- We don't have control in the order of execution
- Not recommended to use it with arrays. As keys of an array aren't always the index.

```js
const array = ["Banana", "Apple", "Orange"];
array.food = "Pizza";

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Output:
// "0: Banana"
// "1: Apple"
// "2: Oragne"
// "food: Pizza"
```

# for...of

The `for...of` creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

- We don't have control in the order of execution
- We don't have access to the index of the array

```js
for (const element of array) {
  console.log(element);
}
```

# how to select which loop to use

## while

- When we need to execute a loop as long as the condition is not true
- We don't know the number of executions

## do...while

- Execute a loop as long as the condition is not true
- Execute the statement at least once. (ex. Enter credentials and after validate)

## for

- To iterate with arrays
- To iterate with arrays and we need to use the index of the array
- We know the number of executions, the length of the array
- Because of optimization reasons

## for..of

- To iterate with arrays and the order is not important
- We know the number of executions, the length of the array

## for...in

- To iterate with the keys of objects
- We know the number of executions, the length of the object
- Most usage for testing, to log all properties of an object

# Labels Loops

You can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution

It can be usefull for nested loops, where we need to stop the execution of one loop inside another one.

The syntax is `label: loop`.

```js
let seconds = 1;
let minutes = 0;

increaseMinutes: while (true) {
  console.log(`Loop minutes: ${minutes}:${seconds}`);

  increaseSeconds: while (true) {
    seconds += 1;

    if (minutes === 1) break increaseMinutes;

    if (seconds === 60) {
      seconds = 0;
      break increaseSeconds;
    }

    console.log(`Loop seconds: ${minutes}:${seconds}`);
  }
  minutes += 1;
}
```
