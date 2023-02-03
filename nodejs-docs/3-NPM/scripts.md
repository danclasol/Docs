# Scripts

En el `package.json` existe la propiedad `scripts` para configurar comandos que ejecutarán algun script para automaticar tareas.

```json
"scripts": {
    "dev": "SCRIPT_DEPLOY_APP_DEVELOPMENT",
    "start": "SCRIPT_DEPLOY_APP_PRO",
    "test": "SCRIPT_RUN_TESTS"
}
```

Desde la terminal, podemos ejecutar estos comando de la siguiente manera:

```js
npm run [script_name]
npm run dev
```
