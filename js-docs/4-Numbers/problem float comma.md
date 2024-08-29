# Problema de la coma flotante

- No es solo de Javascript, ocurre es mas lenguajes

Esta suma da un resultado incorrecto, debido a un error en la representacion del formato binario que no es capaz de representarlo de una forma exacta

```js
0.1 + 0.2; // 0.30000000000000004
```

Disminuir este error redondeando

```js
Math.round((0.1 + 0.2) * 10000) / 10000; // 0.3
```

Usando la notación cientifica, obtenemos resultados mas exactos.

```js
Math.round(1.1255 + "e+2") + "e-2"; // 1.26
```

Se pueden utilizar librerías de terceros que operan de forma segura

- Maths
