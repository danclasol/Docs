# URL

Cuando tenemos que trabajar con una dirección web (URL) en Javascript, lo más habitual es utilizar un tipo de dato donde almacenamos dicha URL. En la mayoría de los casos, esto suele ser suficiente. Sin embargo, si necesitamos hacer ciertas operaciones con la URL donde tengamos que modificar o acceder a ciertas partes específicas de la URL, se podría complicar un poco.

```js
url = new URL(url, [base]);
```

- url: representa una URL absoluta o relativa.
- base: representa la base a usar en caso de que la url sea relativa.

```js
const url = new URL("https://developer.mozilla.org");
const url = new URL("/en-US/docs", "https://developer.mozilla.org");
```

# Properties

## protocol

Protocolo de comunicación usado.

- `http://` protocolo de acceso
- `https://` añade una capa de seguridad adicional donde los datos van cifrados
- `ftp://` para servidores de archivos

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol"
);
console.log(url.protocol); // Logs "https:"
```

## username y password

Generalmente, al acceder a una web no se suele proporcionar el usuario y contraseña, pero es posible hacerlo directamente desde la URL.

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username"
);
console.log(url.username); // Logs "anonymous"
console.log(url.pasword); // Logs "flabada"
```

### hostname

Dominio completo (subdominio + dominio).

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname"
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## host

Dominio completo + puerto.

```js
let url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
```

## origin

Origen (Protocolo + host)

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // Logs 'https://mozilla.org'
```

## port

El puerto es un número (del 1 al 65535) que se debe indicar precedido del símbol `:`, justo al final del dominio

En el caso de que no se indique explícitamente un número de puerto, se utilizará el puerto por defecto y no mostrará en la URL, que es el caso más habitual.

```js
const url = new URL("https://mydomain.com:80/svn/Repos/");
console.log(url.port); // Logs '80'
```

## pathname

Ruta completa (ruta + documento)

La ruta de una URL es la estructura de carpetas a la que vamos a acceder para descargar la página.

Por defecto, si no se le indica una página o documento explícitamente, se suele buscar la página index.html o index.htm, aunque depende de la configuración.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value"
);
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

## hash

Si lo que se ha cargado es un documento HTML, podemos terminar la URL con lo que se denomina un ancla HTML (anchor), que es un texto precedido del símbolo #.

El navegador buscará en el documento HTML un elemento con el id mencionado, y posicionará el navegador justo en esa parte.

Se suele utilizar para crear accesos directos a secciones de la página.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples"
);
console.log(url.hash); // Logs: '#Examples'
```

## href

Esta propiedad devuelve la URL completa.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href"
);
console.log(url.href); // Logs: 'https://developer.mozilla.org/en-US/docs/Web/API/URL/href'
```

##

# Métodos

## URL.createObjectURL()

Creates a string containing a URL representing the object given in the parameter.

For example, can be use to set the image's source to create the blob URL.

```js
const file; // get file
const img = document.createElement("img");

img.src = URL.createObjectURL(file);
img.height = 60;
img.onload = () => {
  URL.revokeObjectURL(img.src);
};
li.appendChild(img);
```

## URL.revokeObjectURL()

Releases an existing object URL which was previously created by calling URL.createObjectURL().

```js
revokeObjectURL(objectURL);
```

# Query String

Las Query Strings (QS) son una lista de variables que se pueden añadir a una URL.

```js
https://www.example.es/users?id=12345&name=Peter
```

Construir a mano estas variables en un puede ser muy tedioso (hay que comprobar si es ? o &), por lo que podemos hacer uso de URLSearchParams para ello.

## search

Parte de la URL con las variables (query strings). ?color=red&sound=enabled

## searchParams

Crea un objeto para gestionar la lista de variables cómodamente.

## URLSearchParams

El objeto `URLSearchParams` nos permite tener a nuestra disposición una forma cómoda de gestionar las variables de la URL, y no sólo acceder a ellas, sino modificarlas de varias formas.

```js
const url = "https://dev.example.es/path/?color=red&sound=enabled";
url.search; // "?color=red&sound=enabled"

const params = new URLSearchParams("?color=red&sound=enabled");
url.searchParams.toString(); // "?color=red&sound=enabled"
```

### append(name, value)

Añade una variable a la URL.

```js
searchParams.append("topic", "webdev");
```

### set(name)

Sobreescribe (o Añade si no existe) una variable en la URL.

```js
searchParams.set("topic", "More webdev");
```

### delete(name)

Elimina una variable de la URL.

```js
searchParams.delete("topic");
```

### sort()

Reordena las variables de la URL (por defecto, orden alfabético).

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

searchParams.sort();
console.log(searchParams.toString()); // a=2&a=1&b=3&c=4
```

### has(name)

Comprueba si existe la variable en la URL.

```js
searchParams.has("topic") === true; // true
```

### get(name)

Obtiene el valor de la variable indicada.

```js
searchParams.get("topic") === "api"; // true
```

### getAll(name)

Obtiene una lista de valores de la variable indicada.

```js
searchParams.getAll("topic"); // ["api"]
```

### entries()

Devuelve un array de arrays con las variables de la URL.

```js
[...url.searchParams.entries()]; // [["color", "red"], ["sound", "enabled"]]
```

### keys()

Devuelve un array con los nombres de las variables de la URL.

```js
[...url.searchParams.keys()]; // ["color", "sound"]
```

### values()

Devuelve un array con los valores de las variables de la URL.

```js
[...url.searchParams.values()]; // ["red", "enabled"]
```

### forEach()

Recorre la lista de variables mediante un bucle. Ver forEach()

```js
const url = new URL("https://sub.manz.dev/path/?color=red&sound=enabled");

url.searchParams.forEach((value, name) => {
  console.log(`La variable ${name} tiene el valor ${value}`);
});
```
