# Node as Server

En Node.js, podemos acceder al protocolo HTTP para manejar peticiones de 2 formas:

- A traves de la librería nativa `HTTP`
  - http
  - https
  - http/2
- Librerias de terceros
  - express
  - fastify
  - hapi

# HTTP

El modulo `http` nos facilita el manejo de peticiones HTTP en Node.

## createServer()

Crea una instancia de `http.Server`, para crear un servidor que escuchará llamadas.

```js
const httpServer = createServer((request, response)) => {
  response.end('Hello World!');
}
```

## listen(port)

Activa el servidor _HTTP_ para que empiece a escuchar peticiones.

A diferencia de los procesos normales de Node, este proceso se queda abierto para que este escuchando peticiones de forma ininterrumpida.

```js
httpServer.listen(3000, () =>
  console.log("HTTP server listenting at port 3000")
);
```

## get()

Permite realizar peticiones _HTTP GET_ a un servidor como cliente.

- `url`: url de la peticion
- `options`
- `callback`: callback con la respuesta del servidor

```js
get("http://localhost:3000/users", (res) => {
  console.log(res.statusCode);

  res.on("data", (chunk) => (body += chunk));
  res.on("end", () => console.log(body));
});
```

## request()

Permite realizar peticiones _HTTP_ a un servidor como cliente.

- `url`: url de la peticion
- `options`
  - method: GET, POST, PUT, DELET
  - hostname: direccion del servidor
  - port: numero puerto
  - path: direccion del recurso
- `callback`: callback con la respuesta del servidor

```js
const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
};

const request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });
});


// Write data to request body
req.write({message: 'Hello World!'});
req.end();
```

## Events

### request

Evento que se emite cada vez, que el servidor reciba una petición.

- request: contiene la informacion de la peticion recibida
  - Es un objeto `http.IncomingMessage` que extiende de _Readable_.
- response: permite mandar la respuesta al cliente.
  - Es un objeto `http.ServerResponse` que extiende de `http.OutgoingMessage` que extiende de _Stream_

```js
httpServer.on("request", (req, res) => {
  if (request.method === "GET" && request.pathname === "/hello") {
    response.end("Hello World!");
  }

  return response.end("Bye");
});
```

Escuchar eventos de esta forma, es muy complejo y engorroso, por eso, es tan util, utilizar librerias como _express_.
