# Agregar estilos a un componente

Existen las siguientes formas de aplicar estilos en _React_:

# Inline CSS

Añadir los estilos directamente en la propiedad _style_.

Forma no se recomienda. Solo usar en casos especificos en los que el estilo no pueda ir en un fichero css aparte.

```js
<div style={{ display: flex, alignItems: "center" }}></div>
```

# Fichero CSS

Forma mas sencilla de aplicar _CSS_, sin usar ningun tipo de herramienta.

Consite en tener los estilos en un fichero.

## Configuracion

1. Crear fichero css
2. Importamos el fichero en el componente
   ```js
   import "MyComponent.css";
   ```

## CSS Global

Por ejemplo, podemos asignar CSS global que afectara a todo los componentes del proyecto.

Por convencion se meteran los ficheros en `src/styles`.

Es habitual, establecer un fichero que resete las propiedades css necesarias, para que el aspecto de nuestra pagina web se igual en todos los navegadores.

Para ello, existen unos fichero ya creados que pueden usarse:

- _normalize.css_ -> fichero css que contiene todos los reset necesarios
- _modern-normalize.css_ -> igual que normalize.css pero con algunas mejoras

# CSS Modules

Sistema para crear ficheros _CSS_ que solo se apliquen a un componente.

Estos ficheros son procesados por el empaquetador, autogenerando un nuevo nombre a las clases _CSS_. Este nuevo nombre, se genera de forma que no exista ninguna clase igual en todo el proyecto.

## Configuracion

1. Crear fichero css module con el mismo nombre del componente
   ```
   MyComponent.module.css
   ```
2. Importar en el componente, el objeto con los estilos css.

   ```js
   import styles from "./MyComponent.module.css";
   ```

3. Este objeto contiene todas las clases css, por lo que podemos asignar clases a las etiquetas de la siguiente manera:

   ```js
   <div className={styles.containter}></div>
   ```

   Caso de que la clase tenga guiones

   ```js
   <div className={styles["container-light"]}></div>
   ```

   Mas de una clase

   ```js
   <div className={`${styles.container} ${styles.light}`}></div>
   ```

# SCSS y SASS

## Configuracion

1. Instalar SCSS/SASS en nuestros proyecto -> npm -i D sass
2. Crear los nombres de los fichero igual que en CSS modules -> MyComponent.module.scss
