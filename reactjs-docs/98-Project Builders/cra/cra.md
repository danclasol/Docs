# create-react-app

Herramienta para crear proyectos en React.

Mantenido por Facebook.

```
npm create-react-app
```

No recomendable actualmente, debido:

- Es muy lento:

  - Creacion del proyecto tarda bastante.
  - Tiempo excesivo de arranque de aplicacion en desarrollo.
    - Debido a que se genera un _bundle_ de la aplicación, cosa que solo sería necesaria en un entorno de produccion.
    - Respuesta a la detección de cambios requiere 0.5-1s, ya que tiene regenerar parte del _bundle_

- El proyecto es muy pesado: 250Mb aprox

- Genera muchos ficheros inncesarios.

  - Por ejemplo: Te presupone a que uses una librería de testing.

- Falta de ficheros de configuración
  - No tenemos manera de modificar configuraciones como de babel o webpack.
  - Viene con un gran numero de configuraciones establecidas para funcionalidades que posiblemente no utilicemos (Typescript, scss, etc)

## Transpilador y empaquetador

Utiliza _Webpack_, como empaquetador y Babel como transpilador.
