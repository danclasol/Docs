# Rest Controller

```java
@RestController
public classs MyRestController {
    @GetMapping("/")
    public String greetings() {
        return "Hello World!"
    }
}
```
