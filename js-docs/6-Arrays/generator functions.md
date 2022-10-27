# Funciones generadoras

A diferencia de las funciones normales, una función generadora puede ser detenida en medio de su ejecución y posteriormente retomarla desde el punto en que se detuvo mediante la ejecución del callback que proporcionan. Es decir:

- Nos van a permitir simplificar codificar iteradores (pues las funciones generadoras permiten devolver múltiples resultados).
- Podemos obtener secuencias de resultados en vez de un único resultado.
- No se bloquea el hilo de ejecución.

Las características de este tipo de funciones son las siguientes:

- Son declaradas mediante un `*` después de la palabra clave function para diferenciarlas de las funciones normales.
- Devuelven un objeto sobre el que podemos invocar el método next() .

Cada vez que invocamos next sobre el objeto devuelto por la función generadora obtenemos un nuevo objeto con la siguiente estructura:

```js
{
    value: Any,
    done: true|false
}
```

La propiedad value es el valor devuelto por la función en ese paso mientras que done indica si la función ha dado por concluida su ejecución o por el contrario tiene más elementos que devolver. En el momento en que se devuelve false Javascript considera que la ejecución ha terminado.

## Ejemplo

La primera ejecución a esta funcion devolverá el primero valor, y cuando ejecutemos de nuevo la función recordará el último valor ejecutado y continuara con el siguente valor

```js
function* funcionGeneradora() {
  yield "primer valor";
  yield "ultimo valor";
}

let dev = {};
const gen = funcionGeneradora();

// Primera llamada a la funcion generadora
dev = gen.next();
console.log(dev); // {value: 'primer valor', done: false}

// Segunda llamada
dev = gen.next();
console.log(dev); // {value: 'ultimo valor', done: false}

// Tercera llamada
dev = gen.next();
console.log(dev); // {value: undefined, done: true}
```

# Ventajas de los generadores

- Se evalúan de forma `lazy` lo cual permite tener funciones que generan flujos de datos infinitos. Es decir, los valores son calculados bajo demanda hasta el momento de ser necesitado.
- Son eficientes en la gestión de memoria. Puesto que sólo necesitamos los valores cuando los necesitamos, no estamos llenando la memoria con múltiples datos como sucede con las funciones normales. Gracias a los generadores podemos posponer su cálculo hasta el momento de necesitarlos.

# Desventajas

- Son de un sólo uso, es decir, una vez que hemos agotado todos los valores que pueden devolver no es posible volver a iterar sobre ellos, lo que nos obliga a crear un nuevo objeto con dicho generador.
- No permiten acceso aleatorio a posiciones a diferencia de como podemos hacer con los arrays pues los valores son generados de uno en uno en orden.
