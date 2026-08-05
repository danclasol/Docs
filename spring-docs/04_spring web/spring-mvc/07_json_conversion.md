# HTTPMessageConversion

Spring MVC uses HTTP message converters to read HTTP request bodies and write HTTP response bodies.

A message converter transforms the HTTP body into a Java object (deserialization) or converts a Java object into the HTTP body (serialization).

The converter is selected automatically based on the request's Content-Type and the client's Accept header.

```
TTP Request
      │
      ▼
Content-Type
      │
      ▼
HttpMessageConverter
      │
      ▼
Java Object
```

```
Java Object
      │
      ▼
HttpMessageConverter
      │
      ▼
Content-Type
      │
      ▼
HTTP Response
```

## HttpMessageConverter

Strategy interface used by Spring MVC to convert HTTP request and response bodies.

Spring automatically selects the appropriate implementation according to the media type.

## JSON Conversion

Spring uses the Jackson library to serialize Java objects into JSON and deserialize JSON into Java objects.

Spring uses the implementation of HttpMessageConverter, `JacksonJsonHttpMessageConverter` to read and write json.

### Deserialization

Incoming JSON is converted into a Java object.

```
POST /users
Content-Type: application/json
```
```json
{
    "name": "John",
    "age": 25
}
```

- Controller

```java
@PostMapping("/users")
public User create(@RequestBody User user) {
    return user;
}
```

- Result

```
User {
    name = "John",
    age = 25
}
```

### Serialization

Returned Java objects are converted into JSON.

```java
@GetMapping("/users/{id}")
public User getUser() {

    return new User("John", 25);

}
```
- Response

```json
{
    "name": "John",
    "age": 25
}
```

## XML Conversion

Spring can also serialize and deserialize XML using the Jackson XML module.

Spring uses the implementation of HttpMessageConverter, `JacksonXmlHttpMessageConverter` to read and write json.

By default, Spring only suppoerts Json, but can be set to accept xml

```xml
<dependency>
    <groupId>tools.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```

## Media Types

A media type (also known as a MIME type) identifies the format of the HTTP message body.

Spring uses media types to determine which `HttpMessageConverter` should process a request or response.

Common media types include:

- `application/json`: JSON
- `application/xml`: XML
- `text/plain`: Plain text
- `text/html`: HTML
- `multipart/form-data`: File uploads

Media types can be declared explicitly using the consumes and produces attributes.

## Content Negotiation

Content negotiation is the process used by Spring MVC to determine the format of the HTTP request and response.

It relies primarily on two HTTP headers:

- `Content-Type`: indicates the format of the request body
- `Accept`: indicates the formats accepted by the client