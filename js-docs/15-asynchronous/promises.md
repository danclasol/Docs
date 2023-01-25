# Promesas

Una promesa es el objeto que representa un valor que estará disponible ahora, en el futuro o quizas nunca.

Como no sabemos cuando estará disponible, dejamos preparado dentro de la promesa el código que se ejecutará cuando la promesa se resuelva correctamente o con error.

Una promesa es asincrona, ya que necesita de un tiempo para resolverse o finalizar.

## Estados de una promesa

Una promesa puede tener uno de los siguientes estados:

- `pending` - estado inicial, ni cumplido ni rechazado
- `fulfilled` - significa que la operación se completó con éxito
- `rejected` - significa que la operación falló

## Crear una promesa

Para crear una promesa hay que pasarle tiene un 2 `parametros:

- `resolve` - callback al que llamaremos cuando la promesa sea resuelva con éxito
- `reject` - callback al que llamaremos cuando la promesa sea rechazada

```js
const myPromise = new Promise((resolve, reject) => {
  let condition;

  if (condition) {
    // Promise is resolved successfully
    resolve({ id: 1, name: "John" });
  } else {
    // Promise is rejected
    reject(new Error("Promise is rejected"));
  }
});
```

## Consumir una promesa

Para consumir promesas existen los siguientes métodos:

- `then()`- ejecuta la función callback `resolver` cuando la promesa se cumple
- `catch()` ejecuta la función callback `reject` cuando la promesa se rechaza

```js
myPromise
  .then((data) => {
    console.log(data); // data: { id: 1, name: "John" }
  })
  .catch((err) => console.log(err));
```

# Encadenar operaciones

Lo normal, es que cuando la promesa se resuelva, necesitemos hacer alguna operacion mas el valor devuelto.

Se pueden anidar tantos `then` como queramos. Con cada `then` añadimos un paso que se ejecutará después del paso anterior, tomando el valor devuelto de ese paso anterior.

```js
myPromise
  .then((data) => Number(data))
  .then((data) => data * 2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

# Encadenar despues de una `catch`

Es posible encadenar más operaciones después de un haberse lanzado un `catch`, lo que es útil para lograr nuevas acciones incluso después de una acción fallida en la cadena.

Lo que devuelva el `catch` se le pasara a los siguientes `then`

```js
myPromise
  .then((data) => Number(data))
  .then((data) => data * 2)
  .catch((err) => {
    console.log(err);
    return 1;
  })
  .then((data) => data * 2)
  .then((data) => data * 2)
  .catch((err) => {
    console.log(err);
    return 1;
  });
```

Tambien podemos usar la sentencia `finally` para forzar que siempre se ejecute

```js
myPromise
  .then((data) => Number(data))
  .then((data) => data * 2)
  .catch((err) => console.log(err))
  .finally(closeConnection);
```

# Promise.all()

Devuelve una promesa que se cumple cuando todas las promesas del `array` se cumplen.

Si alguna de ellas se rechaza, se rechazan todas.

```js
Promise.all([promises1(), promises2(), promises3()]).then((responses) => {
  responses.forEach((response) => {
    console.log(response);
  });
});
```

# Promise.allSettled()

Devuelve una promesa que se cumple cuando todas las promesas del `array` se hayan procesado, independientemente de que se hayan cumplido o rechazado.

Esta promesa nos devuelve un campo `status` donde nos indica si cada promesa individual ha sido cumplida o rechazada, y un campo `value` con los valores devueltos por la promesa.

```js
Promise.allSettled([promises1(), promises2(), promises3()])then((responses) => {
  responses.forEach((response) => {
    console.log(response.status, response);
  });
});
```

# Promise.any()

Devuelve una promesa con el valor de la primera promesa individual del `array` que se cumpla. Si todas las promesas se rechazan, entonces devuelve una promesa rechazada.

```js
Promise.any([promises1(), promises2(), promises3()]).then((response) => {
  console.log(response.status, response);
});
```

# Promise.race()

Devuelve la primera promesa del `array` que sea procesada, independientemente de que se haya cumplido o rechazado.

Si se cumple, devuelve una promesa cumplida, en caso negativo, devuelve una rechazada.

```js
Promise.race([promises1(), promises2(), promises3()]).then((response) => {
  console.log(response.status, response);
});
```

# Promise.resolve() y Promise.reject()

Devuelve una promesa cumplida o rechazada respectivamente sin necesidad de crear una promesa con `new Promise()`

Devuelve un nuevo objeto Promise que se resuelve con el valor dado.
Devuelve un nuevo objeto Promise que se rechaza por el motivo indicado.

```js
const doTask = () => {
  const number = 1 + Math.floor(Math.random() * 6);
  return number % 2 === 0 ? Promise.resolve(number) : Promise.reject(number);
};
```
