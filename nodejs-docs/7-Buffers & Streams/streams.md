# Streams

Un _Stream_ es una colección de datos que no estan disponible de una sola vez, ya que se transmite fragmento a fragment (_chunks_).

Esto permite que al leer un fichero no sea necesario cargar en memoria el completo en memoria, ya que un stream procesa el fichero poco a poco.

## Permiten

- Leer grandes volumenes de datos procesandolo con pequeños chunks.
- Leer y escribir ficheros (archivos, imagenes, videos, etc)
- Comunicacion en red (sockets)
- Intercambio de informacion _end-to-end_ (protocolo HTTP)

## Ventajas

- Eficiencia en memoria: no es necesario cargar grandes cantidad de datos en memoria para empezar a procesar.
- Eficiencia en tiempo: menos tiempo para empezar a procesar los datos, ya que no hay que esperar que se carge todo el volumen de datos.

# Class Stream

Interfaz para manejaer `streams` de datos en _Node.js_.

Todas las instancias de Stream heredan de `EventEmitter`.

# Tipos de stream

- Readable: streams del cual podemos leer datos
- Writable: streams en el que podemos escribir datos
- Duplex: streams que son Readable y Writable
- Transform: streams que pueden modificar o transformar los datos a medida que se escriben o leen
