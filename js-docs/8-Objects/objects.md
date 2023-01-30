# Object

```js
const persona = {
  nombre: "Pablo",
  apellidos: "Gomez",
  telefono: 666123456,
  edad: 26,
};
```

# Acceso a propiedades

```js
console.log(persona.nombre);
console.log(persona["nombre"]);
```

# Modificar propiedades

Aunque persona sea una constante, las propiedades si se pueden modificar

```js
persona.nombre = "Pepe";
console.log(persona.nombre);
```

# Mas ejemplos

```js
const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.11;

const item1 = {
  precio: 15,
  cantidad: 2,
  impuestos: IVA_GENERAL,
};

const item2 = {
  precio: 25,
  cantidad: 3,
  impuestos: IVA_REDUCIDO,
};
```

# Anidar objectos dentro de objetos

```js
const factura = {
  item1: item1,
  item2: item2,
};
```

Si la propiedad y objecto a asignar tienen el mismo nombre, podemos usar la siguiente sintaxis

Es lo equivalente a lo de arriba

```js
const facturaSimplificado = {
  item1,
  item2,
};
```
