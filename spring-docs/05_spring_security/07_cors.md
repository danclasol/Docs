# CORS

CORS can also be configured:

```java
http.cors(Customizer.withDefaults());
```

The actual CORS configuration can be supplied separately through a `CorsConfigurationSource` bean.