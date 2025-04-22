# Custom Exceptions

Java exceptions cover almost all general exceptions that are bound to happen in programming.

However, we sometimes need to supplement these standard exceptions with our own.

These are the main reasons for introducing custom exceptions:

- Business logic exceptions

  - exceptions that are specific to the business logic and workflow
  - help users or the developers understand what the exact problem is

- To catch and provide specific treatment to a subset of existing Java exceptions

## Custom Checked Exception

Checked exceptions are exceptions that need to be treated explicitly.

This code throws `FileNotFoundException`, but it’s not clear whether the file doesn’t exist or the file name is invalid.

```java
try (Scanner file = new Scanner(new File(fileName))) {
    if (file.hasNextLine()) return file.nextLine();
} catch(FileNotFoundException e) {
    // Logging, etc
}
```

We can create a custom exception by extending the `java.lang.Exception` class.

```java
public class IncorrectFileNameException extends Exception {
    public IncorrectFileNameException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}
```

Now the _IncorrectFileNameException_ is used along with the root cause of the exception

```java
try (Scanner file = new Scanner(new File(fileName))) {
    if (file.hasNextLine()) {
        return file.nextLine();
    }
} catch (FileNotFoundException err) {
    if (!isCorrectFileName(fileName)) {
        throw new IncorrectFileNameException(
          "Incorrect filename : " + fileName , err);
    }
    // ...
}
```

## Custom Unchecked Exception

For example, we need a custom exception if the file name doesn’t contain any extension.

In this case, we’ll need a custom unchecked exception as this error will only be detected during runtime.

To create a custom unchecked exception, we need to extend the `java.lang.RuntimeException` class.

```java
public class IncorrectFileExtensionException
  extends RuntimeException {
    public IncorrectFileExtensionException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}
```

This way, we can use this custom unchecked exception in our example

```java
try (Scanner file = new Scanner(new File(fileName))) {
    if (file.hasNextLine()) {
        return file.nextLine();
    } else {
        throw new IllegalArgumentException("Non readable file");
    }
} catch (FileNotFoundException err) {
    if (!isCorrectFileName(fileName)) {
        throw new IncorrectFileNameException(
          "Incorrect filename : " + fileName , err);
    }

    //...
} catch(IllegalArgumentException err) {
    if(!containsExtension(fileName)) {
        throw new IncorrectFileExtensionException(
          "Filename does not contain extension : " + fileName, err);
    }

    //...
}
```
