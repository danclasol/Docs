# Node.js

Entorno de ejecución de Javascript permite ejecutar código Javascript e interacturar con el sistema operativo desde fuera del navegador.

Es multiplataforma y de código abierto.

Puede ejecutarse en Windows, Linux, Unix, macOS y mas.

## Herramientas

- Motor V8 (mismo que Google Chrome)
- Utilidades que nos permiten:
  - Ejecutar codigo asincrono
  - Interactuar con el sistema de archivos del SO
  - Comunicacion con otras maquinas mediente protocolos (ej: http)

## Caracteristicas

- Single thread (aunque podemos hacer multi thread con LIBUV)
- No bloqueante (aunque podemos hacer un proceso bloqueante por código)
- Orientado a eventos

# Diferencia respecto al frontend

Las aplicaciones de servidor que podemos desarrolladar con Node.js difieren de las aplicaciones de cliente en lo siguiente:

- En ambos ejecutamos código Javascript.
- En frontend disponemos de funcionalidades del navegador. (localStorage, window, etc)
- En backend disponemos de funcionalidades del SO.
- Código puede ser compatible pero contexto diferente. (console.log)
