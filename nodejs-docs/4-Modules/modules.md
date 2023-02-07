# Modules

Un módulo es una parte del código la cual puede ser reutilizado por otros modulos

Los módulos nos permiten:

- Encapsular funcionalidades e incrementar reusabilidad
- Mejorar la estructura de nuestros proyectos
- Mejorar la seguridad, solo usaremos el modulo necesario

## Tipos

Los módulos pueden ser de 3 tipos:

- **Modulos core**: funcionalidades nativas de Node.js.
  - Se instalan con Node.js
  - Por ejemplo: util, readline, etc
- **Modulos locales**: código propio en archivos
  - Modulos con nuestro código
- **Modulos externos**: código de terceros, dependencias
  - Se instalan con la ayuda de `npm`

# Sistema de Módulos

Nos permiten comunicar los módulos entre sí. De modo que, podemos reutilizar una funcionalidad de un modulo en otro distinto. Esto es lo que se denomina importar y exportar

Existen multitud de sistemas pero los mas importantes en el entorno de Node.js son:

## **CommonJs (CJS)**

Sistema por defecto de _Node.js_ desde su primera version.

- No necesita configurar nada para usarlo
- Carga modulos de forma sincrona
- Utiliza `require` para importar y `module.export` para exportar modulos
- No es compatible con navegadores de forma directa

## **ECMAScript Modules (ESM)**

Sistema estándar oficial de JavaScript para gestion de modulos. Propuesto con la especificacion ECMAScript 2015.

- Necesitamos indicar al proyecto que se va a usar este sistema.
- Carga modulos de forma sincrona y asincrona
- Utiliza `import` para importar y `export` para exportar modulos
- Compatible con navegadores

_ECMAScript_ puede parecer ser la opcion mas recomendada ya que es estandar oficial, y aunque cada vez soporta mejor ESM, aún el soporte no es completo y sigue estando presente en un gran número de librerías.

# Configurar el sistema de módulos en nuestro proyecto

Lo podemos configurar en el `package.json`, añadiendo una línea en el fichero el _type_

### CommonJS

CommonJs, se aplicará, por defecto, si no escribimos ninguno.

```json
type: "commonjs"
```

### ECMAScript

Para aplicar añadir `module` como tipo

```json
type: "module"
```

Tambien se puede forzar el sistema de módulo de un fichero independiente del sistema seleccionado en el `package.json`.

Nombrando al fichero con la extension del sistema de modulo correspondiente

- operaciones.cjs (commonjs)
- operaciones.mjs (module)
