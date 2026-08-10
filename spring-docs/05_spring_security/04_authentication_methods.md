# Authentication Methods

## Basic Authentication

HTTP Basic sends credentials using the Authorization header.

```
Authorization: Basic base64(username:password)
```

It is simple and useful for:

- internal APIs
- development
- service-to-service communication in suitable environments

It should be used over HTTPS.

Spring Security can enable it with:

```java
http.httpBasic(Customizer.withDefaults());
```

## Form

Traditional web applications can use:

- more common for server-rendered web applications 
- not very common for REST APIs

```java
http.formLogin(Customizer.withDefaults());
```

## OAuth2 / JWT

```java
http.oauth2ResourceServer(oauth2 ->
    oauth2.jwt(Customizer.withDefaults())
);
```

## Logout

HttpSecurity allows you to configure how logout is handled.

- Spring Security provides a logout endpoint at: `POST /logout`
- when logout is performed, Spring Security can clear the authentication and invalidate the HTTP session

```java
http.logout(Customizer.withDefaults())
```
### `.logoutUrl()`

Changes the URL used to trigger logout.

```java
http.logout(e -> e.logooutUrl("/newLogout"))
```

### `.logoutSuccessUrl()`

Defines where the user is redirected after a successful logout.

```java
.logoutSuccessUrl("/login?logout")
```

### `.clearAuthentication()`

Controls whether the Authentication is cleared from the SecurityContext during logout.

This prevents the user's previous authentication from remaining associated with the current request/security context.

- default `true`

```java
http.logout(logout -> logout
    .clearAuthentication(true)
);
```

### `.invalidateHttpSession()`

Controls whether the current HTTP session is invalidated when logout occurs.

- default `true`

```java
http.logout(logout -> logout
    .invalidateHttpSession(true)
);
```
