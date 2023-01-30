# HTTP Methods

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.

# GET

Requests a representation of the specified resource. Requests using GET should only retrieve data.

## Request

```
GET / index.html
```

### Responses

- `200: OK` -> The resource has been fetched and is tansmitted in the message body

# POST

Submits an entity to the specified resource, often causing a change in state or side effects on the server.

The difference between `POST` and `PUT` is:

- Calling `PUT` several times has the same effect
- Calling `POST` several times should create a new resource each time

## Request

```js
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/json
Content-Length: 27
```

## Body

```js
{
  name: "John",
  surname: "Smith";
}
```

### Responses

- `200: OK` -> The resource describing the result of the action is transmitted in the message body. Can carry a payload body with the resource created.
- `201: Created` -> The request has succeeded and has led to the creation of a resource. Can carry a payload body with the resource created.

# PUT

Replaces all current representations of the target resource with the request payload.

This method is idempotent, that means that any number of repeated, identical requests will leave the resource in the same state.

## Request

```js
PUT /new.html HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 105
```

## Body

```js
{
  id: 1234,
  name: "John",
  surname: "Smith";
}
```

## Response

- `200: OK` -> The request has succeeded. Can carry a payload body with the resource created.
- `201: Created` -> The request has succeeded and has led to the modification of a resource. Can carry a payload body with the resource created.
- `204: No Content` -> Idem as `201`. The response does not carry a payload body.

# PATCH

Applies partial modifications to a resource.

## Request

```js
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100
```

## Body

```js
[description of changes]
```

## Response

- `200: OK` -> The request has succeeded. Could have contained a payload body.
- `204: No Content` -> Idem as `201`. The response does not carry a payload body.

# DELETE

Deletes the specified resource.

## Request

```js
DELETE /file.html HTTP/1.1
Host: example.com
```

## Response

- `200: OK` - The request has succeeded.
- `202: Accepted` - The action will likely succeed but has not yet been enacted.
- `204: No Content` - The request has succeded and no further information is to be supplied.

# HEAD

Requests the headers that would be returned if the HEAD request's URL was instead requested with the `HTTP GET` method.

For example, if a `URL` might produce a large download, a HEAD request could read its Content-Length header to check the filesize without actually downloading the file.

A response to a `HEAD` method should not have a body

## Request

```js
HEAD / index.html;
```

### Responses

- `200: OK` -> The representation headers are included in the response without any message body

# CONNECT

Establishes a tunnel to the server identified by the target resource.

## Request

```js
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

# OPTIONS

Describes the communication options for the target resource.

## Request

```js
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

# TRACE

Performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism.

## Request

```js
TRACE / index.html;
```

## Responses

- `200: OK` -> The message body contains the request message as received by the server.
