# Module Bundlers (empaquetadores)

Son herramientas que nos permiten empaquetar (bundle) de forma rápida todo el código de nuestros projecto en un único fuchero, de tal forma que en el navegador pueda ser cargado como una única referencia.

Este bundle solo se carga en producción, no es necesario crearlo en la fase de desarrollo.

## Problemas que soluciona

Anteriormente para usar librerías teniamos 2 opciones:

- Descargar codigo a una carpeta (normalmente llamada vendors) y subirlo junto con nuestro codigo.
- Cargar librerias mediante las URL del CDN

Esto tenia los siguientes problemas:

- Todo se cargaba de una forma global, lo que podía provocar conflictos si una librería tenia el mismo nombre que una funcion de nuestros código

- Mantener la lista de librerías podía volverse complejo.

- La carga de la página se veía afectada ya que era necesario cargar varios archivos

# Tipos

# Bundlers en JS

- Webpack
- Parcel js
- Esbuild
- SWC
- Rollup.js
- Snowpack
