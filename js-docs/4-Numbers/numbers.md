# Numbers

Son unos de los tipos de datos básicos (tipos primitivos), que, para crearlos, simplemente basta con escribirlos literalmente.

```js
const number1 = 4;
const number2 = 2;
const number3 = -2;
const number4 = 1e25;
```

Tambien se puede declarar numberos con la notación `new`, aunque no es recomendable, ya que es bastante tedioso y complicado.

```js
const numberObject = new Number(4); // 4
const numberObject = new Number("A"); // NaN
```

Los numeros decimales se separan con un punto `'.'`

```js
const decimal = 1.21;
```

Para reconocer magnitudes podemos user el guion bajo `'_'`

```js
const number = -5_000_0000;
5_000_000 === 5000000; // true
```

# Operaciones

```js
console.log("Sumar", numero1 + numero2);
console.log("Restar", numero1 - numero2);
console.log("Modulo", numero1 % numero2); // Devuelve el resto de la divison
```

# Operators

Todas estos pares dan el mismo resultado

```js
number1 = numero1 + 2;
number1 += 2;

number1 = numero1 - 2;
number1 -= 2;

number1 = numero1 * 2;
number1 *= 2;

number1 = numero1 / 2;
number1 /= 2;

number1 = numero1 % 2;
number1 %= 2;

number1 = numero1 + 1;
number1++;

number1 = numero1 - 1;
number1--;
```

# Numeros grandes

Cuando trabajamos con numeros grandes podemos perder precision.

En este caso estamos guardando un número más grande de los que Javascript puede representar, entonces se pierde precisión.

```js
const incorrectNumber = 482598752875287528533; // 482598752875287540000 (No es el mismo numero exacto, ha perdido precision)
```

Para no perder precision podemos crear en su lugar un tipo `BigInt`.

```js
const bigNumber = 482598752875287528533n; // 482598752875287528533n (El mismo)
```

# Numeric Safe range

Cuando trabajamos con datos numéricos, es posible que ciertos números no se puedan representar exactamente, y no sean tan precisos como nos gustaría. Esto ocurre porque se guardan en un formato llamado coma flotante de doble precisión.

![numeric_safe_range](/js-docs//4-Numbers//images//safe-integer.png)

Fíjate en la gráfica de color inferior:

- Los números en la franja verde se pueden usar con seguridad.
- Los números en la franja amarilla al operarse con otros podrían no ser seguros.
- Los números de la franja roja no se pueden representar.

# Constants

Para numeros existen las siguientes constantes:

```js
Number.MAX_VALUE; // ~ 2e1024	Valor más grande
Number.MIN_VALUE; // ~ 5×10e-324	Valor más pequeño
Number.MAX_SAFE_INTEGER; // 253e-1	Valor seguro más grande
Number.MIN_SAFE_INTEGER; // -(253e-1)	Valor seguro más pequeño
Number.EPSILON; //2e-52
Number.NaN; // Special "Not a Number" value.
Number.NEGATIVE_INFINITY; // Special value representing negative infinity. Returned on overflow.
Number.POSITIVE_INFINITY; //Special value representing infinity. Returned on overflow.
```

# Static methods

## Number.isNaN()

Determine whether the passed value is NaN.

```js
Number.isNaN("100"); // false
Number.isNaN("A"); // false. It is a string not a NaN
Number.isNaN(NaN); // true
```

## Number.isFinite()

Determine whether the passed value is a finite# number.

```js
Number.isFinite(1 / 0); // false
Number.isFinite(10 / 5); // true
Number.isFinite(0 / 0); // false
```

## Number.isInteger()

Determine whether the passed value is an integer.

```js
Number.isInteger(1); // true
Number.isInteger(1.5); // false
```

## Number.isSafeInteger()

Determine whether the passed value is a safe integer (number between -(253 - 1)
and 253 - 1).

```js
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
```

## Number.parseFloat()

Parses an argument and returns a floating point number.

If a number cannot be parsed from the argument, it returns NaN.

```js
Number.parseFloat("25.678"); // 25.678
Number.parseFloat("123ABC4"); // 123
Number.parseFloat("ABC123"); // NaN
```

## Number.parseInt()

Parses a string argument and returns an integer of the specified radix or base.

```js
Number.parseInt("35.6"); // 35
Number.parseInt("123ABC4"); // 123
Number.parseInt("ABC123"); // NaN
```

# Methods

## toExponential()

Returns a string representing the number in exponential notation.

```js
Number(621).toExponential(3);
```

## toFixed()

Returns a string representing the number in fixed-point notation.

```js
Number(123.4567).toFixed(2);
```

## toPrecision()

Returns a string representing the number to a specified precision in fixed-point or exponential notation.

```js
Number(5123.4567).toPrecision(5);
```

## valueOf()

Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

```js
const numObj = new Number(42);
console.log(typeof numObj); //  "object"

const num = numObj.valueOf();
console.log(num); // 42

console.log(typeof num); // "number"
Number(42).valueOf(); // 42
```
