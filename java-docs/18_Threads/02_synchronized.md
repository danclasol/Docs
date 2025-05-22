# sinchronized

The synchronized keyword in Java is used to control access to critical sections of code when multiple threads are involved.

- ensures only one thread at a time can execute a block or method
- prevents race conditions when multiple threads read/write shared data

## Syncronized Method

Only one thread can execute the method on the same object at a time.

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}
```

## Synchronized Block

You can synchronize only the critical part of the code, using any object as a lock.

```java
class Counter {
    private int count = 0;
    private final Object lock = new Object();

    public void increment() {
        synchronized (lock) {
            count++;
        }
    }

    public int getCount() {
        synchronized (lock) {
            return count;
        }
    }
}
```

## Static Synchronized Method

Locks on the class, not the instance.

- useful for class-level data shared across all instances

```java
class Counter {
    private static int count = 0;

    public static synchronized void increment() {
        count++;
    }
}
```
