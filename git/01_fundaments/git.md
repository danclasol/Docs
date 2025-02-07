# Control de versiones

Un control de versiones es un sistema que registra cada cambio que se realiza
en el código fuente de un proyecto.

Permite:

- tener una copia de seguridad de los cambios

- conocer todos los cambios producidos en los ficheros y saber quién lo hizo y cuándo

- colaboracion entre varias personas en el desarrollo de una misma aplicación

# Git

_Git_ es un un sistema distribuido de control de versiones, gratuito y de código abierto.

- Bajo licencia _GPLv2_.
- Diseñado originalmente por _Linus Torvalds_, el creador de _Linux_.

# Fundaments

## Repositories

Un repositorio es una carpeta en la que se almacenan las diferentes versiones de los ficheros de un proyecto y el histórico de los cambios que se han realizado en ellos.

Los repositorios pueden ser:

- _locales_: localizados en nuestro ordenador
- _remotos_: ubicados en un servidor externo
  - permiten que otras personas puedan hacer cambios en el proyecto, que sean visibles y que puedan ser sincronizados por otros usuarios

## Branches (ramas)

Una rama es simplemente una versión de la colección de directorios y archivos del
repositorio. Por lo que partiendo de un mismo código, se generan diferentes ramas.

Esto sirve para aislar el trabajo de cada persona y que, una vez concluido, se pueda integrar en el tronco de nuestro repositorio que será, dicho de otro modo, la rama principal.

### Rama `main`

Cada repositorio tiene, al menos, una rama principal. Normalmente a esta rama
se le llama `main` o `master`.

La rama principal de un repositorio y normalmente se crea al iniciar un repositorio.

Se suele llame _master_ por una razón histórica, pero puede asignarsele otro nombre. En la actualidad servicios como _GitHub_ o _GitLab_ recomiendan que la rama principal sea llamada `main`.

## Status

Al usar _Git_, los archivos del proyecto se puede encontrar en uno de los siguientes estados, que representan el ciclo de vida de los archivos en el repositorio.

- `modified`: El archivo contiene cambios pero todavía no han sido
  marcados para ser confirmados.
  - Se encuentra en el directorio de trabajo
- `staged`: Son los archivos que han sido modificados en el directorio
  de trabajo y se han marcado como preparados para ser confirmados en el
  repositorio local.
  - Se encuentran en un área temporal transitoria
  - Esta acción recibe el nombre de `add`
- `committed`: El archivo se encuentra grabado en el repositorio
  local.
  - Esta acción recibe el nombre de `commit`
- `ignored`: se puede marcar los ficheros para que dejen de estar disponibles en el directorio de tu proyecto, en realidad son invisibles para Git.
  - Estos ficheros quedan fuera del flujo de control y no son afectados por los estados de modificación, preparación y confirmación
