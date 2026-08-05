# Views

Spring MVC supports rendering server-side views using template engines such as Thymeleaf or JSP.

These component are used to pass data from controllers to views and are mainly intended for traditional MVC applications

>! *These components are generally not used in REST APIs, where controllers return data (such as JSON or XML) directly in the HTTP response body.*

## `@Model`

A container used to pass data from a controller to a view.

Attributes added to the model are available when the view is rendered.

```java
@GetMapping("/profile")
public String profile(Model model) {

    model.addAttribute("name", "John");

    return "profile";
}
```

In the view:

```html
<p th:text="${name}"></p>
```


## `@ModelAndView`

Represents both the model and the view returned by a controller.

- alternative to returning a view name and using a separate `Model` parameter

It combines:

- view name
- model attributes

```java
@GetMapping("/profile")
public ModelAndView profile() {

    ModelAndView mav = new ModelAndView("profile");
    mav.addObject("name", "John");

    return mav;
}
```

## `@ModelAttribute`

Binds request parameters to a Java object and automatically adds it to the model.

It is commonly used when working with HTML forms.

```java
@PostMapping("/users")
public String createUser(@ModelAttribute User user) {

    service.save(user);

    return "success";
}
```

It can also populate the model before every request handled by the controller.

```java
@ModelAttribute("countries")
public List<String> countries() {
    return List.of("Spain", "France", "Germany");
}
```

The returned value is automatically added to the model and is available to all handler methods in the controller.