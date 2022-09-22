# async await

Al usar promesas, cuando se van añadiendo más operaciones complejas, el código empezará a complicarse y será dificil entender el order en el que se ejecutará cada cosa.

Para ello podemos De esta forma que podemos volver nuestro código sincrono, obteniendo así una forma de escribir las promesas mas legible.

Con `async` podemos definir una función donde se encontrará el `await`, que permite esperar hasta que obtengamos la resolucion de una promesa.

- Solo pueden usarse con promesas
- Solo puede ponerse un `await` dentro de una función que tenga declarado el `async`

```js
const getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Peter");
    }, 1500);
  });
};

const sayHello = async () => {
  const name = await getName();
  console.log(`Hello ${name}`);
};

sayHello();
```

La forma de capturar error con async await, es usando un bloque `try...catch`

```js
try {
  sayHello();
} catch (error) {
  console.log(error);
}
```
