# Webpack

_Webpack_ es un empaquetador o _bundle_ que coge todos los archivos de tu proyecto y los agrupará en un único archivo que contendrá toda la lógica y los recursos de nuestro proyecto.

# Finalidad

- Eliminación de recursos innecesarios: solo agrupará recursos utilizados
- Control del procesamiento de los recursos: Podemos controlar por ejemplo que las imágenes se codifiquen en base64, convertir archivos sass en CSS vanilla, minimizar el HTML…
- Despliegue a producción estable: Es imposible desplegar el proyecto si faltan estilos, scripts o imágenes, ya que el propio Webpack controla el grafo de dependencias.
- Optimización del proyecto: Desde Webpack 4 tenemos un modo de producción que tiene como objetivo minimizar el tamaño del paquete, optimizar el código en tiempo de ejecución, impedir la exposición de código fuente o rutas y facilidad en el acceso a recursos.
