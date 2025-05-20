# Files Class

The `Files` class in Java is part of the `java.nio.file` package and provides static utility methods to work with files and directories.

- introduced in Java 7 and improved in Java 8+

## Methods

### `Files.exists(Path)`

Checks if a file or directory exists

```java
Path path = Path.of("example.txt");
boolean exists = Files.exists(path);
System.out.println("Exists? " + exists);
```

### `Files.createFile(Path)`

Creates a new file

- throws exception if file exists

```java
Path path = Path.of("newfile.txt");
Files.createFile(path)
```

### `Files.createDirectory(Path)`

Creates a directory

```java
Files.createDirectory(Path.of("newfolder"));
```

### `Files.delete(Path)`

Deletes a file or empty directory

```java
Files.delete(Path.of("newfile.txt"));
```

### `Files.copy(Path, Path)`

Copies a file

- use `StandardCopyOption.REPLACE_EXISTING` to overwrite

```java
Files.copy(Path.of("source.txt"), Path.of("copy.txt"));
```

### `Files.move(Path, Path)`

Moves or renames a file

```java
Files.move(Path.of("copy.txt"), Path.of("renamed.txt"));
```

### `Files.readAllBytes(Path)`

Reads file content as bytes

```java
byte[] data = Files.readAllBytes(Path.of("file.txt"));
```

### `Files.readAllLines(Path)`

Reads file content line by line into a List

```java
List<String> lines = Files.readAllLines(Path.of("file.txt"));
```

### `Files.write(Path, byte[])`

Writes bytes to a file

```java
Files.write(Path.of("data.txt"), "hello".getBytes());
```

### `Files.walk(Path)`

Recursively lists all files and subdirectories

```java
Files.walk(Path.of(".")).forEach(System.out::println);
```

### `Files.writeString(Path, String)`

Write text to file

- introduced in Java 11

```java
Files.writeString(Path.of("hello.txt"), "Hello!");
```

### `Files.readString(Path)`

Read full text from file

- introduced in Java 11

```java
String content = Files.readString(Path.of("hello.txt"));
```
