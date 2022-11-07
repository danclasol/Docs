# Promisificar

Cuando tengamos que usar alguna elemento que funcione por `addEventListener` o por `callbacks`, puede provocar que tengamos que si tengamos que realizar varias llamadas el código se vuelva muy complejo.

Una forma de simplificar este código y hacerlo mas legible, es mediante la primisificación, que consiste en crear una promesa en la que gestionaremos todas estos elementos tan verbosos.

# API FileReader

Por ejemplo, la API `FileReader` permite leer en contenido de ficheros.

Para controlar el resultado de esta operación hay que hacer uso de los siguientes controladores:

- FileReader.onload - se activa cada vez que la operación de lectura se ha completado satisfactoriamente.
- FileReader.onloadend - se activa cada vez que la operación de lecura se ha completado (ya sea con éxito o fallo).
- FileReader.onprogress - se activa mientras se está leyendo el contenido del objeto Blob.
- FileReader.onabort - se activa cada vez que se interrumpe la operación de lectura.
- FileReader.onerror - se activa cada vez que la operación de lectura encuentra un error.

Por lo que para controlar, en que estado se encuentra la operación, tendremos que hacer uso de `addEventListener` e ir controlando que va ocurriendo en cada momento.

Esto provoca un código bastante incomodo de usar.

```js
const file = ev.target.picture.files[0];
const fileReader = new FileReader();

fileReader.addEventListener("loadend", () => console.log(fileReader.result));
fileReader.addEventListener("abort", () => console.log(fileReader.result));
fileReader.addEventListener("error", () => console.log(fileReader.result));

fileReader.readAsDataURL(file);
```

Sin embargo, podemos hacer uso de las promesas, para simpliar todos estos estados.

Para ello, podemos hacer lo siguiente:

- Mover todo el código a una funcion que devolverá una promesa.
- Resolver la promesa en el caso de que la operación de lectura haya sido correcta (lo podemos saber con el evento 'loadend')
- Rechazar la promesa en el caso de que haya ocurrido algún error ('error') o que la operación haya sido cancelada ('abort')

```js
const fileToDataURL = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("loadend", () => resolve(fileReader.result));
    fileReader.addEventListener("abort", () => reject(new Error("Abort")));
    fileReader.addEventListener("error", () => reject(new Error("Error")));

    fileReader.readAsDataURL(file);
  });
```

A continuación, podremos consumir esta función usando `async await` para esperar la resolución de la promesa.

```js
const file = ev.target.picture.files[0];

try {
  const dataUrl = await fileToDataURL(file);

  console.log(dataUrl);
} catch (err) {
  console.log(err);
}
```
