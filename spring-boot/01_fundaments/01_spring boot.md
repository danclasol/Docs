# Spring boot

Spring Boot is a project within the Spring Framework ecosystem designed to simplify the creation of Java applications.

Reduces the need for manual configuration by providing auto-configuration.

## Differences with Spring Framework

### Configuration Project

- Spring: Requires manual setup (XML or Java)
- Spring boot: Auto-configures most settings (Spring Boot Starter)

### Server

- Spring: Server Needs an external server (Tomcat, Jetty)
- Spring boot: Comes with an embedded server (Tomcat, Jetty, Undertow)

### Dependencies

- Spring: Dependencies Requires manual dependency management
- Spring boot: Uses Spring Boot Starters for simplified dependency management

### Architecure

- Spring: Architecture More flexible but requires extra setup
- Spring boot: Convention over configuration (sensible defaults)

### Microservices

- Spring: Microservices Can be used for microservices but needs more
- Spring boot: configuration Built for microservices with native REST support

## When to use Spring Boot

Use Spring Framework when you need a highly customized and modular architecture with specific configurations and Spring Boot When you want fast development, minimal setup, and built-in microservices support.
