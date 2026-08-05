# RestController

Marks a class as a controller where every method returns data directly in the HTTP response body (usually JSON), instead of returning a view.

- used for REST APIs
- returns objects, not views
- automatically converted to JSON (via libraries like Jackson)
- eliminates the need to write `@ResponseBody` on every method

Is equivalent to combining the two annotacions:
- `@Controller`: marks the class as a web controller
- `@ResponseBody`: ensures return values are written directly to the response

Example, requets `GET /api/users/1`


```java
@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable int id) {
        return new User(id, "John");
    }
}
```

The response could be a json like:
```json
{
  "id": 1,
  "name": "John"
}
```

