# Operador de concatenación

Cuando usamos el operador '+' y alguno de los operandos es de tipo `string`, JS entiende que la operacion a realizar es una concatenación

```js
const name = "Peter " + "Smith " + 5; // Peter Smith 5
```

# Operador de suma unaria

Al igual que existe un operador de resta unaria que sirve para cambiar de signo un número, también existe un operador de suma unaria que hace lo contrario: mantener positivo un número.

```js
const x = +5; // 5  (El valor ya era numérico y positivo)
const x = +-5; // -5 (El valor ya era numérico y negativo)
```

La utilidad de este operador en Js, es que permite forzar el cambio de tipo de dato a número, colocando el operador unario `+` previo a la variable

En este ejemplo, forzamos a converti una cadena en número.

```js
const x = +"5"; // 5      (El valor era string y pasa a ser numérico)
const x = +"-5"; // -5     (El valor era string y pasa a ser numérico)
```

Si la cadena no es numero, no se convertira

```js
const x = +"a"; // NaN    (El valor era string pero no es un número)
```
