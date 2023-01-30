# fetch

Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose

Esta función funciona con promesas, por lo que deberemos esperar por la respuesta

## Funcionamiento

La petición funciona de la siguiente manera:

- Al método `fetch` se le pasa un objeto con la petición del recurso.
- Este método devuelve una promesa por lo que deberemos hacer uso del `then()` para obtener el resultado de la petición.

```js
fetch(request).then(response);
```

# Request

Cuando usamos el metodo `fetch`, se crea el objeto `request`, que representa la petición que queremos realizar.

Aunque tambien podemos crearlo explicitamente pasandole la ruta del recurso que queremos obtener.

```js
const peticion = new Request(url, options);
```

## Options Object

El objeto opcional `options` puede contener lo siguiente:

- `method`: método HTTP de la petición. Por defecto, GET.
- `body`: cuerpo de la petición. Puede ser de varios tipos: String, FormData, Blob, etc
- `headers`: cabeceras HTTP. Por defecto, {}.
- `credentials`: Modo de credenciales. Por defecto, omit. Otras opciones: same-origin e include.

```js
const peticion = new Request("./archivo.json");

fetch(peticion)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Podemos establecer los headers necesarios al objeto `request`.

```js
fetch(peticion, {
  headers: new Headers({ "Content-Type": "application/json" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Properties

Podemos acceder a las siguientes propiedades del objeto `request`

- `url`: contiene la url de la petición
- `method`: contiene el método de la petición (GET,POST,PATCH, etc)
- `headers`: contiene las cabeceras de la petición
- `refererrer`: contiene la página o recurso desde la que se realiza la petición.
- `cache`: tipo de cache de la petición (default, reload, no-cache, etc)

## Headers

Represents response/request headers, allowing you to query them and take different actions depending on the results.

For security reasons, some headers can only be controlled by the user agent.

### Methods

Podemos utilizar los siguientes métodos para trabajar con el objeto `Header`.

#### `has(name)`

Comprueba si la cabecera name está definida.

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // Returns true
myHeaders.has("Accept-Encoding"); // Returns false
```

#### `get(name)`

Obtiene el valor de la cabecera name.

```js
myHeaders.get("Content-Type");
```

#### `set(name, value))`

Establece o modifica el valor value a la cabecera name.

```js
headers.set("Content-Type", "application/json");
headers.set("Content-Encoding", "br");
```

#### `append(name, value)`

Añade un nuevo valor value a la cabecera name.

```js
myHeaders.append("Content-Type", "text/xml");
```

#### `delete(name)`

Elimina la cabecera name.

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.delete("Content-Type");
myHeaders.get("Content-Type"); // Returns null, as it has been deleted
```

#### `entries()`

Returns an iterator allowing to go through all key/value pairs contained in this object.

```js
for ([key, value] of headers.entries()) {
  console.log("Key: ", key, "value: ", value);
}
```

#### `keys()`

Returns an iterator allowing you to go through all keys of the key/value pairs contained in this object.

```js
for (key of headers.keys()) {
  console.log("key:", key);
}
```

#### `values()`

Returns an iterator allowing you to go through all values of the key/value pairs contained in this object.

```js
for (value of headers.values()) {
  console.log("value:", value);
}
```

#### `forEach()`

Executes a provided function once for each key/value pair in this Headers object.

```js
headers.forEach(console.log);
```

# Response

El objeto `response` contiene el resultado de la respuesta que nos llega del servidor web.

Cuenta con las siguientes propiedades:

- `status`: codigo error HTTP de la respuesta
- `statusText`: texto representativo del codigo de error HTTP
- `ok`: devuelve `true` si el código HTTP es 200 (o empieza por 2)
- `headers`: contiene cabeceras de la respuesta
- `url`: URL de la petición HTTP

## Methods

La instancia `response` tiene los siguientes métodos para poder acceder al `body` dependiendo del tipo de datos (texto, JSON, blob, etc).

Devuelven a su vez una promesa con los datos transformados.

### `text()`

Se utiliza cuando queremos leer un archivo de texto. Devuelve una promesa con el texto plano de la respuesta.

Siempre se codifica en UTF-8.

```js
fetch("/text.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));
```

### `json()`

Se utiliza cuando queremos leer un fichero JSON. Convierte los archivos json en un objeto de JavaScript.

Equivalente a usar `JSON.parse()`.

```js
fetch("/file.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

### `array​Buffer()`

Para archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.

```js
fetch("/image.jpg")
  .then((response) => response.array​Buffer())
  .then((data) => {
    console.log(data);
  });
```

### `blob()`

Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente

```js
fetch("www.example.com/blob")
  .then((response) => response.blob())
  .then((data) => {
    console.log(data);
  });
```

### `form​Data()`

Se utiliza para leer los objetos `formData`.

```js
fetch("www.example.com/formData")
  .then((response) => response.form​Data())
  .then((data) => {
    console.log(data);
  });
```

### `clone()`

Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.

```js
fetch("/files/texto.txt").then((response) => {
  const response2 = response.clone();

  response.text().then((data) => {
    console.log("1-", data);
  });

  response2.text().then((data) => {
    console.log("2-", data);
  });
});
```
