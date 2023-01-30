# XMLHttpRequest (XHR)

Es un objeto JavaScript que fue diseñado por Microsoft y adoptado por Mozilla, Apple y Google. Actualmente es un estándar de la W3C.

Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. XMLHttpRequest es ampliamente usado en la programación AJAX.

Actualmente, es recomendable usar la API fetch, mas moderna y cómoda.

# Propiedades objeto XMLHttpRequest

Al crear un objeto XMLHttpRequest tenemos acceso a una serie de propiedades que forman parte de nuestra instancia.

## responseType

Define el tipo de respuesta de `response`:

- JSON, blob, etc.
- text (Por defecto)

## response

Contenido parseado automáticamente basado en `responseType`.

## responseText

Respuesta de la petición como texto plano o si no se ha recibido.

## responseURL

URL de la petición HTTP a realizar.

## readyState

Número que indica en que estado se encuentra la petición (ver más adelante).

## timeout

Milisegundos permitidos para realizar la petición HTTP.

Por defecto, 0 (sin límite).

## status

Código de error HTTP de respuesta de la petición.

## statusText

Texto con el código de error de respuesta, legible para humanos.

## withCredentials

Indica si la petición HTTP se está realizando con credenciales.

# Métodos de XMLHttpRequest

## setRequestHeader(n, v)

Permite añadir la cabecera n con el valor v a la petición HTTP.

## getAllResponseHeaders()

Obtiene todas las cabeceras HTTP de la respuesta de la petición.

## getResponseHeader(name)

Obtiene una cabecera HTTP concreta de la respuesta de la petición.

## overrideMimeType(mimetype)

Permite modificar el MIME (tipo de fichero) de la petición.

## open(method, url)

Permite preparar una petición HTTP.

## send()

Envía la petición previamente preparada con .open().

## send(body)

Idem a la anterior, enviando datos en la petición.

## abort()

Cancela la petición enviada.

# Eventos

## onabort

Se dispara cuando una petición es cancelada.

## onload

Se dispara cuando una petición se ha completado correctamente.

## onloadstart

Se dispara cuando una petición comienza a cargar datos.

## onloadend

Se dispara cuando una petición termina (con error o sin ellos).

## onerror

Se dispara cuando una petición sufre un error.

## ontimeout

Se dispara cuando una petición agota el tiempo máximo.

## onprogress

Se dispara (varias veces) cuando una petición recibe datos.

## onreadystatechange

Se dispara cuando el valor .readyState cambia.

# Ciclo readyState

# Example

## Creamos la instancia del objeto XHR

```js
const xhr = new XMLHttpRequest();
```

## Preparar la peticion

Con `open()` solo preparamos la peticion, posteriormente tendremos que enviarla con `send()`

```js
xhr.open("GET", "/robots.txt");
```

## Enviar peticion

Realiza la petición al servidor.

```js
xhr.send();
```

## Consultar propiedad que almacena el contenido

```js
console.log(client.responseText);
```
