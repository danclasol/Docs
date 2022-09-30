# Clases en Js

Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.

La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript.

Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

## Diferencias con lenguajes Orientados a Objetos puros

- No vamos a poder darles un tipo a las propiedades de las clase ya que no hay tipos (Esto si se podrá con TypeScript).
- No se puede establecer la visibilidad de propiedades `private`, `public`, etc. Todo sera público.
- No se puede tener mas de un constructor, no permite la sobrecarga.
  - Tener en cuenta que en JS, no es obligatorio pasar todos los parametros, por lo que si no le pasamos alguno al constructor asignará la propiedad como `undefinded`.

## Buenas practicas

- Declarar propiedades solo en el constructor. Ya que en JS podemos añadir propiedades a un objecto en cualquier momento.
- No sobreescribir metodos.
- Acceder a las propiedades solo con los getters y setters.

# Definiendo Clases

Para declarar una clase, se utiliza la palabra reservada `class` y un nombre para la clase "Rectangulo".

Dentro de las clases declararemos sus miembros (propiedades y métodos).

```js
class Curso {
  // Constructor
  // Getters and setters
  // Métodos
}
```

# Constructor

El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase.

```js
constructor(titulo, dificultad) {
  this.titulo = titulo;
  this.dificultad = dificultad;
  this.lecciones = [];
}
```

## Instanciar Objecto de la Clase

Para crear un objeto de una clase deberemos llamar al constructor y pasarle los parámetos definidos.

```js
const cursoJs = new Curso("JavaScript", 1);
const cursoTs = new Curso("TypeScript", 2);
```

En JS, el paso de parametros es opcional, por lo que si no pasamos alguno no dará error, simplemente esta propiedad no se creará.

```js
const cursoJs = new Curso("JavaScript"); // No le pasamos la dificultad -> OUTPUT: { titulo: "JavaScript", dificultad: undefined, lecciones: [] }
```

# Métodos de la clase

Podemos crear funciones que existirán en el interior de una clase

```js
agregarLeccion(leccion) {
  this.lecciones.push(leccion);
}

eliminarUltimaLeccion() {
   this.lecciones.pop();
}
```

Cada objeto instanciado podrá hacer uso de las funciones

```js
cusroJS.agregarLeccion("Intro a JS");
cusroJS.agregarLeccion("Variables");
cusroJS.agregarLeccion("Tipos de datos");
```

# Getters and setters

Los getters y setters son funciones para acceder y modificar las propiedades.

Por convencion en JS, cuando queramos hacer una propiedad privada, le pondremos `_` al prinicipio para indicar que es privada. Aunque en JS no exista tal funcion, y es posible saltarse facilmente esta restriccion.

Accediendo directamente a la propiedad del objeto, podemos asignarle cualquier valor.

```js
cursoJS._dificultad = 7;
```

```js
class Curso {
  constructor(titulo, dificultad) {
    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = [];
  }

  get dificultad() {
    return this._dificultad;
  }

  set dificultad(dificultad) {
    if (dificultad >=0 && dificultad <= 5>) {
        this._dificultad = nuevaDificultad;
    } else {
        console.log("No hago nada")
    }
  }
}
```

# Metodos estáticos

La palabra clave static define un método estático para una clase. Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase.

Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

Los declaramos dentro de la clase.

## Propiedad estatica

```js
static BASE_URL = 'cursos.com/cursos';
```

## Metodo estatico

```js
static saludar() {
  console.log("Saludar");
}
```

## Acceso a propiedades/metodos estáticos

```js
console.log(cursoJs.BASE_URL); // no existe en el objeto
console.log(Curso.BASE_URL); // existe en la clase
```

## Mas ejemplos

### Date

Para objetener la fecha actual no es necesario instanciar ningun objeto `Date`.

Podemos usar simplemente el metodo estatico `now`

```js
Date.now(); // Obtiene la fecha actual del sistema
```

La clase `Number`, también posee un gran numero de propiedades y métodos estáticos

```js
Number.MAX_VALUE; // Valor mas grande que podemos escribir en Javascript
Number.parseInt; // Metodo estatico para convertir a integer
```
