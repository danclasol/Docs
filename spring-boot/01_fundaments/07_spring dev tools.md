# Spring boot DevTools

Spring Boot includes an additional set of tools that can make the application development experience a little more pleasant.

## Install dependency with Maven

Last version 3.4.2:
https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools/3.4.2

Add the dependency to the `pom.xml` file

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

## Configure

### Auto build and deploy

In IntelliJ go to Settings

- Build, Execution, Deployment > Compiler
  - Check 'Build Project automatically'
- Advanced Settings > Compiler
  - Check 'Allow auto-make to start even if developed application is currently runnig
