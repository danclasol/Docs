# Javascript Engine

Se encarga de convertir código escrito en lenguaje Javascript en código ejecutable por la máquina en la que va a correr.

Cada navegador tiene su propio motor para compilar e interpretar JavaScript:

- `V8 Engine`: usado navegadores basados en Chromium (Chrome, Microsoft Edge, Opera)
- `SpiderMonkey` : Mozilla Firefox
- `JavaScriptCore`: usado en navegadores basados en Webkit (Safari).
- `Carakan`: (versiones antiguas de Opera).
- `Chakra`: intérprete de JScript (Internet Explorer).

El motor V8 tambien es posible usarlos fuera de los navegadores para otras tareas, como en:

- Node.js
- Deno

# Components

## Call stack

Donde se introduce la pila de tareas síncronas que se van a ejecutar.

Es una LIFO (_Last In - First Out_)

## Memory Heap

Espacio de memoria para objetos.

## API Node

En Javascript solo ejecuta un hilo, una sola pila de llamdas (Call Stack) y un Memory Heap. Por lo que es necesario user la API de Node, para poder manejar tareas asincronas.

Estas tareas no se ejecutan en el call stack, si no que se ejecutan de forma independiente, ya que provocarian un bloqueo indefinido en la pila.

Ej: Tareas del SO, Timers, promises, filesystem, worker threads...

## Callback queue

Para tareas que requieren mas tiempo de procesamiento o que tardan en devolver una respuesta, usamos callbacks, que serán ejecutadas cuando finalmente obtengamos el resultado de una operación asyncrona.

Los callbacks se van encolando en lo que llamamos _Callback Queue_ en espera a ser pasados a la pila de ejecución.

Se trata de una cola FIFO (_First In - First Out_)

Existen 2 colas para los callbacks:

- Una para las tasks
- Una para las microtasks

## Event loop

El _Event Loop_ es un observador que se encarga de escuchar si hay tareas pendientes en el _Callback Queue_ y las añade al _Call Stack_ cuando este se vacía.

# Execution process order

1. Analisis del código:

   - Se analiza todo el código.
   - Se crean las referencias necesarias en el _Memory Heap_.
     - Referencias variables, funciones, etc

2. Ejecución del código:

   - Se ejecuta línea a línea el código.
   - La parte sincrona se agrega al _Call Stack_
   - La parte asincrona se agrega a la API de Node.

3. Se ejecuta lo que haya en el _Call Stack_
   - Se ejecuta toda la parte sincrona.
   - Se ejecuta en orden de llegada (FIFO)

Una vez ejecutado todo lo sincrono, entra en accion el _event loop_.
En cada vuelta del _event loop_ revisará que tareas puede añadir al _Call Stack_:

1. Macrotask: Si existen tareas
   - Se añade solo 1 tarea de esta cola al _Call Stack_
   - Se ejecuta la tarea añadida al _Call Stack_
   - Necesitará tantas ciclos de event loop como tareas existan
2. Microtasking: Si existen tareas
   - Se añaden 1 a 1 todas las tareas al _Call Stack_
   - Se ejecutan en orden hasta vaciar la cola.

# Blocking Event Loop

Es buena práctica, cuando realizamos tareas sincronas no realizar tareas demasiado pesadas que consuman mucho tiempo, para evitar bloquear el event loop.
