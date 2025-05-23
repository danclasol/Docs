# ExecutorService

ExecutorService is a Java interface that represents a thread pool, a way to manage and control multiple threads efficiently.

Instead of creating and managing threads manually (which can be error-prone and costly), you submit tasks to an executor, and it handles:

- scheduling tasks to run concurrently
- using threads to improve performance
- managing lifecycle (starting, shutting down threads)
- handling results (via Future when using Callable)

## Creating thread pool

Create one thread only

```java
ExecutorService executor = Executors.newSingleThreadExecutor();
```

Create thread pool of 5 threads

```java
ExecutorService executor = Executors.newFixedThreadPool(5);
```

Dynamic thread pool (grows/shrinks)

```java
ExecutorService executor = Executors.newCachedThreadPool();
```

## Methods

### `submit(Runnable)`

Submit a Runnable task for execution (no result).

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

executor.submit(() -> System.out.println("Runnable is running!"));

executor.shutdown();
```

### `submit(Callable<V>)`

Submit a Callable task for execution, returns a `Future<V>`.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

Callable<String> task = () -> "Result from Callable";
Future<String> future = executor.submit(task);

System.out.println("Callable returned: " + future.get());  // Output: Result from Callable

executor.shutdown();
```

### `shutdown()`

Tells the executor to stop accepting new tasks, but finishes existing ones.

```java
ExecutorService executor = Executors.newFixedThreadPool(2);

executor.submit(() -> System.out.println("Task 1"));
executor.submit(() -> System.out.println("Task 2"));

executor.shutdown(); // No new tasks can be submitted after this
```

### `shutdownNow()`

Attempts to stop all running tasks immediately.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

executor.submit(() -> {
    while (true) {
        System.out.println("Running...");
        Thread.sleep(100);
    }
});

Thread.sleep(300);
executor.shutdownNow();  // Attempts to interrupt the task
```

### `awaitTermination()`

Blocks until all tasks have completed after shutdown.

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

executor.submit(() -> {
    Thread.sleep(500);
    System.out.println("Finished");
});

executor.shutdown();

if (executor.awaitTermination(1, TimeUnit.SECONDS)) {
    System.out.println("All tasks finished");
} else {
    System.out.println("Timeout: Some tasks still running");
}
```

### `invokeAll()`

Runs multiple Callable tasks and waits for all of them to complete.

```java
ExecutorService executor = Executors.newFixedThreadPool(3);

List<Callable<String>> tasks = List.of(
    () -> "Task 1",
    () -> "Task 2",
    () -> "Task 3"
);

List<Future<String>> results = executor.invokeAll(tasks);

for (Future<String> future : results) {
    System.out.println("Result: " + future.get());
}

executor.shutdown();
```
