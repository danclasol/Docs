# Arrays

An array is a container object that holds a fixed number of values of a single type.

```java
int[] numbers;
int numbers[];
```

## Creating arrays

```java
numbers = new int[5]; // creates an array of 5 integers (default values: 0)
```

You can also declare and create in one line

```java
int[] numbers = new int[5];
```

## Initializing an array

You can assign values individually

```java
numbers[0] = 10;
numbers[1] = 20;
```

Or directly on declaration:

```java
int[] numbers = {10, 20, 30, 40, 50};
```

## Modifying elements

Access to a specific position of the array

```java
numbers[2] = 6;
```

## Accessing elements

Access to a specific position of the array

```java
System.out.println(numbers[2]);
```

Looping through an Array

```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

Or using a for-each loop

```java
for (int num : numbers) {
    System.out.println(num);
}
```
