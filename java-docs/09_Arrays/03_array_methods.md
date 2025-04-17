## Array Methods

Common Arrays Class Methods (java.util.Arrays)

Import first

```java
import java.util.Arrays;
```

## `Arrays.toString(array)`

Prints the array as a readable string

```java
int[] a = {1, 2, 3};
System.out.println(Arrays.toString(a));  // [1, 2, 3]
```

## `Arrays.sort(array)`

Sorts the array in ascending order

```java
int[] a = {3, 1, 2};
Arrays.sort(a);  // Now a = [1, 2, 3]
```

## `Arrays.binarySearch(array, value)`

Searches for a value in a sorted array

```java
int[] a = {1, 2, 3, 4};
int index = Arrays.binarySearch(a, 3); // index = 2
```

## `Arrays.copyOf(array, newLength)`

Creates a copy of the array

```java
int[] original = {1, 2, 3};
int[] copy = Arrays.copyOf(original, 5); // [1, 2, 3, 0, 0]
```

## `Arrays.equals(array1, array2)`

Checks if two arrays are equal

```java
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(Arrays.equals(a, b)); // true
```

## `Arrays.fill(array, value)`

Fills the array with a specific value

```java
int[] a = new int[5];
Arrays.fill(a, 7); // [7, 7, 7, 7, 7]java
```
