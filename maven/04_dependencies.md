# Dependencies

Dependencies define which external libraries your project needs which are defined in your `pom.xml` file 

Maven first checks if the dependencies are stored in your local repository, if not it will download them (and their transitive dependencies) from remote the Maven central repository.

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

If a depdency depends on another depency, it is not necessary to defined in your `pom.xml`, it will be automatically downloaded without doing any action.


## Dependency scopes

Define when a dependency is available during the build lifecycle and whether it is included in the final artifact.

### `compile`

- Available in all classpaths (compile, test, and runtime)
- default scope

```xml
<scope>compile</scope>
```

### `provided`

- needed to compile 
- provided by the runtime environment
- e.g., Tomcat, Servlet API


```xml
<scope>provided</scope>
```

### `runtime`

- needed at runtime
- not required for compilation
- included in the final artifact

```xml
<scope>runtime</scope>
```

### `test`

- only for testing
- not included in the final artifact

```xml
<scope>test</scope>
```

### `system`

- provided manually 
- rarely used


```xml
<scope>system</scope>
```

### `import`

- used in `<DependencyManagement>` with BOMs (advanced)
- imports dependency versions
- not a real dependency

```xml
<scope>import</scope>
```

## Transitive dependencies

Dependencies that come along for the ride when you include another dependency.

- don’t need to be declared explicitly

For example, if you declare the depdendency `spring-boot-starter-web`, Maven will also get:
- Spring MVC
- Jackson
- Tomcat
- Logging libraries
- and many more, automatically

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <version>3.2.1</version>
</dependency>
```

### Commands

Display the list of transitive dependencies

```sh
mvn dependency:tree
```
