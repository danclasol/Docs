# Spring Web MVC

Spring MVC Web is a module of the Spring framework dealing with the Model-View-Controller or MVC pattern. 

- combines all the advantages of the MVC pattern with the convenience of Spring
- implements MVC with the front controller pattern using its DispatcherServlet


All incoming HTTP requests are handled by a single `DispatcherServlet`, which coordinates the request processing workflow.

```text
Client
   │
   ▼
DispatcherServlet
   │
   ▼
HandlerMapping
   │
   ▼
HandlerAdapter
   │
   ▼
Controller
   │
   ├── ViewResolver ─────► View (MVC)
   │
   └── HttpMessageConverter ─► HTTP Response (REST)
```

# MVC Components

## MVC

Spring Web MVC implements the **Model-View-Controller (MVC)** architectural pattern.

- **Model**: Represents the application's data.
- **View**: Renders the user interface.
- **Controller**: Handles HTTP requests and coordinates the application flow.

## DispatcherServlet

The DispatcherServlet acts as the main controller to route requests to their intended destination. 

DispatcherServlet is the central component of Spring MVC.

It acts as the **Front Controller** and is responsible for:

- receiving incoming HTTP requests
- locating the appropriate controller
- invoking the handler method
- resolving a view or writing the HTTP response
- handling exceptions

## `HandlerMapping`

Maps an incoming HTTP request to the appropriate controller method.

Spring provides several `HandlerMapping` implementations, with `RequestMappingHandlerMapping` being the default for annotation-based controllers.

## `HandlerAdapter`

Invokes the controller method selected by the `HandlerMapping`.

It allows Spring MVC to support different types of handlers through a common interface.

For annotation-based controllers, Spring uses `RequestMappingHandlerAdapter`.

## `ViewResolver`

Resolves the logical view name returned by a controller into an actual view.

For example:

```java
return "home";
```

may be resolved to:

```text
/WEB-INF/views/home.jsp
```

or

```text
templates/home.html
```

depending on the configured view technology.

## `HttpMessageConverter`

Converts HTTP request and response bodies to and from Java objects.

It is used by annotations such as:

- `@RequestBody`
- `@ResponseBody`
- `@RestController`

For example, a JSON request body can be converted into a Java object, and a Java object can be serialized back to JSON.