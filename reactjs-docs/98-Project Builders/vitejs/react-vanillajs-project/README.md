# Create React Project

Learn how to create a project for a React application without using the default setting of ViteJs.

We will create the project with ViteJS in VanillaJS, and we will transform it to a React project.

We will be doing manually the following:

- Iniciate application
- Set the main entry point of the application

# Bulit with

- ViteJS
- Vanilla JS

# Steps

## 1. Initializate ViteJs Project

- Project Name
- Select a Framework
  - `Vanilla`
- Select a variant
  - JavaScript

```
npm create vite@latest
```

## 2. Install React Plugin for ViteJS

```
npm install @vitejs/plugin-react -E
```

## 3. Install React Dependencies

- react: libreria con el core de React
- react-dom: libreria con las herramientas del DOM

```
npm install react react-dom -E
```

## 4. Configurar Vite

- Crear fichero `vite.config.js`
- Añadir el _plugin_ en el fichero de configuracion

  ```js
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
  });
  ```

## 5. Crear punto de entrada de la aplicacion

En el fichero `index.html`:

- Crear un contenedor raíz donde cargaremos el nodo principal de nuestra aplicacion en React.

  ```html
  <html>
    ...
    <div id="root"></div>
    ...
  </html>
  ```

- Crear _script_ para indicar el primer fichero que se ejecutará y que cargará la aplicación de React.

  ```html
  <html>
    ...
    <div id="root"></div>
    <script type="module" src="/main.js"></script>
    ...
  </html>
  ```

- Para solucionar el siguiente error:

  ```
  [plugin:vite:import-analysis] Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension. de que no Cambiar extension del fichero `main.js` a `main.jsx`
  ```

  Este error nos indica que el plugin de ViteJs esta esperando que el fichero tenga la extension `.jsx`.

  - Debemos cambiar la extension del fichero `main.js` a `main.jsx`
  - Tambien es necesario cambiarlo en el `index.html`
    ```html
    <html>
      ...
      <div id="root"></div>
      <script type="module" src="/main.jsx"></script>
      ...
    </html>
    ```

## 6. Añadir linter al projecto (Optional)

Es recomendable, usar siempre un formateador de código para ayudarnos a que todo nuestro código tenga coherencia.

- Instalar dependencia de desarrollo

  ```
  npm install standard -D
  ```

- Configurar _linter_ en el proyecto en el `package.json`
  ```json
  {
    ...
    "eslintConfig": {
        "extends": "./node_modules/standard/eslintrc.json"
    }
    ...
  }
  ```
