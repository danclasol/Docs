# Rest (**RE**presentational **S**tate **T**ransfer)

Arquitectura restrictiva que describe la comunicacion entre 2 procesos basados en el protocolo HTTP.

Sirve para obtener y generar datos y operaciones, devolviendo estos datos en formatos muy especificos, como _XML_ y _JSON_.

## Restricciones

- Separacion de conceptos - Cliente / Servidor: Independencia entre los procesos

- Stateless: solicitudes independientes (sin sesiones)

- Cache: la informacion se puede cachear.

- Interfaz uniforme: independiente del cliente, misma solicitud, misma respuesta

- Multicapa: dividir el servidor en capas (servidor-BBDD, microservicios)

- Código en demanda (opcional): capacidad de ampliar funcionalidades del cliente mediante el envio de codigo desde el servidor.

# API REST o API RESTful

Siendo una API (Application Programming Interface) una interfaz de programacion de aplicaciones, una API REST es una API que esta diseñda siguiendo los principios y restricciones de la arquitectura REST.

Dependiendo del grado de cumplimiento de las reglas de la arquitectura de podemos hablar de:

- _RESTful_ cuando implementamos completamente las restricciones de REST
- _RESTless_ cuando no lo seguimos estrictamente.

```
https://api.tudominio.com/v1/users/1
```

- v1: version
- users: recurso
- 1: ID

## Métodos HTTP

Se apoya en los métodos básicos de HTTP:

- GET: obtener recurso

  - Idempotente
  - No puede tener body
  - Respuesta
    - Status code: _`200 OK`_
    - body: `{userId:1, name:'Peter'}`

- POST: crear recurso

  - No idempotente
  - Body con los datos
  - Respuesta:
    - Status code: _`201 Created`_
    - sin body

- PATCH: actualizar recurso (parcial). Modificar solo algunos campos

  - No idempotente
  - Body con los datos
  - Respuesta
    - Status code: _`204 No Content`_
    - sin body

- PUT: actualizar / crear un recurso (completo)

  - Idempotente
  - Body con los datos
  - Respuesta
    - Status code: _`204 No Content`_
    - sin body

- DELETE: eliminar un recurso
  - No idempotente
  - Body opcional
  - Respuesta
    - Status code: _`204 No Content`_
    - sin body

# Alternativas a REST

- SOAP (Simple Object Access Protocol): protocolo de comunicacion basada en XML.

- GraphQL: Lenguaje de consulta y manipulación de datos para APIs.
