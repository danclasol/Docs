# Response

El objeto `Request` de Express, representa una respuesta HTTP.

Es una versión mejorada del propio objeto _response_ de Node, y admite todos las propiedades y metodos originales de este.

## Properties

### `res.headerSent`

Indica si ya se han enviado las cabeceras HTTP para la respuesta.

```js
app.get("/", function (req, res) {
  console.dir(res.headersSent); // false
  res.send("OK");
  console.dir(res.headersSent); // true
});
```

## Methods

### `res.status()`

Establece el _statusCode_ de la respuesta HTTP.

```js
res.status(403).end();
res.status(400).send("Bad Request");
res.status(404).sendFile("/absolute/path/to/404.png");
```

### `res.sendStatus()`

Establece el _statusCode_ de la respuesta HTTP y envia la respuesta HTTP.

El contenido del _body_ será el mensaje del _statusCode_

```js
res.sendStatus(404);
```

### `res.send([body])`

Metodo que envia la respuesta a la peticion HTTP.

Se le puede pasar como _body_:

#### Buffer

```js
res.send(Buffer.from("whoop"));
```

#### String

```js
res.send("<p>some html</p>");
res.status(404).send("Sorry, we cannot find that!");
```

#### Object

```js
res.send({ some: "json" });
res.status(500).send({ error: "something blew up" });
```

#### Boolean

```js
res.send(true);
```

#### Array

```js
res.send([1, 2, 3]);
```

### res.json()

Metodo que envia la respuesta a la peticion HTTP y enviando lo que le pasamos como parametro transformado a un _JSON_.

Podemos pasarle cualquier tipo que se pueda transforma a JSON

```js
res.json(null);
res.json({ user: "tobi" });
res.status(500).json({ error: "message" });
```

### res.redirect([status,] path)

Redirecciona a una URL determinada con un _statusCode_ si se lo pasamos como parametro.

```js
res.redirect("/foo/bar");
res.redirect("http://example.com");
res.redirect(301, "http://example.com");
res.redirect("../login");
```

### res.sendFile()

Metodo que envia un archivo como respuesta a la peticion HTTP y lo muestra en el navegador.

```js
app.get("/", function (req, res) {
  res.sendFile("Hello.txt");
});
```

### res.download()

Metodo que envia un archivo como respuesta a la peticion HTTP y ofrece la opcion de descarga.

Este método añadira el siguiente _header_.

```js
Content-Disposition: attachment; filename=[filename]
```

```js
app.get("/", function (req, res) {
  res.download("Hello.txt");
});
```

### res.end()

Método que cierra la peticion HTTP.

```js
res.end();
res.status(404).end();
```

### res.cookie()

Metodo que crea una cookie.

```js
res.cookie("name", "John");
```

### res.clearCookie()

Metodo que elimina una cookie.

```js
res.clearCookie("name");
```

### res.get()

Metodo que devuelve el campo de los _headers_ de una respuesta HTTP.

```js
res.get("Content-Type");
// => "text/plain"
```

### res.set()

Establece el valor de un campo del _headers_ de una respuesta HTTP.

```js
res.set("Content-Type", "text/plain");
```
