# Synchronous

Synchronous code is also called “blocking” as it halts the program until all the resources are available.

## Advantages

- Easier to understand
- Behavior more predictable
- Better performance, faster

## Disadvantages

- Less escalable, we can't do two task at the same time
- Less eficient, the blocked tasks waste resources
- Can provoce blocks

# Asynchronous

Asynchronous code is also known as _non-blocking_. The program continues executing and doesn’t wait for external resources (I/O) to be available.

Su ejecución es posible debido al `event loop`.

## Advantages

- Allow parallel executions
- Independent execution
- Good for unpredictable tasks

## Disadvantages

- More complex
- More latency, can take more time than synchronous tasks

# Javascript vs Node.js

## Javascript

- Javascript es síncrono.
- Most Javascript API are synchronous.

## Node.js

- Node.js es asíncrono
- Utiliza el motor V8 de JS, que convierte el código JS en lenguaje máquina que puede ser interpretado por el CPU.
