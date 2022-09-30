# Código sincrono

En el código sincrono, cada línea se ejecuta una a una en el order en el que esten escritas.

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting); // "Hello, my name is Miriam!"
```

Aunque haya una línea de código que tarde más tiempo, la ejecución se bloquea y espera hasta que acabe antes de pasar a la siguiente línea.

Por ejemplo, creamos una función que va tardar bastante tiempo en terminar.

```js
function tareaLarga() {
  for (let i = 2; i <= 10000000; i++) {
    Math.random() - Math.random() * Math.random(); // Operacion que busca tardar lo máximo posible
  }
}
```

Hasta que no acaba la función, no se ejecuta la última línea.

```js
console.log("Inicio");
tareaLarga();
console.log("Fin");
```

Que la ejecución se bloquee hasta que una línea acabe es muy ineficiente, ya que la aplicación se quedará bloqueada hasta todo el código se ejecute. Lo más indicado es usar asincronismo para tareas de larga duración.

# Asincronismo

En el código asincrono, el hilo de ejecución del código no se bloquea, sino que continuará.

Existen muchas funcionalidades en la web para las cuales no podemos saber exactamente el tiempo que va a tardar en ejecutarse, y sería muy ineficiente dejar bloqueado el hilo esperando que acabe la tarea.

Por ejemplo:

- Peticiones a una API no podemos saber el tiempo que vamos a tardar en obtener una respuesta.
- Descargar algun fichero.
- Escritura o lectura de ficheros

Para ello se hace uso del asincronismo, para ejecutar el código que va tomar un tiempo indeterminado en paralelo y que el resto del código continue su ejecución de forma sincrona.

## Funcionamiento

En un bloque que tenga tanto código sincrono como asincrono el funcionamiento es el siguiente:

- Se ejecuta el código línea a línea

  - Si es sincrono, el código se ejecuta inmediatemente.
  - Si el asincrono, se añade a una cola.

- Cuando ya se han acabado todas líneas sincronas, se empieza con la cola de tareas asincronas

  - Se van ejecutando las tareas de la cola en orden de llegada
  - Dentro de la ejecucion de una tarea asincrona el funcionamiento es el mismo

    - El código sincrono se ejecuta inmediatemente.
    - Si dentro hay otra tarea asincrona se mete en la cola.

  - Así, se ira ejecutando toda la cola, hasta que no quede nada de código por ejecutarse

## Orden ejecucion

No podemos saber exactamente el momento exacto en el que se va a ejecutar un código asincrono.

Esto puede ser un problema ya que, por ejemplo, en una web que necesita rellenar una tabla con datos, los datos del servidor llegan después de que la tabla se haya pintado en pantalla. En este caso deberíamos garantizar que la tabla se pinte una vez que tengamos los datos.

Para garantizar un order especifico, debemos de controlarlo expresamente utilizando:

- Callbacks - pasar una función como parámetro, y ejecutarla cuando sea necesario. Método obsoleto, es recomendable usar promesas
- Promesas - objeto que representa un valor que estará disponible ahora, en el futuro o quizás nunca.
- async/await - utilizando promesas, pero con una sintaxis mas clara
