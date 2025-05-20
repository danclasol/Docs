# BufferedOutputStream

A wrapper around `OutputStream` (e.g. `FileOutputStream`) that uses a buffer to write data more efficiently.

- reduces the number of disk I/O operations by storing data in memory and writing it in larger chunks
- useful when writing many small pieces of data

## Methods

### `write(int b)`

Writes one byte

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("byte.txt"))) {
    bos.write(65); // Writes ASCII 'A'
} catch (IOException e) {
    e.printStackTrace();
}
```

### `write(byte[] b)`

Writes an entire byte array

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("array.txt"))) {
    byte[] data = "Hello, buffered world!".getBytes();
    bos.write(data);
} catch (IOException e) {
    e.printStackTrace();
}
```

### `write(byte[], off, len)`

Writes part of a byte array

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("partial.txt"))) {
    byte[] data = "BufferedOutputStream".getBytes();
    bos.write(data, 8, 6); // Writes "Output"
} catch (IOException e) {
    e.printStackTrace();
}
```

### `flush()`

Forces data from buffer to file

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("flush.txt"))) {
    bos.write("This might still be in buffer.".getBytes());
    bos.flush(); // Forces data to file now
} catch (IOException e) {
    e.printStackTrace();
}
```

### `close()`

Flushes and closes stream

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("close.txt"))) {
    bos.write("Closed and flushed.".getBytes());
} catch (IOException e) {
    e.printStackTrace();
}
```
