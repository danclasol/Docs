# Request

El objeto `Request` de Express, representa una peticion HTTP.

Es una versión mejorada del propio objeto _request_ de Node, y admite todos las propiedades y metodos originales de este.

## Properties

### `req.ip`

Contiene la direccion IP de la peticion.

### `req.params`

Contiene los parametros de la ruta de la peticion.

```js
// GET /user/:name -> /user/tj
console.dir(req.params.name);
// => 'tj'
```

### `req.secure`

Indica si la conexion es segura (si es TLS).

```js
console.dir(req.protocol === "https");
// => true
```

### `req.cookies`

Contiene las _cookies_ enviadas en la petición.

Es necesario usar un _middleware_ para parsear cookies para que este disponible esta propiedad.

```js
// Cookie: name=tj
console.dir(req.cookies.name);
// => 'tj'
```

### `req.signedCookies`

Si la _cookie_ esta firmada, debemos usa la propiedad `req.signedCookies`

```js
req.signedCookies;
```

### `req.body`

Es necesario usar un _middleware_ como _express.json()_ o _express.urlencoded()_ para que este disponible esta propiedad.

```js
import express from "express";

const expressApp = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/profile", function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
```
