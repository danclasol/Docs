# Custom events

Mecanismo para emitir eventos personalizados que podemos usar, entre otras cosas, para comunicarnos entre componentes.

No es ninguna caracteristica de React, si no de JavaScript.

Alternativa a los portales, ya que permite el envio de informacion entre componentes que no esten en el mismo nodo del _DOM_.

Sin embargo, solo es recomendable para enviar elementos muy sencillos, como alguna cadena u objeto con propiedades primitivos.

## Ejemplo creacion

Creamos un event handler para el evento `learnthis`

```js
const myHandler = (ev) => {
  console.log(ev.detail);
};

document.addEventListener("learnthis", myHandler);
```

Cremos y lanzamos el evento `learnthis` e incluímos en `detail` la informacion

```js
const myEvent = new CustomEvent("learnthis", {
  detail: "LearnThis event!",
});

document.dispatchEvent(myEvent);
```

# Ventajas

- Permiten la comunicación entre componentes sin estados.
- Evitan renderizados innecesarios.
- Permiten saltarse la jerarquía del vitual DOM.

# Desventajas

- La información que trasmite el evento es muy limitada, solo enviar valores primitivos o objetos de propiedades primitivos.
- Es una gestion imperativa que debe ser evitada en React.

# Utilidades

- Componentes genericos (alertas, notificaciones, etc)
- Situaciones muy repetitivas
- Información muy limitada (no enviar codigo _js_ ni _jsx_)
- Siempre como ultima opción, ya que estamos saltandonos la gestion declarativa de React

# Ejemplo

Ejemplo de comunicacion mediente custom events

### Componente emisor de eventos

```js
const Listener = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const handleMessage = (ev) => {
      setMessage(ev.detail);
    };

    document.addEventListener("showMessage", handleMessage);

    return () => document.removeEventListener("showMessage", handleMessage);
  }, []);

  return <h1>{message || "Esperando mensaje..."}</h1>;
};
```

### Componente receptor de eventos

```js
const Emitter = () => {
  <button
    onClick={() => {
      const event = new CustomEvent("showMessage", { detail: Math.random() });

      document.dispatchEvent(event);
    }};
  >
    Emitir
  </button>;
};
```

```js
const App = () => {
    return (
        <>
        <Listener />
        <Emiter />
    )
}
```
