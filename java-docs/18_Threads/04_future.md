# Future

Future is an interface that represents the result of an asynchronous computation, a task that may not have completed yet.

- belong to package `java.util.concurrent`
- introduced in Java 5
- run a task in a separate thread
- use with ExecutorService to get results later

## Methods

## `get()`

Waits if necessary for the result.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

Future<String> future = executor.submit(() -> {
    Thread.sleep(1000);
    return "Result after delay";
});

System.out.println("Waiting for result...");
String result = future.get();  // Blocks until task completes
System.out.println("Got: " + result);

executor.shutdown();
```

## `get(timeout, unit)`

Waits for result for the given time.

```java
Future<String> future = Executors.newSingleThreadExecutor().submit(() -> {
    Thread.sleep(2000);
    return "Late result";
});

try {
    String result = future.get(1, TimeUnit.SECONDS);  // Only wait 1 second
    System.out.println("Got: " + result);
} catch (TimeoutException e) {
    System.out.println("Timeout: Task took too long");
}
```

## `cancel(true/false)`

Attempts to cancel the task.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

Future<?> future = executor.submit(() -> {
    while (true) {
        System.out.println("Working...");
        Thread.sleep(200);
    }
});

Thread.sleep(500);
boolean cancelled = future.cancel(true);  // Attempt to interrupt
System.out.println("Cancelled: " + cancelled);

executor.shutdownNow();
```

## `isDone()`

Check if the task is finished.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

Future<String> future = executor.submit(() -> {
    Thread.sleep(500);
    return "Done!";
});

System.out.println("Is done? " + future.isDone());
Thread.sleep(600);
System.out.println("Is done now? " + future.isDone());

executor.shutdown();
```

## `isCancelled()`

Check if the task was cancelled.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

Future<?> future = executor.submit(() -> {
    Thread.sleep(1000);
    return null;
});

future.cancel(true);

System.out.println("Was cancelled? " + future.isCancelled());

executor.shutdown();
```
