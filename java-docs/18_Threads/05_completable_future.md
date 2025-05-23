# Completable Future

`CompletableFuture<T>` is a class in that represents a future result of an asynchronous computation.

- belong to package `java.util.concurrent`
- implement since Java 8

Unlike a regular `Future`, it allows:

- non-blocking programming
- chaining multiple tasks
- handling exceptions
- composing dependent futures

## Methods

### `thenApply(fn)`

Transforms result and returns a new value

```java
CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> 10);
future = future.thenApply(x -> x * 2);
System.out.println(future.join());  // Output: 20
```

### `thenAccept(consumer)`

Consumes result, returns nothing

```java
CompletableFuture.supplyAsync(() -> "Hello")
    .thenAccept(result -> System.out.println("Result: " + result));
```

### `thenRun(runnable)`

Runs next task, no input/output

```java
CompletableFuture.supplyAsync(() -> "Finished!")
    .thenRun(() -> System.out.println("Task complete!"));
```

### `thenCombine()`

Combine results of two futures

```java
CompletableFuture<Integer> f1 = CompletableFuture.supplyAsync(() -> 2);
CompletableFuture<Integer> f2 = CompletableFuture.supplyAsync(() -> 3);

CompletableFuture<Integer> combined = f1.thenCombine(f2, (a, b) -> a + b);
System.out.println("Sum: " + combined.join());  // Output: 5
```

### `anyOf()`

Wait for the first to complete

```java
CompletableFuture<Object> any = CompletableFuture.anyOf(
    CompletableFuture.supplyAsync(() -> {
        Thread.sleep(300);
        return "First";
    }),
    CompletableFuture.supplyAsync(() -> {
        Thread.sleep(500);
        return "Second";
    })
);

System.out.println("First result: " + any.join());
```

### `exceptionally()`

Handle exceptions with fallback

```java
CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
    if (true) throw new RuntimeException("Error!");
    return 42;
});

future = future.exceptionally(ex -> {
    System.out.println("Caught: " + ex.getMessage());
    return -1;
});

System.out.println("Result: " + future.join());  // Output: -1
```

### `handle()`

Handle both result and exception

```java
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    throw new RuntimeException("Oops!");
});

future = future.handle((result, ex) -> {
    if (ex != null) return "Recovered from error";
    else return result;
});

System.out.println(future.join());  // Output: Recovered from error
```

### `complete()`

Manually completes a future

```java
CompletableFuture<String> future = new CompletableFuture<>();
future.complete("Manual result");

System.out.println(future.join());  // Output: Manual result
```

### `cancel()`

Cancels the future

```java
CompletableFuture<String> future = new CompletableFuture<>();
future.cancel(true);

System.out.println("Cancelled? " + future.isCancelled());  // true
```

### `obtrudeValue()`

Forcefully overwrite result

```java
CompletableFuture<String> future = new CompletableFuture<>();
future.obtrudeValue("Forced value");

System.out.println(future.join());  // Output: Forced value
```

### `orTimeout()`

Fail if not completed in time

```java
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    Thread.sleep(3000);  // Long task
    return "Done";
}).orTimeout(1, TimeUnit.SECONDS);

try {
    System.out.println(future.join());
} catch (Exception e) {
    System.out.println("Timed out!");
}
```

### `completeOnTimeout()`

Complete with fallback if slow

```java
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    Thread.sleep(3000);  // Slow task
    return "Actual result";
}).completeOnTimeout("Timeout fallback", 1, TimeUnit.SECONDS);

System.out.println(future.join());  // Output: Timeout fallback
```
