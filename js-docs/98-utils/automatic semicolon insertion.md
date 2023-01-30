# Automatic semicolon insertion

Js tiene una serie de reglas para la ASI (Automatic Semicolon Insertion)

Estas determinan a la hora de interpetrar nuestro código, cuando JS pone un `;` en tiempo de ejecución y cuando no

Usando algún tipo de linter, como Prettier, podemos formateas el código para que insertE automáticamente todos los puntos y comas, evitando así cualquier problema.

# 1º Regla

Cuando se acaba el archivo o la siguiente línea comienza por `}`.

## Fin de archivo

```
console.log() // Última línea del fichero
```

## Siguente línea comienza por `}`

```
function logFunction() {
    console.log('Funciona') // Siguiente linea es '}'
}

logFunciona()
```

# 2º Regla

Despues de las palabras reservadas `return`, `continue`,`throw` o `break`

## return

```
function logFunction(param) {
    return // Aqui se inserta un `;`
    console.log('Funciona')
}
```

## continue

```
for (const name of names) {
    if (nombre === 'Marie') {
        continue // Aqui inserta un `;`
    }

    console.log(name);
}
```

## throw

```
for (const name of names) {
    if (nombre === 'Marie') {
        throw new Error('Error') // Aqui inserta un `;`
    }

    console.log(name);
}
```

## break

```
for (const name of names) {
    if (nombre === 'Marie') {
        break // Aqui inserta un `;`
    }

    console.log(name);
}
```

# 3º Regla

Si la siguiente línea no es compatible con la actual, ya que ambas líneas sintácticamente darían un error

En este ejemplo, si concatenaramos estas dos línea, daría un error. Por lo que al final de la primera línea JS inserta un `;`

```
console.clear()const numberA = 5
```

## Declaraciones variables en siguiente línea

Con declaraciones de variables pasa lo mismo

```
const numberA = 5const numberB = 3
```

## Paréntesis en la siguiente línea

En este caso, al concatenar las línea, `3(numeroA + numeroB)` se está interpretando como una función a la que despues se le hace un `toString()`.

Esto para JS es incorrecto y por tanto añade un `;` antes del parentesis.

```
const numberA = 5
const numberB = 3(numeroA + numeroB).toString()
```

## Corchetes en la siguiente línea

En este caso, al concatenar las línea, `3´[numeroA, numeroB]` se está interpretando como una array a la que despues se le hace un `toString()`.

Esto para JS es incorrecto y por tanto añade un `;` antes del corchete.

```
const numberA = 5
const numberB = 3[numeroA, numeroB].toString()
```
