# PostCSS

Es una herramienta para la gestión del código CSS que permite una increíble cantidad de mejoras en los flujos de trabajo del desarrollador, conseguir todo tipo de optimizaciones en el código y una mayor compatibilidad en navegadores.

Técnicamente es un set de plugins escritos en Javascript (bajo la plataforma NodeJS) que permiten hacer transformaciones en el código CSS de los proyectos. Es decir a partir de un fichero CSS de entrada, obtenemos un CSS de salida, que lógicamente estará más optimizado o aumentará sus prestaciones por diversos motivos.

https://postcss.org/

# Plugins mas utilizados

### `PostCSSImport`

Permite realizar las importaciones del CSS que tenemos en archivos dispersos, uniendo todo su contenido en un mismo fichero. Como sabes, servir un único archivo CSS es una importante optimización, pero escribir el código en archivos separados aumenta considerablemente la facilidad de mantenimiento.

### `PurgeCSS`

PurgeCSS permite optimizar el CSS, eliminando de los ficheros que vamos a llevar a producción todas las reglas de estilos que no se usan en el proyecto. Este es un plugin esencial si trabajamos con cualquier framework CSS, ya que nos permite una radical optimización del código CSS.

# Setup

## Install Nodejs

Necesitamos tener instalador Node, la plataforma de ejecución de Javascript sobre la que está construido PostCSS.

## Iniciar el proyecto con npm

Tenemos que crear el fichero package.json para el proyecto.

```js
npm init -y
```

## Instalar PostCSS y PostCSS##CLI

Lo siguiente sera instalar las dependencias necesarias para trabajar con PostCSS.

Las instalaremos como dependencias de desarrollo, ya que en producción no se utilizan

```js
npm install -D postcss postcss-cli
```

## Instalar los plugins que necesitemos

```js
npm install -D autoprefixer
```

## Configurar PostCSS

Crearemos en el projecto un fichero llamado `postcss.config.js`, donde incluiremos todos los plugins que necesitemos

```js
module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({ stage: 0 }),
  ],
};
```

## Ejecutar PostCSS

Para poder lanzar los procesos de PostCSS tenemos que configurar los scripts npm necesarios, que se escriben en el archivo package.json en la propiedad «scripts»:

Hay que indicar lo siguiente:

- La ruta de origen del fichero a transformar
- `--output` u `-o`
- La ruta donde se pondrá el CSS transformado, una vez se le hyan pasado todos los plugins configurados.
- `--no-map` para deshabilitar que se realize el mapping (utilidad obsoleta hoy en día)

```js
"scripts": {
    "build": "postcss origen/css/style.css --output destino/css/style.css --no-map"
    // "build": "postcss origen/css/style.css -o destino/css/style.css --no-map"
}
```

Para ejecutar estos scripts lo hacemos desde la terminal, con el siguiente comando

```js
npm run build
```

# `Autoprefixer`

Autoprefixer permite aplicar los prefijos CSS que sean necesarios al código fuente, de modo que nos ahorra trabajo y mantiene una mejor compatibilidad con los navegadores actuales y antiguos. https://autoprefixer.github.io/

Ejemplo del código que genera autoprefixer.

Nosotros solo declaramos las propiedades CSS y autoprefixer se encargar de generar el código para que sea compatible con el resto de navegadores

```css
.example {
  display: grid;
  transition: all 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}
```

## Setup

Instalamos el paquete de autoprefixer

```js
npm install -D autoprefixer
```

Incluimos el plugin en el fichero de configuración de PostCSS

```js
module.exports = {
  plugins: [require("autoprefixer")],
};
```

Por defecto, solo esta configurado para que sea compatible con una serie navegadores. Sin embargo, podemos crear un fichero de configuración para indicar manualmente a autoprefixer las reglas para saber a que navegadores dar soporte.

Este fichero se tiene que llamar `.browserslistrc`.

En esta página https://browsersl.ist/#q=last+4+version, podemos ver los distintos valores que podemos indicar en este fichero y nos dice para que porcentaje de navegadores sera compatible con nuestra configuracion

Un ejemplo de configuración seria la siguiente:

- > 0.3% - navegadores utilizadas por mas del 0.3% del público mundial
- defaults - serie de configuraciones generales para paginas web
- last 2 versions - compatible con las 2 ultimas versiones del navegador
- not dead - excluir navegadores sin soporte oficial en los últimos 24 meses

```js
>0.3%, defaults, last 2 versions, not dead
```

# postcss-preset-env

Convierte propiedades nuevas de CSS en código compatible con la mayoría de navegadores actuales.
https://preset-env.cssdb.org/features/

Esto nos permite usar propiedades nuevas CSS sin miedo a que no sean compatibles con el resto de navegadores.

## Setup

Instalamos el paquete de postcss-preset-env

```js
npm install -D postcss-preset-env
```

Incluimos el plugin en el fichero de configuración de PostCSS

Podemos indicarle un serie de opciones:

- stage: version en la que se encuentra la nueva feature CSS en el proceso de implementacion en los standares de la web
- con stage: 0+ indicamos que sea compatible con todas las versiones

```js
module.exports = {
  plugins: [require("postcss-preset-env")({ stage: 0 })],
};
```

# `CSSnano`

Permite compactar y minificar el código CSS para que ocupe lo minimo posible al subirse a un entorno de producción.

```js
npm install -D cssnano
```

Incluimos el plugin en el fichero de configuración de PostCSS

```js
module.exports = {
  plugins: [require("cssnano")({ preset: "default" })],
};
```
