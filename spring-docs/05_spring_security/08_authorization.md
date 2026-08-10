# Authorization

Authorization is the process of determining what an authenticated user is allowed to access or do.

Authorization is primarily based on the user's authorities.

## Manage request authorization

### `authorizeHttpRequests()`

Authorization rules for HTTP requests can be configured with HttpSecurity using authorizeHttpRequests():

```java
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/public/**").permitAll()
    .requestMatchers("/admin/**").hasRole("ADMIN")
    .requestMatchers("/users/**").hasAnyRole("USER", "ADMIN")
    .anyRequest().authenticated()
);
```

### `requestMatchers()`

Defines the HTTP requests to which an authorization rule applies.

#### `requestMatchers(String... patters)`
- `*`: matches characters within a path segment
    - `/index/*` -> `/index/a`, `/index/b`
- `**`: matches across multiple path segments 
    - `/index/**` -> `/index/a`, `index/a/b`, `index/a/b/c`

```java
.requestMatchers("/admin/**")
    .hasRole("ADMIN")
```

#### `requestMatchers(HttpMethod method, String... patterns)`

Rules can also be restricted to a specific HTTP method:

```java
.requestMatchers(HttpMethod.GET, "/books/**")
    .hasAuthority("READ_BOOKS")
```

#### `requestMatchers(RequestMatcher... requestMatchers)`

You can also provide one or more `RequestMatcher` implementations:

- useful when the matching logic needs to be more specific than a simple path pattern

```java
.requestMatchers(
    new AntPathRequestMatcher("/admin/**")
)
    .hasRole("ADMIN")
```

#### `authenticated()`

Requires the request to come from an authenticated user.

```java
.requestMatchers("/profile")
    .authenticated()
```

#### `hasRole(String role)`

Requires a specific role:
- is effectively checking for `ROLE_ADMIN`
- Spring Security adds the `ROLE_` prefix

```java
.requestMatchers("/admin/**")
    .hasRole("ADMIN")
```

#### `hasAnyRole(String... role)`

Requires the user to have at least one of the specified roles.

```java
.requestMatchers("/admin/**")
    .hasAnyRole("ADMIN","USER")
```

#### `hasAuthority()`

Checks an authority exactly as specified:

```java
.requestMatchers("/books/**")
    .hasAuthority("READ_BOOKS")
```

#### `hasAnyAuthority(String... authorities)`

Requires the user to have at least one of the specified authorities.

```java
.requestMatchers("/books/**")
    .hasAnyAuthority("READ_BOOKS","EDIT_BOOKS")
```

#### `permitAll()`

Allows everyone to access the resource, including unauthenticated users.

```java
.requestMatchers("/public/**")
    .permitAll()
```

#### `denyAll()`

Explicitly denies access to the matched requests.

```java
.requestMatchers("/internal/**")
    .denyAll()
```

#### `anyRequest()`

Defines the rule for requests that haven't matched a previous rule.

- commonly used as the final catch-all rule

```java
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/public/**").permitAll()
    .requestMatchers("/admin/**").hasRole("ADMIN")
    .anyRequest().authenticated()
);
```

## Order 

The order of authorization rules is important.

Spring Security evaluates the configured request matchers in the order in which they are defined. Once a request matches a rule, that rule is used for the authorization decision.

Therefore, put more specific rules before more general rules.

```
Specific rules 
    ↓ 
General rules 
    ↓ 
anyRequest()
```
