# BufferedInputStream

BufferedInputStream class is used to read binary data more efficiently, by wrapping a lower-level stream like FileInputStream.

### Differences with FileOutputStream

- data is written to an internal memory buffer first, and written to the file in larger, efficient chunks
- faster for many small writes
- you must call flush() or close() to ensure data is actually written to the file

## Method

### `read()`

Reads one byte at a time

```java
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("example.txt"))) {
    int byteData;
    while ((byteData = bis.read()) != -1) {
        System.out.print((char) byteData); // Cast to char for text
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### `read(byte[] buffer)`

Reads into a byte array (faster)

```java
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("example.txt"))) {
    byte[] buffer = new byte[1024];
    int bytesRead;

    while ((bytesRead = bis.read(buffer)) != -1) {
        System.out.print(new String(buffer, 0, bytesRead));
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### `read(byte[], off, len)`

Reads into a specific portion of buffer

```java
 try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("example.txt"))) {
    byte[] buffer = new byte[100];
    int bytesRead = bis.read(buffer, 10, 20); // read 20 bytes into buffer[10..29]

    if (bytesRead != -1) {
        System.out.println(new String(buffer, 10, bytesRead));
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### `available()`

Returns estimated available bytes

```java
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("example.txt"))) {
    int available = bis.available();
    System.out.println("Available bytes: " + available);
} catch (IOException e) {
    e.printStackTrace();
}
```

### `mark(int)` and `reset()`

Save and return to a specific read position

```java
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("example.txt"))) {
    if (bis.markSupported()) {
        bis.mark(100); // mark current position with a read-ahead limit of 100 bytes

        byte[] firstRead = new byte[10];
        bis.read(firstRead);
        System.out.println("First read: " + new String(firstRead));

        bis.reset(); // return to marked position

        byte[] secondRead = new byte[10];
        bis.read(secondRead);
        System.out.println("Second read (after reset): " + new String(secondRead));
    }
} catch (IOException e) {
    e.printStackTrace();
}
```
