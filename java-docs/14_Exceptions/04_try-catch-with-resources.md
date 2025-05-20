# try-catch-with-resources

In Java, the try-with-resources statement is a special kind of try block that automatically closes resources (like files or streams) when the block finishes, even if an exception occurs.

- available from Java 7 onward
- useful for `FileOutputStream`, `BufferedOutputStream`, `Scanner`
- cleaner code: no need to call `close()` or use `finally` blocks
- less chance of resource leaks

```java
try (FileOutputStream fos = new FileOutputStream("output.txt")) {
            fos.write("Hello, world!".getBytes());
} catch (IOException e) {
    e.printStackTrace();
}
```

Multiple resources

```java
try (
    FileOutputStream fos = new FileOutputStream("output.txt");
    BufferedOutputStream bos = new BufferedOutputStream(fos)
) {
    bos.write("Buffered data".getBytes());
} catch (IOException e) {
    e.printStackTrace();
}
```
