# Path

Path is an interface that represents a path in the file system, a sequence of directories and file name components.

It replaces the older `File` class for most modern file path handling.

- belong to `java.nio.file.Path`

## Path vs File

- uses new package `java.nio.file.Path` instead of old `java.io.File`
- modern, chainable
- better support for symbolic links, normalization
- works with the utility class `Files`
- `File` requieres manual I/O handling

## Methods

### `getFileName()`

Gets last element in the path

```java
Path path = Path.of("folder/example.txt");
System.out.println(path.getFileName());  // Output: example.txt
```

### `getParent()`

Gets parent path

```java
System.out.println(path.getParent());   // Output: folder
```

### `getRoot()`

Converts to absolute path

- root (e.g., C:\ or /)

```java
System.out.println(path.getRoot());     // Output: null (if relative)
```

### `isAbsolute()`

Check if the path is absolute

```java
System.out.println(path.isAbsolute());  // Output: false
```

### `toAbsolutePath()`

Converts to absolute path

```java
System.out.println(path.toAbsolutePath());
```

### `normalize()`

Cleans redundant `.` or `..`

```java
Path messy = Path.of("folder/../example.txt");
System.out.println(messy.normalize());  // Output: example.txt
```

### `resolve(p)`

Combines two paths

```java
Path base = Path.of("/home/user");
Path full = base.resolve("file.txt");
System.out.println(full);               // Output: /home/user/file.txt
```

### `relativize(p)`

Create relative path from one to another

```java
Path p1 = Path.of("/home/user");
Path p2 = Path.of("/home/user/docs/file.txt");
System.out.println(p1.relativize(p2));  // Output: docs/file.txt
```

### `startsWith(x)`

Checks path prefix

```java
Path path = Path.of("docs/report.txt");
System.out.println(path.startsWith("docs"));   // true
```

### `endsWith(x)`

Checks path suffix

```java
Path path = Path.of("docs/report.txt");
System.out.println(path.endsWith("report.txt")); // true
```
