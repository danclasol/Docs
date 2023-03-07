# Renderizado incial

El ciclo de vida de una página web comienza en el momento que un cliente a traves de un navegador web realiza una petición a nuestro servidor, y este a su vez, responde devolviendo el `index.html`.

El navegador recibe este fichero y lo empieza a procesar. Antes de empezar a procesarlo, no existe todavía el VirtualDOM, y el DOM se encuentra vacío.

A continuación empieza a cargarse en el navegador el contenido del _HTML_

- Se creá el documento
  ```html
  <!DOCTYPE html>
  ```
- Se cargan las etiquetas del documento
  ```html
  <html>
    <head>
      ...
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.js"></script>
    </body>
  </html>
  ```
- Por último, una vez cargado todo el fichero, se ejecutá el script `main.js` que será el punto de entrada de React.

  Dentro de este fichero se realiza lo siguiente:

  - `createRoot`: crea la raiz donde se renderizará los componentes de React dentro de un elemento del DOM (id=root).

    ```js
    const container = ReactDOM.createRoot(document.getElementById("root"));
    ```

  - `render`: carga el componente que contendrá toda la aplicación en la raíz creada con _createRoot()_.
    En este punto, se creá el VitualDOM, y este posteriormente traslada los elementos al DOM, haciendo que se muestren así en el navegador.

    ```js
    container.render(<App />);
    ```

# Renderizado aplicacion React

El componente que hayamos cargado con `render` será el componente raíz del arbol que formá la aplicación de React.

Este componente raíz, al ser los componentes funciones, se ejecutará para renderizar su contenido.

```js
const App = () => <h1>Hello World</h1>;
```

Por lo que si dentro tenemos mas componentes, de forma recursiva se irán ejecutando todo el arbol de componentes desde los nodos padre hasta los hijos.

```js
const App = () => (
  <div>
    <h1>Hello World</h1>
    <UserPanel />
  </div>
);
```

Una vez que tengamos todos los nodos renderizados, ya estará disponible la primera version del VirtualDOM.

# Renderizado por cambio de estado

Un componente que tiene un estado, se renderiza partiendo del valor inicial de este estado.

Cuando cambiamos el estado de un componente, provocamos un nuevo renderizado, pero no de toda la aplicacion sino solo de una parte de ella.

Este nuevo renderizado se divide en 5 pasos:

1. React detecta a que nodo pertenece este estado que ha cambiado, es decir quien fue el que ejecute el setEstado(nuevo valor)

2. Se vuelve a ejecutar la funcion que define al componente que ha realizado el cambio.

   Solo se renderiza este componente, no la aplicacion entera

   Al igual que en el renderizado inicial, es recursivo, por lo que los componentes hijos tambien se renderizaran.

3. Con este nuevo objeto generado con el cambio, se calcula la diferencia con su nodo correspondiente del virtualDOM.

   React utiliza un algortimo llamado _dif_, para calcular las diferencias entre el nodo anterior y el nuevo.

4. Sustituir el nodo antiguo con el nodo nuevo, de modo que el VirtualDOM esta correctamente alienado con nuestra aplicacion.

5. Aplicar los cambios en el DOM.

   Despues ya estamos en el mismo momento que en el inicial
   React vuelve a ponerse a la espera de un nuevo cambio.

# Variables durante el render

Los componentes al ser funciones, se guardan en variables que se crearán cuando invoquemos a un componente y se destruiran cuando se desmonte el componente.

Cada vez que creamos un componente, estamos generando una nueva instancia del componente, y estamos ejecutando todo el código de la función del componente. Por eso debemos evitar colocar dentro de esta funcion cualquier variable que sea constante, ya que provacaremos que se cree la variable con cada ejecución.

En este ejemplo, por cada objeto Area, se creara una variable PI.

```js
const Area = ({ radio }) => {
  const PI = 3.14;
  const resultado = 2 * PI * radio;
  return <span>{resultado}</span>;
};

<Area radio={3}/> // Se crea variable PI
<Area radio={6}/> // Se crea variable PI
<Area radio={1}/> // Se crea variable PI
<Area radio={65}/> // Se crea variable PI
```

Estas variables constantes hay que colocarlas siempre fuera de los componentes. De esta forma solo se crea una vez.

```js
const PI = 3.14;

const Area = ({ radio }) => {
  const resultado = 2 * PI * radio;
  return <span>{resultado}</span>;
};
```
