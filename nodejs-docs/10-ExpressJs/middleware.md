# Middleware

Funcion que se ejecuta en el medio del flujo de solicitud y respuesta _HTTP_, permitiendo realizar acciones adicionales antes de ejecutar el handler.

Se diferencia de una funcion _handler_, en que le pasaremos un parametro adicional, la funcion `next()`, que permitirá terminar la ejecucion del middleware y pasar al siguiente punto de ejecucion, ya sea otro middleware o un handler.

```js
const miMiddleware = (req, res, next) => {
  next();
};
```

Estas funciones tiene acceso a los objetos `req` y `res` de la solicitud _HTTP_ . Lo que permitira modificar estos objetos y finalizar si hiciera falta el ciclo de una solicitud o respuesta.

## next()

La funcion `next()` se utiliza para pasar el control al siguiente _middleware_ a ejecutar.

Esta funcion termina la ejecución del middleware y puede:

- Si termina con éxito, llamaremos a `next()` sin parametros para indicar que todo ha ido correctamente y que se puede pasar a la siguiente ejecución.

- Si termina con error, llamaremos a `next(err)` y le pasaremos el error, de modo que Express entiende que algo salio mal.
  ```js
  const miMiddleware = (req, res, next) => {
    if (user.permisos != "admin") {
      next(new Error("No tienes permisos para estar aquí"));
    }
  };
  ```

# Casos de uso

Utilizaremos middlewares para realizar acciones comunes entre solicitudes, como:

- Parser body, cookies, logging...
- Seguridad
- Autenticacion y autorización
- Tratamiento de errores
- Etc.

# Registrar middleware

Para registrar un middleware en nuestra aplicacion, usaremos la funcion `app.use()` especificando la funcion middleware como parámetro.

```js
app.use(myMiddleware);
```

## Application-level middleware

Podemos declarar _middlewares_ a nivel de aplicación añadiendolos al apliacion de _express_.

Si no indicamos ninguna ruta, la funcion se ejecutará para todas las solicitudes que lleguen.

```js
import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
```

En este ejemplo, al indicar una ruta, la funcion solo se ejecutará para aquellas solicitudes que coincidan.

```js
app.use("/user/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});
```

## Router-level middleware

Tambien podemos declarar middlewares a nivel de `Router`, para que las funciones solo se ejecuten solo a las rutas de este.

```js
import express from "express";

const app = express();
const router = express.Router();

router.use((req, res, next) => {
  if (!req.headers["x-auth"]) return next("router");
  next();
});
```

Tambien podemos declarar los middleware solo pa una subruta

```js
router.get("/:id", middleware1, (req, res, next) => {
  next();
});
```

## Built-in middleware

_Express_ tiene una serie de _middleware_ predefinidos:

### `express.static()`

Permite servir ficheros estáticos.

```js

```

### `express.text()`

Parsea solicitudes con mensajes en formato texto, permitiendo así leer su contenido.

```js
import { text } from "express";

expressApp.use(text());
```

### `express.json()`

Parsea solicitudes con mensajes en formato _JSON_, permitiendo así leer su contenido.

```js
import { json } from "express";

expressApp.use(json());
```

### `express.urlencoded()`

Parsea solicitudes con mensajes en formato _urlencoded_, permitiendo así leer su contenido.

```js
import { urlencoded } from "express";

expressApp.use(urlencoded());
```

## Third-party middleware

Tambien podemos usar middlewares de terceros para aquellas funcionalidades que no estan contempladas en la librearia de _Express_

### cookie-parser

Librería que parsea las _cookies_ para que podeamos acceder al contenido de ellas en _express_.

https://www.npmjs.com/package/cookie-parser

```js
import { cookieParser } from "cookie-parser";

expressApp.use(cookieParser());
```

## Error-handling middleware

Podemos usar middleware para manejar errores.

### Default handler

Por defecto, si no indicamos ningun manejador de errores, Express se encarga de capturar los errores.

#### Sincrono

Cuando el error ocurre con codigo sincrono, Express captura el error sin tener que añadir nada extra.

```js
app.get("/", (req, res) => {
  throw new Error("BROKEN"); // Express will catch this on its own.
});
```

#### Asincrono

Cuando ocurre en codigo asincrono, por defecto, Express no captura el error y la aplicación crasheará.

Para que Express caputre el error es necesario que llamamos a la función `next()` y que le pasemos un valor, que normalemente será el error ocurrido.

```js
app.get("/", (req, res, next) => {
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      res.send(data);
    }
  });
});
```

### Custom handler

Para construir un middleware de error tenemos que añadir el parametro `err`, que será un objeto con el error producido.

Deberemos colocarlo como ultimo middelware de la aplicación, despues de todos los `app.use()` o _routers_.

```js
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});
```

Podemos tener mas de un middleware de error

Por ejemplo, podemos tener un middleware para logger errores y queremos que se ejecute antes del manejor de errores

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});
```
