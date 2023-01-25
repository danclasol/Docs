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

# async await con Arrays

Cuando usamos los metodos `map` o `forEach` con una función asíncrona, en cada iteración no se espera a que resuelva la llamada asíncrona.

Por lo que en el siguiente código, lo que obtenemos es una lista de promesas sin resolver.

```js
const usernames = ["peter_smith", "marie1234", "srdeveloper"];

const posts = usernames.map(async (username) => {
  return await fetchPostsFromTwitter(username);
});

console.log(posts);
/*
[
  Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> }
]
*/
```

## Promise.all

Con `Promise.all` podemos esperar a que se resuelvan todas las promesas del array.

```js
const posts = await Promise.all(
  usernames.map(async (username) => {
    return await fetchPostsFromTwitter(username);
  })
);

console.log(posts);
/*
[ 
  postsFromPeter,
  postsFromMarie,
  postsFromSrDeveloper
]
*/
```

## for ... of

Otra opción, es ejecutar el código de forma secuencial, de forma que esperamos cada una de las llamadas.

En cada código, esperamos la respuesta antes de continuar con la siguiente iteración.

```js
const posts = [];
for (const username of usernames) {
  const userPosts = await fetchPostsFromTwitter(username);
  posts.push(userPosts);
}

console.log(posts);
/*
[ 
  postsFromPeter,
  postsFromMarie,
  postsFromSrDeveloper
]
*/
```
