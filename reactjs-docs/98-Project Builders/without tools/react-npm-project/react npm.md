# Initializate npm project

Para poder instalar todas las dependencias necesarias necesitamos crear el fichero `package.json` en nuestro proyecto.

```
npm init
```

# Install React dependencies

Dependencia principal de React

```
npm i -E react
```

Dependencia de React para utilizar el DOM

```
npm i -E react-dom
```

# Install Babel dev dependencies

No recomiendan instalar estas dependencias como globales en nuestro equipo, debido a que cada projecto puede estar trabajando con versiones distintas de Babel.

## `@babel/core`

Dependencia para utilizar la transpilacion de Babel

```
npm install --save-dev @babel/core
```

## `@babel/cli`

Permite usar Babel desde la terminal.

```
npm install --save-dev @babel/cli
```

## `@babel/preset-react`

Babel nos proporciona un preset con los plugins necesarios para que babel reconozca la sintaxis de React.

```
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
```

## Configurar babel en el proyecto

Tenemos 2 opciones:

1. Configurar el `package.json` para indicar que usaremos los presets de _babel_

   ```json
   {
     "babel": {
       "presets": ["@babel/preset-env", "@babel/preset-react"]
     }
   }
   ```

2. Crear fichero de configuracion propio para _babel_ llamado `.babelrc`

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    [
      "@babel/preset-react",
      {
        "modules": false
      }
    ]
  ]
}
```

## Ejecutar transpilador de _babel_

Transpilar el codigo para que sea compatible con el navegador.

- Transpilar un fichero origen y generamos uno distinto

  ```
  npx babel .\index-alt.js --out-file ./index.js
  ```

- Si no tenemos configurado los presets en un fichero de configuracion, podemos usar el parametro `--presets=` para indicarlos.

  ```
  npx babel .\index-alt.js --out-file ./index.js --presets=@babel/preset-env,@babel/preset-react
  ```

- Tambien podemos seleccionar directorios para transpilar origen

  ```
  npx babel src -d dist
  ```

# Bundle con Webpack

Instalar dependencia de Webpack en desarrollo

```
npm i -D webpack
```

Permite usar Webpack desde la terminal.

```
npm i -D webpack webpack-cli
```

## Fichero Configuracion Webpack

Debemos llamarlo `webpack.config`

Este fichero cuenta con las siguientes propiedades:

- mode: development o production
- entry: punto de entrada de nuestra aplicación
- output: salida donde queremos que se genere el _bundle_

```json
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
};

```

## Usar Babel junto a Webpack

Podemos usar babel junto con Webpack para hacer el build de los archivos del proyecto, utilizando un loader de Webpack y configurandolo

```
npm i -D babel-loader
```

Luego en la configuración de webpack agregar el loader:

```js
module.exports = {
	...
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
			},
		],
	},
	...
};
```

Con esto y teniendo el archivo de configuración .babelrc en la raíz del proyecto podemos hacer que Webpack se encargue de usar Babel para transformar todo nuestro código JS y JSX a JS que todos los navegadores entiendan.
