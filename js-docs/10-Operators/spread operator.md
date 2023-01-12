# Spread operator

Operador que simplifica la recogida de valores en una estructura de datos.

Convierte un array o un objeto en el conjunto de valores que contiene.

## Con arrays

Podemos usar el operador `spread` para copiar arrays

```js
const lista = [1, 2, 3];
const listaCopia = [...lista]; // [1,2,3]
```

Podemos además de copiar añadir elementos al array

```js
const lista = [1, 2, 3];
const listaResultante = [...lista, 7, 8, 9]; // [1,2,3,7,8,9]
```

Podemos concatenar arrays

```js
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const listaResultante = [...lista1, ...lista2]; // [1,2,3,4,5,6]
```

## Con objetos

Podemos usar el operador `spread` copiar objetos.

Tener en cuenta que no hace copia profunda para los propiedades que sean objetos. Sino que se copia la referncia del objeto.

```js
const persona = {
  nombre: "Luis",
  apellido: "Lopez",
  alergias: { trigo: true, lactosa: true },
};

const copiaPersona = { ...persona };

console.log(copiaPersona);
```

Podemos copiar objetos y añadir nuevas propiedades a un objeto.

```js
const persona = {
  nombre: "Luis",
  apellido: "Lopez",
  alergias: { trigo: true, lactosa: true },
};

const direccion = {
  calle: "Calle Falsa, 123",
  localidad: "Springfield",
  pais: "Francia",
};

const usuario = {
  ...persona,
  ...direccion,
  rol: "admin",
};

console.log(usuario);
```

## Con funciones

Podemos usar el operador `spread` para pasar elementos de un array como parámetros de una función.

```js
function suma(numero1, numero2, numero3) {
  const resultado = numero1 + numero2 + numero3;
  console.log(resultado);
}

const lista = [1, 2, 3];

suma(lista[0], lista[1], lista[2]);
suma(...lista);
```

Podemos hacer lo contrario, la función puede aceptar multiples parametros utilizando el operador `spread`.

Cuando se usa el operator `spread` como parémtro se le denomina como parametro `rest`.

Tener en cuenta que el parametro pasado a la función sera un array.

```js
function suma(...params) {
  const resultado = params.reduce(
    (prevValue, nextValue) => prevValue + nextValue,
    0
  );
  console.log(resultado);
}

suma(1, 2, 3);
```
