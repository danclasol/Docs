# Exceptions

Exception Handling in Java is one of the effective means to handle the runtime errors so that the regular flow of the application can be preserved.

Java Exception Handling is a mechanism to handle runtime errors such as `ClassNotFoundException`, `IOException`, `SQLException`, `RemoteException`, etc.

## Types

There are three types of exceptions

- Checked Exceptions

  - must be either caught or declared in the method signature using `throws`
  - checked at compile-time
  - examples: `IOException`, `SQLException`

- Unchecked Exceptions (Runtime Exceptions)

  - do not need to be declared or caught
  - checked at runtime
  - examples: `NullPointerException`, `ArrayIndexOutOfBoundsException`, `IllegalArgumentException`

- Errors
  - serious problems that usually can't be handled by the application
  - are also unchecked
  - examples: `OutOfMemoryError`, `StackOverflowError`

## Handling Exceptions

There are several ways to handle exceptions

### `throws`

The simplest way to handle an exception is to rethrow it

Tells the compiler (and other developers) that they need to handle or declare these exceptions when calling that method.

```java
public void myMethod() throws IOException {
    // code that might throw IOException
}
```

More than one exception can be rethrow

```java
public void myMethod() throws IOException, SQLException {
    // code that might throw IOException or SQLException
}
```

### `try...catch`

If we want to try and handle the exception ourselves, we can use a `try...catch` block.

We can handle it by rethrowing our exception:

```java
try {
    Scanner contents = new Scanner(new File(playerFile));

    return Integer.parseInt(contents.nextLine());
} catch (FileNotFoundException noFile) {
    logger.warn("File not found, resetting score.");
    return 0;
}
```

#### Multiple catch blocks

We can have multiple `catch` blocks

```java
try {
    String str = null;
    System.out.println(str.length()); // NullPointerException
} catch (NullPointerException e) {
    System.out.println("Caught a null pointer!");
} catch (Exception e) {
    System.out.println("Some other exception: " + e.getMessage());
}
```

#### Union catch blocks

Or you can combine multiple exceptions with `|`

```java
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("Handled either IO or SQL exception.");
}
```

### `throw`

You can manually throw exceptions using the `throw` keyword

```java
public void setSalary(double salary) {
    if (salary < 0) {
        throw new IllegalArgumentException("Salary can't be negative.");
    }
    this.salary = salary;
}
```

### `finally`

Use finally if you want code to run no matter what, like closing files or releasing resources

Useful for cleanup (closing files, disconnecting DB, etc.)

```java
try {
    contents = new Scanner(new File(playerFile));

    return Integer.parseInt(contents.nextLine());
} finally {
    if (contents != null) {
        contents.close();
    }
}
```
