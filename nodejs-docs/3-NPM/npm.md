# npm (Node Package Manager)

Sistema de gestion de paquetes y librerías por defecto de Node.js.

Este gestor se instala en nuestro equpo con Node.js.

# package.json

Es un fichero que contiene información acerca de tu proyecto (nombre, versión, etc) además de listar los paquetes de los que depende.

## Crear fichero package.json en nuestro proyecto

Podemos crear el fichero manualmente nombrandolo 'package.json'

O podemos utilizar el comando de npm para inicializar el proyecto. Deberemos abrir una terminal y situarnos donde en el directorio donde queramos crear el fichero.

```js
npm init
```

A continuación, nos preguntará las siguientes opciones para configurar el fichero:

- _name_: nombre del proyecto
- _description_: pequeña descripcion del proyecto
- _version_: version que lo normal es empezar por la 1.0.0
- _main_: punto de entrada de la aplicacion (index.js)
- _scripts_: comandos configurados para ejecutar scripts
- _keywords_: []
- _author_: autor del proyecto
- _license_: tipo de licencia del proyecto

Podemos usar el parametro `-y` para seleccionar automaticamente la configuracón por defecto.

```js
npm init -y
```

# package-lock.json

El fichero `package-lock.json` se generá automaticamente cada vez se instale, modifique o elimine alguna dependencia. Es decir, cada vez que con `npm` se modifique alguna carpeta del arbol `node_modules` o del `package.json`.

En este fichero se describe el arbol exacto de dependencias necesario para generar un arbol identico (mismas dependencias y versiones) al del proyecto original.

## Evitar problemas por versiones minor o fix

La finalidad de este fichero es evitar problemas causados por las actualizaciónes de las versiones minor o fix de alguna dependencia.

Por ejemplo, imaginemos que:

- En el `package.json` existe una dependencia de _express_ ^2.20.0.
  - Este simbolo `^` significa que se instale la version más reciente 2.XX.XX.
- Mas tarde, _express_ saca la versión 2.24.0.
  - Nuestro proyecto seguirá teniendo la versión instalada 2.20.0
- Otro desarrollador clona el repositorio del proyecto e instalará las dependencias del proyecto en su equipo.
  - Al ejecutar `npm install` obtendra la version mas reciente 2.24.0
- Con `package-lock.json` evitamos este comportamiento al actualizar versiones minos o fix, de modo que cuando alguien ejecute `npm install`, se examaninará este fichero e instalará la version exacta de los paquetes del fichero `package.json`. Lo que hace es verificar que package.json y package-lock.json están en sincronía.

# node_modules

Es un arbol de carpetas donde se guardan todas el código de las librerías instaladas para nuestros proyecto.

Hay que tener en cuenta que si una librería tiene alguna dependencias con otra librería, tambien se instalará en esta carpeta.

# Alternativas a NPM

Existen alterntivas a `npm`, las mas conocidas son las siguientes:

- YARN
