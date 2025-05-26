# Files

`File` class is used to represent files and directories pathnames in an abstract way.

It is recommeneded to use the new `Path` class instead

- belong to `java.io` package (Legacy)
- allows create and delete files
- inspect and manipulate files and directories
- used with steams (`FileInputStream`,`FileOutputStream`)

## Constructor

This does not create the physical file, it just creates an object representing the path.

```java
File myFile = new File("example.txt");
```

## Methods

### `Files.isDirectory(path)`

Checks if path is a directory

```java
Path path = Path.of("myfolder");

if (Files.isDirectory(path)) {
    System.out.println(path + " is a directory.");
} else {
    System.out.println(path + " is NOT a directory.");
}
```

### `Files.isRegularFile(path)`

Checks if path is a normal file

```java
Path path = Path.of("example.txt");

if (Files.isRegularFile(path)) {
    System.out.println(path + " is a regular file.");
} else {
    System.out.println(path + " is NOT a regular file.");
}
```

### `Files.isReadable(path)`

Can the file be read

```java
if (Files.isReadable(path)) {
    System.out.println(path + " is readable.");
} else {
    System.out.println(path + " is NOT readable.");
}
```

### `Files.isWritable(path)`

Can the file be written?

```java
if (Files.isWritable(path)) {
    System.out.println(path + " is writable.");
} else {
    System.out.println(path + " is NOT writable.");
}
```

### `Files.size(path)`

Returns the size in bytes

```java
try {
    long size = Files.size(path);
    System.out.println("Size of " + path + " is " + size + " bytes.");
} catch (IOException e) {
    System.out.println("Error reading file size: " + e.getMessage());
}
```

### `Files.getLastModifiedTime(path)`

Gets last modified time

```java
try {
    FileTime lastModified = Files.getLastModifiedTime(path);
    System.out.println("Last modified time: " + lastModified);
} catch (IOException e) {
    System.out.println("Error getting last modified time: " + e.getMessage());
}
```

### `createNewFile()`

Creates an empty file if it does not exist

```java
File file = new File("test.txt");

if (file.createNewFile()) {
    System.out.println("File created.");
} else {
    System.out.println("File already exists.");
}
```

### `mkdir()`

Creates a directory

```java
File dir = new File("myFolder");
if (dir.mkdir()) {
    System.out.println("Directory created.");
}
```

### mkdirs()

Creates multiple directories

```java
File nestedDirs = new File("parentFolder/childFolder");
if (nestedDirs.mkdirs()) {
    System.out.println("Nested directories created.");
}
```

### `exists()`

Checks if the file or directory exists

```java
File file = new File("test.txt");
System.out.println("Exists? " + file.exists());
```

### `getName()`

Returns the name of the file or directory

```java
File file = new File("C:/Users/test.txt");
System.out.println("Name: " + file.getName()); // Outputs: test.txt
```

### `getAbsolutePath()`

Returns the absolute path

```java
File file = new File("test.txt");
System.out.println("Absolute path: " + file.getAbsolutePath());
```

### `canRead()`

Checks read permission

```java
File file = new File("test.txt");
System.out.println("Can read: " + file.canRead());
```

### `canWrite()`

Checks write permission

```java
File file = new File("test.txt");
System.out.println("Can write: " + file.canWrite());
```

### `length()`

Returns the size of the file (in bytes)

```java
File file = new File("test.txt");
System.out.println("File size: " + file.length() + " bytes");
```

### `delete()`

Deletes the file or directory

```java
File file = new File("test.txt");

if (file.delete()) {
    System.out.println("File deleted.");
} else {
    System.out.println("Delete failed.");
}
```

### `list()`

Lists contents of a directory

- return a `String[]`

```java
File folder = new File("myFolder");

String[] files = folder.list();
for (String name : files) {
    System.out.println(name);
}
```

### `listFiles()`

List contents of a directory.

- return a `File[]`

```java
File folder = new File("myFolder");
File[] files = folder.listFiles();
for (File f : files) {
    System.out.println(f.getName() + " - is file? " + f.isFile());
}
```

### `isFile()`

Checks if the type of the path is a file

```java
File f1 = new File("test.txt");

System.out.println("Is file: " + f1.isFile());
```

### `isDirectory()`

Checks if the type of the path is a directory

```java
File f1 = new File("myFolder");

System.out.println("Is directory: " + f1.isDirectory());
```
