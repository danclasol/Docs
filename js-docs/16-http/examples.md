# with Promises

Las peticion HTTP con `fetch` devuelven una promesa que pueden ser resueltas con los metodos `then`

- Comprobamos que la petición es correcta con `response.ok`
- Utilizamos `response.text()` para procesarla
- En el caso de producirse algún error, lanzamos excepción con el código de error
- Procesamos los datos y los mostramos en la consola
- En el caso de que la sea rechazada, capturamos el error con el `catch`

```js
fetch("/robots.txt")
  .then((response) => {
    if (response.ok) return response.text();
    else throw new Error(response.status);
  })
  .then((data) => {
    console.log("Datos: " + data);
  })
  .catch((err) => {
    console.error("ERROR: ", err.message);
  });
```

# with Asyn/await

Tambien, podemos utilizar `async..await` para obtener una sintáxis mas legible e intuitiva.

- Creamos una función `request(url)` que definimos con async
- Llamamos a `fetch` utilizando `await para` esperar y resolver la promesa
- Comprobamos si todo ha ido bien usando `response.ok`
- Llamamos a `response.text()` utilizando `await` y devolvemos el resultado

```js
const request = async (url) => {
  const response = await fetch(url);

  if (!response.ok) throw new Error("WARN", response.status);

  const data = await response.text();

  return data;
};

const resultOk = await request("/robots.txt");
const resultError = await request("/nonExistentFile.txt");
```
