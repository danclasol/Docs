# Loops

In Java, loops are used to repeatedly execute a block of code as long as a specified condition is met. There are several types of loops in Java:

## `for`

Used when you know in advance how many times you want to execute a statement or a block of statements.

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

## `while`

Used when you want to repeat a block of code while a condition is true, but you don't necessarily know the number of iterations in advance.

```java
while (condition) {
    // Code to be executed
}
```

## `do...While`

Similar to the while loop, but it guarantees that the code will execute at least once, because the condition is checked after the block of code is executed.

```java
do {
    // Code to be executed
} while (condition);
```

Example

```java
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

## `for each`

Used specifically for iterating over arrays or collections (like lists, sets, etc.).

```java
for (datatype element : array) {
    // Code to be executed
}
```

```java
int[] numbers = {1, 2, 3, 4, 5};

for (int num : numbers) {
    System.out.println(num);
}
```

## Breaking or Continuing the Loop

### `break`

Exits the loop immediately, skipping any remaining iterations.

```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Exit the loop when i equals 5
    }
    System.out.println(i);
}
```

### `continue`

Skips the current iteration and moves to the next iteration.

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;  // Skip printing when i equals 3
    }
    System.out.println(i);
}
```
