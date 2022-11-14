# Cómo trabaja el navegador

Saber animar correctamente en CSS puede suponer la diferencia entre que tu sitio web se vea fluido o a tirones.

El trabajo que hace el navegador al leer el CSS se divide en 3 fases.

- Layout: Esta es la primera fase en la que el navegador calcula la geometría del sitio web para saber dónde se coloca cada elemento, esta fase es la que más recursos consume del navegador.

- Paint: Una vez que el navegador ha calculado el layout el siguiente paso es dibujar cada uno de los elementos en pantalla, este proceso consume menos recursos que la primera pero también es una tarea costosa para el navegador.

- Composite: La composición es una técnica para separar partes de una página en capas y pintar por separado las capas que deben ir aisladas. Esto se hace para evitar que el navegador tenga que calcular la fase de layout y paint si sucede algún cambio.

No todas las propiedades tienen que realizar este flujo, por eso es recomendable utilizar las propiedades correctas a la hora de animarlas, porque si hacemos animaciones que tengan que pasar por los 3 flujos podemos llegar a saturar la memoria del navegador y que el sitio web funcione a tirones o incluso que se quede bloqueado.

Para saber qué propiedades consumen más o menos recursos tenemos la web https://csstriggers.com/ y un plugin de VSCode con el mismo nombre que se basa en la información de esta web.

No es necesario memorizar nada, todo se puede resumir en: Siempre que necesites animar tamaño, posición o rotación, utiliza transform, visibilidad con opacity, todo lo demás con la propiedad correspondiente.
