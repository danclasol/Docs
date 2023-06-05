# Portals

Los portales proporcionan una alternativa para renderizar _jsx_ en cualquier nodo existente en el _DOM_, sin importar si pertenece o no a nuestra jerarquia del componente.

Nos permiten transportarnos a cualquier parte de nuestro _DOM_ y renderizar alli lo que queramos.

Nos permiten incluso renderizar _jsx_ fuera del `div=root` en el que renderizamos nuestra aplicacion.

## createPortal

### Parameters

- children: Anything that can be rendered with React, such as a piece of JSX (e.g. <div /> or <SomeComponent />), a Fragment (<>...</>), a string or a number, or an array of these.

- domNode: Some DOM node, such as those returned by document.getElementById().

  - The node must already exist. Passing a different DOM node during an update will cause the portal content to be recreated.

- key (optional): identificador unico para el portal.

```js
createPortal(children, domNode, key?)
```

Creamos el nodo donde se ubicará el portal.

```html
<body>
  <div id="root"></div>
  <div id="portal"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

Creamos el portal desde cualquier nodo y lo añadimos al nodo `portal` creado en `App.jsx` (o en cualquier parte desde donde creamos el portal)

Este `createPortal` devuelve un nodo, que despues podra ser incluido en el render de la App

```js
const App = () => {
  const nodo = createPortal(
    <h1>Esto es un portal</h1>,
    document.getElementById("portal")
  );

  return (
    <>
      {portal}
      <h1>Esto es mi aplicacion</h1>
    </>
  );
};
```

Aunque hayamos añadido el nodo en App por encima de ese `h1`, con `createPortal` lo que conseguimos es que el nodo en vez de renderizarse en otra parte, lo haga en el `div='portal'`.

Este `{portal}` se puede colocar en cualquier componentes que siempre se va a renderizar en el `div='portal'`.

## Funcionamiento

Su funcionamiento es diferente al de `createRoot`, este sobrescribe todo lo que haya en el `div='root'` y lo sustituye por el nodo que le pasemos a la funcion.

Mientras que el `createPortal`, no sobreescribe nada de lo que haya en el `div='portal'`, si no que va añadiendo elementos/nodos al `div` segun vayan creandose.

Se añaden siguiendo el orden en el que se hayan añadido.

# Eventos en portales

Aunque se renderice fuera del nodo `root`, el nodo portal forma parte del virtual DOM. Es decir, es un nodo especial que estando dentro del virtual DOM ocupa un sitio distinto en el DOM.

En este ejemplo, podemos ver que el portal funciona como cualquier otro nodo. Podemos llamar al evento `onClick` del `div` aunque realmente en portal este renderizado en otro sitio del DOM

```js
const App = () => {
    const portal = createPortal(
        <button>Portal</button>
        document.getElementById('portal')
    );

    return <div onClick={() => console.log('Click en el div')}>{portal}</div>
}
```

Los eventos son gestionandos directamente por React y no por el navegador. Aunque intentan que se parezcan los mas posible, al final los que se imponen siempre son los eventos del Virtual DOM.

Por lo que aunque podamos poner el `portal` en cual parte, habrá que tener cuidado con los eventos, ya que podremos disparar algun evento desde el portal y que se propage al resto de nodos, pensando que estan en nodos disintos.

# Ventajas

- Permiten renderizar fuera de la jerarquía del componente.
- Evitan renderizados innecesarios.
- Gestion declarativa del DOM, React se encarga de crear y manipular los nodos.

# Desventajas

- Obliga a usar createPortal en cada nodo.
- Obliga a retornar el portal como parte del JSX, lo que puede provocar que propagemos algun evento hacia otro nodo por error.

# Utilidades

## Modificar etiquetas meta

Son utiles para modificar las etiquetas <meta> de un html.

```js
const HeadPortal = () => {
  createPortal(
    <>
      <title></title>
      <meta name="description" content="LearnThis academy"></meta>
    </>,
    document.head
  );
};
```

## Creacion de modales

Los modales son elementos que tienen que superponerse a todo el resto de elementos y se consigue de una forma muy facil si lo incluimos debajo del nodo raiz de la aplicación.

```html
<body>
  <div id="root"></div>
  <div id="modal"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

Lo colocamos debajo del nodo raiz de modo que tenga prioridad sobre el y asi no tener que estar lidiando con problemas de superposicion de elementos en css.

A estos modales recibiran una gran cantidad de contenido, ya sea formularios o cualquier otro elemento en jsx.

Por esta razon no es posible realizar modales con custom events, ya que con estos solo podemos pasar informacion muy sencilla de un componente a otro
