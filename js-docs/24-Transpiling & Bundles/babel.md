# Babel

_Babel_ es un compilador que permite convertir código ECMAScript 2015+ a una versión compatible anterior de JS en navegadores antiguos.

Ejemplo de transpilación.

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

## Sistema de módulos

Por defecto, utiliza CommonJs

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
