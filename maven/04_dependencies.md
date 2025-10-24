# Dependencies

Dependencies define which external libraries your project needs.

Maven will automatically download them (and their transitive dependencies) from repositories.

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>6.0.0</version>
  </dependency>

  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>
```

## Dependency scopes

### `compile`

- default scope
- aAvailable in all classpaths

### `provided`

- needed to compile but provided by the runtime environment
- e.g., Servlet API

### `runtime`

- needed at runtime but not at compile time

### `test`

- only for testing

### `system`

- provided manually (rarely used)

### `import`

- used in dependency management with BOMs (advanced)
