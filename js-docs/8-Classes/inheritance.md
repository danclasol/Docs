# Herencia

La herencia nos permite que una clases pueda obtener las funcionalidades de otra clase padre.

Esto es una util herramienta que permite reusar código.

## Ejemplo

Esta seria nuestra clase padre

```js
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`Hola, soy ${this.nombre}`);
  }

  login(email, password) {
    return this.email === email && this.password === password;
  }
}
```

Con la palabra clave extends podemos crear una subclase a partir de otra clase.

Una clase solo puede hereder de una clase padre.

```js
class Alumno extends Usuario {
  constructor(nombre, email, password) {
    super(nombre, email, password);
    this.cursos = [];
  }

  agregarCurso(curso) {
    this.cursos.push(curso);
  }
}
```

Y así instanciamos los objetos de clase Alumno

```js
const pablo = new ALumno("Pablo", "pablo@email.com", "pablo123");
const jose = new Alumno("Jose", "jose@email.com", "jose123");
```

Con el `instanceof` podemos ver

```js
console.log(pablo instanceof Usuario); // true
```

console.log(pablo instanceof Usuario); // true

# `super`

Cuando heredamos una clase tenemos la obligacion de llamar al constructor de la clase padre.

Para ello usaremos la keyword `super`. Tendremos que pasarle las propiedades necesarias para el constructor de la clase padre

```js
super(nombre, email, password);
```

# Sobreescribir métodos

Podemos sobreescribir una propiedad o un método de la clase padre, para que en la clase hija tenga una funcionalidad distinta

Tenemos que declarar en el hijo la misma funcion en el que tiene el padre.

```js
 saludo() {
    console.log(`Hola alumno, soy ${this.nombre}`);
  }
```

De esta manera si llamamos a la funcion saludo(), desde una instancia del hijo, se ejecutará el método sobreescrito del hijo y no el del padre

```js
alumno.saludo(); // Se ejecutará el método sobreescrito
```

Tambien podemos hacer uso del metodo del padre. Para que así, se ejecute el metodo del padre, dentro del metodo sobreescito

```js
 saludo() {
    console.log(`Hola alumno, soy ${this.nombre}`);

    return super.saludo();
  }
```

# Prototype

En lo que a herencia se refiere, JavaScript sólo tiene una estructura: objetos.

Cada objeto tiene una propiedad privada (referida como su `[[Prototype]]`) que mantiene un enlace a otro objeto llamado su prototipo.

Ese objeto prototipo tiene su propio prototipo, y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es null.

Por definición, null no tiene prototipo, y actúa como el enlace final de esta cadena de prototipos.

En el ejemplo de Usuario y Alumno sus propotipos serian los siguientes

- Alumno:

```json
{
  "nombre": "Pablo",
  "email": "pablo@email.com",
  "password": "pablo123",
  "cursos": [],
  [[Prototype]]: Alumno
    [[Prototype]]: Usuario
        [[Prototype]]: Object
}
```

- Usuario: tiene como Prototype -> Usuario

```json
{
  "nombre": "Pablo",
  "email": "pablo@email.com",
  "password": "pablo123",
  [[Prototype]]: Usuario
    [[Prototype]]: Object
}
```

Casi todos los objetos en JavaScript son instancias de Object que se sitúa a la cabeza de la cadena de prototipos.
