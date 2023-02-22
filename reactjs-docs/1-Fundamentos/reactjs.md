# React.js

Es una biblioteca de Javascript de código abierto para crear interfaces de usuario.

Desarrollada en en 2011 por Jordan Walke, ingeniero de*Facebook*, que buscaba una forma optima y rápida de crear interfaces de usuario complejas.

Es muy popular y actualmente usado por muchas empresas como: Facebook, Netfilx, Airbnb, Twitter, Instagram, etc.

# Caracteristicas

Las características principales de React son:

## Enfoque declarativo

React es declarativo, permite al desarrollador abstraerse del como realizar una tarea y centrarse solo en que se debe realizar.

## Basada en componentes

La interfaz se divide en componentes independientes, que contienen su propio estado.

Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

Esto permite, construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables.

## Permite crear interfaces de cualquier tipo

Es posible usarlo para todo tipo de aplicaciones:

- web: ReactDOM
- movil: React Native
- escritorio: electron

## Unidireccional

React es unidireccional, los datos solo fluyen de los componentes padres a los componentes hijos, pero no hacia arriba.

## Virtual DOM

React hace uso del VirtualDOM para optimizar la renderización del DOM, permitiendo solo actualizar la parte del DOM afectada por el cambio.

# Librerias

Las librerias de React estan separadas en 3 grupos:

### React

- Permite definir componentes y todo su comportamiento.
- Se puede usar tanto con ReactDOM como ReactNative.

### ReactDOM

- Libreria de React encargada de gestionar el Virtual DOM.
- Se encarga de todas las tareas asociadas al renderizado de todos estos componentes en el navegador.

### React Native

- Permite crear aplicaciones moviles usando componentes de React.
- Se encarga de todas las tareas asociadas al renderizado de todos estos componentes en el movil.
