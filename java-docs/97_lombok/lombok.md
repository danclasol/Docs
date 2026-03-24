# Lombok

Lombok (commonly known as Project Lombok) is a Java library that helps you reduce boilerplate code by using annotations.

Lombok, automatically generated coded at compile time, so you don’t need to manually write:

- getters and setters
- constructors
- toString()
- equals() and hashCode()

The generated code is not visible, can make debugging harder.


## When to use it

- DTOs, simple entities and for rapid development
- avoid in public libraries or complex business logic

## Install

Add to your `pom.xml`

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version>
    <scope>provided</scope>
</dependency>
```

You must also enable annotation processing in your IDE (IntelliJ, Eclipse).
- Settings > Build, Execution, Deployment > Compiler > Annotation Processors
- Check "Enable annotation processing"   

