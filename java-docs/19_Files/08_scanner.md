# Scanner

The `Scanner` class in Java is used to read input, from the keyboard, files, strings, etc.

- simple and versatile
- often used for reading user input from the console
- belong to `java.util` package

## Constructors

### Read from Console

```java
Scanner scanner = new Scanner(System.in)
```

### Read from File

```java
Scanner scanner = new Scanner(new File("file.txt"))
```

### Read from String

```java
Scanner scanner = new Scanner("123 apple banana")
```

## Methods

### `next()`

Reads the next token (word) from the input (delimited by whitespace).

```java
Scanner sc = new Scanner("Hello World");
String word1 = sc.next();  // "Hello"
String word2 = sc.next();  // "World"
sc.close();
```

### `nextLine()`

Reads the entire line including spaces until the newline.

```java
Scanner sc = new Scanner("Hello World\nNext line");
String line1 = sc.nextLine();  // "Hello World"
String line2 = sc.nextLine();  // "Next line"
sc.close();
```

### `nextInt()`

Reads the next token as an integer.

```java
Scanner sc = new Scanner("42 100");
int n1 = sc.nextInt();  // 42
int n2 = sc.nextInt();  // 100
sc.close();
```

### `nextDouble()`

Reads the next token as a double.

```java
Scanner sc = new Scanner("3.14 2.71");
double d1 = sc.nextDouble(); // 3.14
double d2 = sc.nextDouble(); // 2.71
sc.close()
```

### `nextBoolean()`

Reads the next token as a boolean.

```java
Scanner sc = new Scanner("true false yes");
boolean b1 = sc.nextBoolean();  // true
boolean b2 = sc.nextBoolean();  // false
// nextBoolean() will throw if next token is not true/false
sc.close();
```

### `nextLong()`

Reads the next token as a long integer.

```java
Scanner sc = new Scanner("12345678900");
long l = sc.nextLong();  // 12345678900
sc.close();
```

### `nextFloat()`

Reads the next token as a float.

```java
Scanner sc = new Scanner("3.14");
float f = sc.nextFloat();  // 3.14f
sc.close();
```

### `hasNextLine()`

Checks if the next token can be interpreted as an integer.

```java
Scanner sc = new Scanner("123 abc");
while (sc.hasNext()) {
    if (sc.hasNextInt()) {
        System.out.println("Int: " + sc.nextInt());
    } else {
        System.out.println("Token: " + sc.next());
    }
}
sc.close();
```

### `useDelimiter(String pattern)`

Sets a custom delimiter pattern (default is whitespace).

```java
Scanner sc = new Scanner("apple,banana,orange");
sc.useDelimiter(",");
while (sc.hasNext()) {
    System.out.println(sc.next());
}
sc.close();
```

### `reset()`

Resets the scanner’s delimiter to default (whitespace).

```java
Scanner sc = new Scanner("a,b,c");
sc.useDelimiter(",");
sc.reset();  // resets delimiter to whitespace
sc.close();
```

### `close()`

Closes the scanner and releases resources.

```java
Scanner sc = new Scanner(System.in);
// use scanner
sc.close();
```
