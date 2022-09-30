# Methods

```js
const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.11;
```

Para poder utilizar el this, tenemos que usar funciones nombradas, con anominas no funciona

```js
const item1 = {
  precio: 15,
  cantidad: 2,
  impuestos: IVA_GENERAL,
  calcularTotal: function () {
    return this.precio * this.cantidad * this.impuestos;
  },
};

const item2 = {
  precio: 25,
  cantidad: 3,
  impuestos: IVA_REDUCIDO,
  calcularTotal: function () {
    return this.precio * this.cantidad * this.impuestos;
  },
};
```

OJO! esto no crea una copia, si no asigna a item3 la misma referencia que item2

Por lo que si modificamos item3 (o item2) se reflejan en ambos objetos

```js
const item3 = item2;
item3.precio = 23;

const factura = {
  item1,
  item2,
  calcularTotal: function (descuento) {
    return (
      (this.item1.calcularTotal() +
        this.item2.calcularTotal() +
        this.item3.calcularTotal()) *
      descuento
    );
  },
};

console.log(factura.calcularTotal(0.8));
```

# Método toString()

Simplemente por generar una variable de tipo `object`, esa variable hereda una serie de métodos.

Un buen ejemplo, sería el método .toString(), un método que intenta representar la información de ese objeto en un `string`.

```js
const objeto = {};
objeto.toString(); // Devuelve "[object Object]" (representación textual de un objeto genérico)

const number = 42; // Tipo Number
number.toString(); // Devuelve "42"
```
