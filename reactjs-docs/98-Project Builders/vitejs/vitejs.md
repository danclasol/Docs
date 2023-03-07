# Vite

Herramienta para crear projectos con Javascript

```
 npm init vite@latest
```

## Ventajas

Diferencias con _CRA_

- No genera el bundle.js en desarrollo
- No contiene ninguna librería inncesaria, por lo que el proyecto pesa muy poco
- Muy rapido de crear y de ejecutar

# Transpilador y empaquetador

Utiliza _ESBuild_, que es un transpilador y un empaquetador, que realiza la mayoria de tareas.

Existen ciertas tareas que todavía _ESBuild_ no tiene la compatibilidad necesaria, para estos casos usa _Rollup.js_.

Desde la versión v4, se ha sustituido _Babel_ por _SWC_.

# JSX

En Vite, para indicar los ficheros que contienen codigo JSX deben tener la extensión `.jsx`, de modo que la transpilación mirará solo estos arcchivos del proyecto.

# Configuracion Vite

Tenemos el fichero de configuracion `vite.config.js`, en el que podemos configurarlo todo del transpilador, empaquetador, etc.

Funciona a base de plugins que nos proporcionan una configuracion por defecto sencilla.

A estos plugins podremos pasarle parametros para sobreescribir configuraciones por defecto.

Por defecto, nos configura el plugin para un projecto generico de React

```js
export default defineConfig({
  plugins: [react()],
});
```

# Dev server

Tenemos disponible las siguientes formas de arrancar el proyecto.

## Generar version desarrollo

Genera un servidor en local para ejecutar la aplicacion en desarrollo.

```
npm run dev
```

## Generar version Produccion

Genera la carpeta `dist` con los ficheros empaquetados. En esta carpeta encontraremos los siguientes ficheros minificados y ofuscados:

- `vendor.XXXXX.js` contiene codigo de la libreria de react y react dom
- `index.XXXXX.js` contiene todo nuestro código
- `index.XXXXX.css` contiene todo nuestro codigo css
- ficheros estaticos como imagenes, etc

```
npm run build
```

## Generar version Preview

Genera un servidor en local para comprobar que la version de produccion funciona correctamente.

```
npm run preview
```

## Prioridad servidor

Este servidor se comportará de la siguiente manera cuando le pasemos una ruta:

1. Buscar ficheros estaticos
   - Si hemos indicado una extension, y no existe el fichero estático devuelve Error 404
2. Si no ha encuentrado ningun fichero estático, entonces lo considera como una página
   - Si existe una pagina, la devuelve
   - Si no existe ninguna página con esa ruta devuelve `index.html`, como en cualquier página web

\* Si tenemos un directorio llamado _public_, este tendrá prioridad sobre los demás directorios.

En esta carpeta deberemos colocaremos todos los ficheros estaticos de nuestros proyecto, de modo que asi esten disponibles tanto en la version desarrollo como en la version de producción.
