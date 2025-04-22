# Anti-patterns

## Swallowing Exceptions

Swallowing an exception is when don't handle the issue in the catch block and it keeps other code from being able to handle the issue, too .

```java
public int getPlayerScore(String playerFile) {
    try {
        // ...
    } catch (Exception e) {} // <== catch and swallow
    return 0;
}
```

## Using return in a finally Block

Another way to swallow exceptions is to return from the finally block.

This is bad because, by returning abruptly, the JVM will drop the exception, even if it was thrown from by our code

```java
public int getPlayerScore(String playerFile) {
    int score = 0;
    try {
        throw new IOException();
    } finally {
        return score; // <== the IOException is dropped
    }
}
```

## Using throw in a finally Block

The exception thrown in a finally block will take precedence over the exception that arises in the catch block.

This will erase the original exception from the try block, and we lose all of that valuable information:

```java
public int getPlayerScore(String playerFile) {
    try {
        // ...
    } catch ( IOException io ) {
        throw new IllegalStateException(io); // <== eaten by the finally
    } finally {
        throw new OtherException();
    }
}
```

## Using throw as a goto

Some people also gave into the temptation of using throw as a goto statement.

This is odd because the code is attempting to use exceptions for flow control as opposed to error handling.

```java
public void doSomething() {
    try {
        // bunch of code
        throw new MyException();
        // second bunch of code
    } catch (MyException e) {
        // third bunch of code
    }
}
```
