# Matrix

Matrix or 2D arrays are essentially arrays of arrays, like a grid or table.

```java
int[][] matrix;
```

## Creating Array

```java
matrix = new int[3][4]; // 3 rows, 4 columns
```

You can also do it in one line

```java
int[][] matrix = new int[3][4];
```

This creates something like

```css
[ [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0] ]
```

## Initializing an array

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

## Modifying elements

Access to a specific position of the array

```java
numbers[1][2] = 99;
```

## Accessing elements

Access to a specific position of the array

```java
System.out.println(numbers[0][2]);
```

Looping Through a 2D Array

```java
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
```

Or using for-each loops

```java
for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}
```
