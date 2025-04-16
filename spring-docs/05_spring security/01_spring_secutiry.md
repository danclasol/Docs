# Spring Security

Spring Security is a framework that provides authentication, authorization, and protection against common attacks. With first class support for securing both imperative and reactive applications, it is the de-facto standard for securing Spring-based applications.

- Filtros de Seguridad
- Proveedores de Autenticacion
  - DAOAuthenticationProvider
  - LdapAuthenticationProvider
  - JaasAuthenticationProvider
  - OpenIDAuthenticatonProvider u OAuth2AuthenticationProvider
  - ...
- Proveedores de Detalles de Usuarios

## Spring boot Starter

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
