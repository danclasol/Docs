# FileOutputStream

Used to write raw bytes to a file (binary or text in byte format).

- can overwrite or append to a file
- belong to `java.io` package
- not ideal for writing characters directly (use `OutputStreamWriter` for that)
- for better performance when writing many small pieces: wrap with `BufferedOutputStream`

## Constructors

Creates or overwrites file

```java
new FileOutputStream(String filename);
new FileOutputStream(File file);
new FileOutputStream(FileDescriptor fd);
```

Appends if file exists

```java
new FileOutputStream(String filename, true);
```

## Methods

### `write(int b)`

Writes a single byte

```java
try (FileOutputStream fos = new FileOutputStream("single_byte.txt")) {
    fos.write(65); // Writes ASCII 'A'
} catch (IOException e) {
    e.printStackTrace();
}
```

### `write(byte[] b)`

Writes all bytes in array

```java
try (FileOutputStream fos = new FileOutputStream("byte_array.txt")) {
    byte[] data = "Hello, world!".getBytes();
    fos.write(data);
} catch (IOException e) {
    e.printStackTrace();
}
```

### `write(byte[], off, len)`

Writes a portion of byte array

```java
try (FileOutputStream fos = new FileOutputStream("partial_array.txt")) {
    byte[] data = "Hello, world!".getBytes();
    fos.write(data, 7, 5); // Writes "world"
} catch (IOException e) {
    e.printStackTrace();
}
```

### `flush()`

Forces write (mainly for buffers)

```java
try (FileOutputStream fos = new FileOutputStream("flush.txt")) {
    fos.write("Buffered write".getBytes());
    fos.flush(); // Ensures data is written now
} catch (IOException e) {
    e.printStackTrace();
}
```

### `close()`

Closes the stream

```java
try (FileOutputStream fos = new FileOutputStream("close.txt")) {
    fos.write("Will be closed automatically.".getBytes());
} catch (IOException e) {
    e.printStackTrace();
}
```
