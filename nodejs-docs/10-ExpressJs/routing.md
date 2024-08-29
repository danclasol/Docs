# Routing

El `routing` define como va a responder cada endpoints de una aplicacion a las peticiones de los clientes.

# Route Methods

Con la `app` de _Express_, podemos definir los métodos para tipo de solicitud.

- `method`: metodo HTTP in lowercase.
- `path` ruta del servidor.
- `handler`: funcion que se ejecuta cuendo la ruta coincide.

```js
app.METHOD(PATH, HANDLER);
```

Corresponden a cada uno de los metodos HTTP.

## GET method route

```js
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
```

## POST method route

```js
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});
```

## PUT method route

```js
app.put("/", (req, res) => {
  res.send("PUT request to the homepage");
});
```

## DELETE method route

```js
app.delete("/", function (req, res) {
  res.send("DELETE request to homepage");
});
```

## ALL method route

Metodo especial que funciona para todos los métodos.

Usado normalmente para cargar _middlewares_.

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});
```

## ROUTE method

Este metodo permite concatenar en una misma ruta varios metodos, evitando tener que declarar la ruta por cada metodo.

```js
app.get("/book", (req, res) => {});
app.post("/book", (req, res) => {});
app.put("/book", (req, res) => {});
```

```js
app
  .route("/book")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {});
```

# Route Paths

Los _path_ que pasamos como parámetro a las metodos pueden ser:

## string

```js
app.get("/about", (req, res) => {
  res.send("about");
});
```

## string pattern

### `'?'`

Permite omitir el caracter anterior a `'?'`

Aceptará '_abcd_', '_abd_'.

```js
app.get("/ab?cd", (req, res) => {
  res.send("abcd");
});
```

Podemos omitir mas de un caracter usando parentesis `'()'`:

Aceptará '_abe_' y '_abcde_'.

```js
app.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});
```

### `'+'`

Permite que el caracter anterior pueda incluirse cualquier numero veces

Aceptará '_abcd_', '_abbbcd_'

```js
app.get("/ab+cd", (req, res) => {
  res.send("abcd");
});
```

### `'*'`

Permite colocar cualquier numero de caracteres

Aceptará '_abcd_', '_abxcd_', '_abRANDOMcd_', '_ab123cd_'

```js
app.get("/abcd", (req, res) => {
  res.send("abcd");
});
```

## expresiones regulares

Aceptará '_butterfly_' y '_dragonfly_', but not '_butterflyman_', '_dragonflyman_'.

```js
app.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/");
});
```

# Route Parameters

Los `Route Parameters` permiten colocar parametros en la url y que podamos capturar ese valor.

Incluimos los parametros en la ruta:

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

Obtenemos el valor de los pareametros

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  const { userId, bookId } = req.params;

  res.send(req.params);
});
```

# Router Object

El objeto `router` es una instancia para crear manejadores de rutas, permitiendo separar la lógica de rutas en modulos independientes y reutilizables.

Podemos añadirle cualquier método HTTTP:

```js
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("GET");
});

userRouter.post("/", (req, res) => {
  res.send("POST");
});
```

Como `router` funciona como un middleware, podemos pasarlo a la funcion `app.use()`, para conectarlo con la aplicacion de express.

```js
expressApp.use("/users", userRouter);
expressApp.use("/products", productRouter);
```
