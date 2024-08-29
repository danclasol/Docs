# ExpressJs

Framework para _Node.js_, que proporciona un conjunto de funciones y herramientas para crear API Restful, webs y aplicaciones web complejas de manera eficiente y escalable.

https://expressjs.com/

# express()

Método que crea una aplicacion de `Express`.

```js
import express from "express";
const app = express();
```

## Methods

### `express.json()`

Middleware que detecta payloads con formato _JSON_ y los transforma en objetos _JavaScript_.

```js
app.use(express.json());
```

# Application

La funcion `express()` crea el objeto `app`, que correspondera a la aplicacion de `express`.

Para que `app` empiece a escuchar peticiones debemos levantar el servidor con la funcion `app.listen()`. Esta funcion por debajo va a crear un servidor _HTTP_ nativo de _Node_

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Es posible crear de forma separada el servidor HTTP de Express, para que la aplicacion de express solo se encargue de manejar las solicitudes, en vez de iniciar el servidor tambien.

Al desacoplar el servidor HTTP de Express conseguimos:

- Posibilidad de añadir en el mismo servidor mas manejadores de solicitudes de diferentes tipos (ej: websockets).
- Proceso de test mas facil, ya que podemos levantar solo la parte que nos interese.

```js
import { createServer } from "http";
import expressApp from "./express.js";
import express from "express";

// Express App manages the requests
const expressApp = express();

expressApp.get("/", (req, res) => res.send("Hello World!"));

// Http deploys the server
const httpServer = createServer(expressApp);

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```
