# Callable

`Callable<V>` is a task interface that defines a unit of work that returns a result of type `V` and can throw exceptions.

- perform background calculations
- runnig I/O tasks
- executing database queries asynchronously
- running concurrent API calls and combine results

## Syntax

- `V` is the type of result returned by the task
- `call()` method contains the logic to be executed
  - returns a value of type `V`
  - can thorw checked exceptions

```java
public class MyCallable implements Callable<String> {
    @Override
    public String call() throws Exception {
        Thread.sleep(500);
        return "Callable result";
    }
}
```

## Example

- create an ExecutorService (thread pool)
- submit the Callable to the executor
- use Future to get a return value of the Callable task

```java
public class Main {
    public static void main(String[] args) throws Exception {
        // 1. Create an ExecutorService (thread pool)
        ExecutorService executor = Executors.newSingleThreadExecutor();

        // 2. Create a Callable task
        Callable<String> callableTask = () -> {
            Thread.sleep(1000);  // Simulate long-running task
            return "Task completed!";
        };

        // 3. Submit the Callable to the executor and get a Future
        Future<String> future = executor.submit(callableTask);

        System.out.println("Doing other work while waiting...");

        // 4. Use Future to get the result (blocking call)
        String result = future.get();  // Waits if necessary
        System.out.println("Result from Callable: " + result);

        // 5. Shutdown the executor
        executor.shutdown();
    }
}
```
