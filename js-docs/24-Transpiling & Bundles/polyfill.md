# Polyfill

Es un fragmento de código que se utiliza para proporcionar una funcionalidad moderna que debería tener el navegador pero que todavía no ha implementado.

Por ejemplo, se podría usar un polyfill para imitar la funcionalidad de un elemento HTML Canvas en Microsoft Internet Explorer 7 usando un complemento de Silverlight, o un soporte mímico para las unidades rem CSS, o text-shadow, o lo que tu quieras.

## Crear Polyfill

Por ejemplo, imaginemos la función `Array.map()` no este implementada en nuestro navegador.

Crear este nuevo polyfill llamadao customMap.

```js
Array.prototype.customMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const mapElement = callback(element, i);

    result.push(mapElement);
  }
};
```

En esta funcion, el `this` hace referencia al propio array desde el que ejecutemos la funcion.

En este ejemplo `this` sería `[1,2,3]`

```js
[1, 2, 3].customMap((n) => n * 2);
```
