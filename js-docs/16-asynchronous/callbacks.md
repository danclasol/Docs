# Callbacks

`Callback` es simplemente un nombre que por convencion se le da a una función que se pasa como parámetro a otra funcion, permitiendo así que se pueda ejecutar dentro de la función.

```js
function saludar(callback) {
  callback();
}

saludar(function (nombre) {
  console.log(`Hola ${nombre}`);
});
```

# Asincronía con callbacks

Las funciones `callback` permite controlar el orden de ejecución en funciones asincronas que no devolverán un resultado inmediatamente, si no que tomará un tiempo en producir un resultado.

En este ejemplo, simularemos una llamada a una API.

- La función `getUser` recibira como parámetros 2 funciones `callback`
- Simulamos que `getUserService` tarda un tiempo en obtener respuesta de la API
- Cuando este acabe se ejecutaran uno de los 2 `callback`

```js
const getUser = (userId, printUser, printError) => {
  // long-time-task to get user from API
  const user = getUserService(userId);

  if (!user) printError("User not exist");
  else printUser(user);
};

const printUser = (user) => {
  console.log(`User name is ${user.name}`);
};

const printError = (err) => {
  console.log(err);
};
```

```js
getUser(1, printUser, printError);
```

Actualmente, para trabajar con tareas asincronas, se recomienda el uso de promesas que proporcionan una forma mas limpia de controlar el orden de ejecución de tareas, evitando el famoso `callback hell`

# Callback hell

Si encadenamos varias `callback` dentro de una misma funcion, podemos obtner lo que se conoce como `callback hell`.

Este código, aunque se completamente funcional y correcto para JS, es muy complejo de leer y poco inutivo para el ser humano.

```js
getUser(userId, (user) => {
  getEmail(user, (user) => {
    getProfile(user, (user) => {
      getSettings(user, (user) => {
        getContacts(user, (user) => {
          console.log(user);
        });
      });
    });
  });
});
```
