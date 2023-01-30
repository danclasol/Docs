# HTTP headers

Permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta.

Aportarn gran flexibilidad al protocolo permitiendo añadir nuevas funcionalidades sin tener que cambiar la base. Por eso según han ido sucediendo las versiones de HTTP se han ido añadiendo más y más cabeceras permitidas.

# HTTP Request

## Host

Specifies the host and port number of the server to which the request is being sent.

```js
Host: developer.mozilla.org;
```

## User-Agent

El User-Agent contiene información como el nombre y versión del navegador y del sistema operativo y el idioma por defecto.

```js
User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
```

## Accept-Language

Este header muestra el lenguaje por defecto del usuario. Si el sitio web tiene diferentes versiones por idiomas, puede redireccionar al usuario.

```js
Accept-Language: en-US, en;q=0.5
```

## Accept-Encoding

Formatos de codificación que soporta el navegador. El servidor web puede enviar el HTML resultante en un formato comprimido, lo que ahorra hasta un 80% de bandwidth y tiempo de carga.

```js
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the quality value syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## If-Modified-Since

Si no se ha modificado el resource desde esa fecha, el servidor devolverá un código de respuesta 304 Not Modified, sin contenido, ya que el navegador cargará el contenido de la caché.

```js
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Cookie

Envía las cookies guardadas en el navegador para ese dominio.

```js
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Referer

Contiene la url de referencia. Si un usuario hace click en un enlace, en la página de destino aparecerá como referer la anterior.

```js
Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Authorization

Cuando un sitio web solicita autorización, el navegador abre una ventana de login. Cuando insertas los datos de entrada, el navegador envía otro request, pero esta vez contiene:

```js
Authorization: <auth-scheme> <authorization-parameters>
```

# HTTP Request

## Cache-Control

Campo usado para especificar las directivas que se deben cumplir por los mecanismos de caché durante la cadena request/response. Estos mecanismos de caché incluyen gateways y proxies que el ISP puede estar utilizando.

## Content-Type

Indica el mime-type del documento. El navegador decide entonces como interpretar los contenidos.

```js
Content-Type: text/html; charset=UTF-8
```

## Content-Disposition

Este header indica al navegador que abra una caja de descarga de archivos, en lugar de analizar el contenido.

```js
Content-Disposition: attachment; filename="descargar.zip"
```

## Content-Length

Cuando el contenido se va a enviar al navegador, el servidor puede indicar el tamaño en bytes:

Esto es especialmente útil para la descarga de archivos, así el navegador puede calcular el progreso de la descarga.

```js
Content-Length: 123245
```

## Set-Cookie

Cuando un sitio web quiere establecer o actualizar una cookie en tu navegador, utilizará este header.

Cada cookie se envía en un header separado. En PHP las cookies se establecen con la función setcookie().

```js
Set-Cookie: skin=noskin; path=/; domain=.amazon.com; expires=Sun, 21-Nov-2015 14:22:22 GMT
Set-Cookie: session-id=820-1736418-8162394; path=/; domain=.amazon.
```

## WWW-Authenticate

Un sitio web puede enviar este header para identificar al usuario a través de HTTP. Cuando el navegador ve este header, abrirá una ventana de login.

```js
**WWW-Authenticate**: Basic realm="Restricted Area"
```

## Content-Encoding

Header enviado cuando el contenido está comprimido.

```js
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```
