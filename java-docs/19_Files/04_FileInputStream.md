# FileInputStream

FileInputStream class used to read raw bytes from a file, typically for binary data such as images, videos, or serialized objects.

Often used as a base stream, wrapped with `BufferedInputStream` or `DataInputStream` for better performance or richer functionality

- belongs to the `java.io` package
- reads binary data

  - if you're reading text, prefer `FileReader`, `BufferedReader`, or `Scanner`

### Differences with BufferedOutputStream

- writes raw bytes directly to a file
- every `write()` call immediately affects the file (no internal buffering)
- slower if writing many small pieces of data
- good for small files or single, large writes

## Methods

### `read()`

Reads one byte (returns `int`, `-1` if EOF)

```java
try (FileInputStream fis = new FileInputStream("example.txt")) {
    int data;

    while ((data = fis.read()) != -1) {
        System.out.print((char) data); // Convert byte to char
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### `read(byte[])`

Reads into byte array

```java
try (FileInputStream fis = new FileInputStream("example.txt")) {
    byte[] buffer = new byte[1024]; // 1 KB buffer
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
        String content = new String(buffer, 0, bytesRead);
        System.out.print(content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### `available()`

Returns number of bytes that can be read

```java
try (FileInputStream fis = new FileInputStream("example.txt")) {
    int availableBytes = fis.available();
    System.out.println("Bytes available: " + availableBytes);
} catch (IOException e) {
    e.printStackTrace();
}
```

### `close()`

Closes the stream

```java
try {
    fis = new FileInputStream("example.txt");
    // Do something
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (fis != null) fis.close(); // Important to close stream
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```
