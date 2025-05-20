# Starters

In Spring Boot, starters are a set of convenient dependency descriptors you can include in your project to get started quickly with common technologies—without worrying about version conflicts or multiple dependencies.

- pre-configured dependency bundles
- includes the libraries you need for a specific feature or purpose
- simplify project setup by handling transitive dependencies

## Most common starters

- `spring-boot-starter`

  - core starter
  - includes Spring Core, Logging, and basic config

- `spring-boot-starter-web`

  - building web (including RESTful)
  - applications using Spring MVC

- `spring-boot-starter-data-jpa`

  - adds Spring Data JPA + Hibernate support

- `spring-boot-starter-security`

  - adds Spring Security for authentication/authorization

- `spring-boot-starter-test`

  - for unit/integration testing
  - includes JUnit, Mockito, AssertJ, Spring Test

- `spring-boot-starter-actuator`

  - adds production-ready features (health, metrics, etc.)

- `spring-boot-starter-validation`

  - adds bean validation support using Hibernate Validator

- `spring-boot-starter-mail`

  - for sending emails using `JavaMailSender`

- `spring-boot-starter-aop`

  - for using Aspect-Oriented Programming (AOP) with Spring

## Import starter in maven project

Example of a `pom.xml` with a few key starters

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```
