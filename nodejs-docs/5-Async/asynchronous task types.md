# Asynchornous Task Types

## Tasks (macrotasks)

- Tareas asíncronas principales.

- Solo se ejecuta un callback en cada ciclo del event loop.

- Ej: setTimeout, setInterval, setImmediate, eventListeners

## Microtasks

- Tareas secundarias

- Todos los callbacks que estén en cola se ejecutan en un mismo ciclo del event loop.

- Incluido con ECMAScript 2015

- Ej: Promises y process.nextTick
