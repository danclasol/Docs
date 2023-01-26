# HTTP - Hypertext Transfer Protocol (HTTP)

Es un protocolo que nos permite realizar una petición de datos y recursos.

Es la base de cualquier intercambio de datos en la web.

## Características

- Arquitectura basada en cliente-servidor
- Protocolo sin estado, no guarda ningún dato (estado) entre dos peticiones.
- Se puede usar sobre cualquier cada de transporte (TCP/IP, UDP, etc)

## Modelo cliente-servidor

En los protocolos basados en el modelo cliente-servidor, como es el caso del HTTP, una sesión consta de tres fases:

- El cliente establece una conexión TCP (o la conexión correspondiente si la capa de transporte corresponde a otro protocolo).
- El cliente manda su petición, y espera por la respuesta.
- El servidor procesa la petición, y responde con un código de estado y los datos correspondientes.

# Estructura Peticion HTTP

## Petición HTTP

Un HTTP request se compone de:

- `Method`: GET, POST, PUT, etc. Indica que tipo de request es.
- `Path`: la URL que se solicita, donde se encuentra el resource.
- `Protocolo`: contiene HTTP y su versión, actualmente 1.1.
- `Headers`: contienen información sobre el HTTP request y el navegador
- `Body`: Si se envía información al servidor a través de POST o PUT, ésta va en el body.

## Respuesta HTTP

Una vez que el navegador envía el HTTP request, el servidor responde con un HTTP response, compuesto por:

- `Protocolo`: Contiene HTTP y su versión, actualmente 1.1.
- `Status code`: El código de respuesta, por ejemplo: 200 OK, 404 Not Found, etc.
- `Headers`: Contienen información sobre el software del servidor.
- `Body`: Si el servidor devuelve información que no sean headers ésta va en el body.

# AJAX (Asyncrhornous Javascript and XML)

Se tratan de peticiones HTTP asincronas realizadas desde Javascript, de forma que son transparentes para el usuario.

Esto permite cargar contenido de forma parcial, sin necesidad de recargar toda la página.

Actualmente, sobre todo en Javascript, se utiliza más el formato JSON, aunque se sigua utilizando el termino `AJAX`.

## Métodos de petición AJAX

Existen varias formas de realizar peticiones HTTP mediante AJAX:

- `XMLHttpRequest (XHR)`: El más antiguo, y también más verbose. Nativo. Ver XMLHttpRequest
- `fetch`: Nuevo sistema nativo de peticiones basado en promesas. Nativo. Ver fetch
- `Axios`: Librería basada en promesas para realizar peticiones en Node o en navegadores. Axios
- `superagent`: Librería para realizar peticiones HTTP tanto en Node como en navegadores. superagent
- `frisbee`: Librería basada en `fetch`. Suele usarse junto a React Native. frisbee
