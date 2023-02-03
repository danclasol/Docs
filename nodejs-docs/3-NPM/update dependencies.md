# Actualizar dependencias manualmente

La actualizacion se puede realizar revisando en `npm` o en repositorios de github si ha habido alguna actualizacion y despues actualizar manualmente la version de la dependencia en el `package.json`.

Aunque no recomendable, por ser tedioso y nada cómodo. Además existen otras alternativas mucho mas convenientes.

# npm update

En `npm` nos ofrecen el comando `npm update` con el que podemos realizar las actualizacion de las versiones de las dependencias de nuestro proyecto.

Para ello, en función de las politicas de actualización de las dependencias en el `package.json` buscará por versiones nuevas o no. Solo buscará si hemos configurado un `^`, `~`, etc.

```js
npm update
```

Una vez ejecutado este comando puede ocurrir varias cosas:

- No hay ninguna actualización para la dependencia. No se actualiza la version.
- Encuentra una actualizacion no conflictiva. Se actualiza la version automáticamente.
- Encuentra una actualización que puede producir un comflicto.

# Herramientas

Existen una serie de herramientas para facilitarnos la actualizacion de dependencias.

# npm-check

La librería `npm-check` nos proporciona un comando que va a revisar por nuevas versiones de dependencias, mostrando por la terminal las versiones nuevas y permitiendo seleccionar cual actualizar y cual no.

Este comando tambien nos detecta si tenemos alguna dependencia que no estemos usando, para eliminarla del proyecto.

### Instalar librería

Necesitamos instalar la librería para usar este comando. Lo haremos de manera global para que este disponible desde cualquier proyecto y terminal.

```
npm i -g npm-check
```

### Comprobar actualizaciones

Ejecutar el comando por la terminal.

```
npm-check
```

Este comando permite varios argumentos:

- _skip-unuses_: no mostrar si tenemos dependencias no usadas.

  Este puede ser necesario al crear el proyecto, cuando todavía no hemos usado las dependencias instaladas.

  ```
  npm-check --skip-unuses
  ```

- _u_: activar la interacción con la terminal, para poder seleccionar que hacer con cada actualización detectada.

  Si no indicamos este argumento, solo se nos mostrar información de las dependencias detectadas, y no se actualizará nada, teniendo que actualizarlos manualmente.

  ```
  npm-check -u
  ```

  Al ejecutar el comando se mostrará las versiones mas reciente, que podremos seleccionar una a una para que se actulicen directamente.

  Esto provocará que se actulice la version del `package.json` y que se instale la actualizacion en el `node_modules`

- _-E_: fijar la versión de las dependencias. Es decir, que no añada el `^`

  De esta manera, en el `package.json`, quedará fijada esta version actualizada.

  ```
  npm-check -u - E
  ```

# version lens

En Visual Studio Code, existe una extension para que, sin tener que usar la terminal, nos muestre visualmente en el `package.json` si nuestras librerías tienen la ultima version.

Una vez instalada, tenemos que ir al `package.json` y activarlo. Ahora se mostrará encima de cada dependencia el estado de la version.

Tambien podemos realizar directamente la actualizacion, pulsando en la latest.

```json
"dependencies": {
  //latest
  "nodemon": "2.0.20",

  //satisfies: 12.12.42 | latest: 14.0.5
  "@types/node": "^12",

  //fixed 3.9.2 | latest: 3.9.3
  "typescript": "3.9.2"
}
```
