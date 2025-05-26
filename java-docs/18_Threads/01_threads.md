# Threads

Java threads are a fundamental part of concurrent programming, allowing multiple parts of a program to run simultaneously.

### Thread Lifecycle

- new– thread is created
- runnable – thread is ready to run
- running – thread is executing
- blocked/waiting – thread is paused waiting for a resource or another thread
- terminated – thread has finished execution or was stopped

There are to ways to create threads in Java

- extending Thread class
- implementing Runnable interface
  - use when need to implement multiple interfaces
  - reusable and decoupled

## Thread class

Extending the Thread class

- `run()` method must be overriden

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}
```

Run thread

- calling `start()` method runs the main thread
- the method will be executed in a separated thread

```java
public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
    }
}
```

## Runnable Inteface

Implementing the Runnable interface

- must implement `run()`method

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread running: " + Thread.currentThread().getName());
    }
}
```

Run thread

- must be runned using a Thread
- cannot be done directly with the `start()` method
- the method will be executed in a separated thread

```java
public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
```

## Methods

### `start()`

Creates a new thread and executes `run()` in that thread.

- if you call t1.run(), it will run on the main thread, not a new one

```java
MyThread t1 = new MyThread();
t1.start();
```

### `Thread.sleep()`

Pauses the thread for a given number of milliseconds

```java
try {
    System.out.println("Sleeping for 2 seconds...");
    Thread.sleep(2000); // 2 seconds
    System.out.println("Woke up!");
} catch (InterruptedException e) {
    System.out.println("Thread interrupted.");
}
```

### `wait()`

Pause the thread and release the lock

- must be called from within a synchronized context

```java
try {
    System.out.println("Waiting...");
    wait();
} catch (InterruptedException e) {
    e.printStackTrace();
```

### `notify()`

Wake one waiting thread

- must be called from within a synchronized context

```java
synchronized (this) {
    System.out.println("Sending signal...");
    notify();
}
```

### `notifyAll()`

Wake all waiting threads

- must be called from within a synchronized context

```java
synchronized (this) {
    notifyAll();
}
```

### `join()`

Waits for another thread to finish.

```java
MyThread t = new MyThread();
t.start();
t.join(); // Waits for t to finish before continuing
```

### `isAlive()`

Checks if the thread is still running.

```java
MyThread t = new MyThread();

System.out.println("Before start: " + t.isAlive()); // false
t.start();
System.out.println("After start: " + t.isAlive()); // true
```
