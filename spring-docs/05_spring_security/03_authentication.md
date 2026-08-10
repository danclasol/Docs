# Authentication

Authentication represents the identity of the user who has been authenticated and their granted authorities.

The central object is Authentication:

- Principal:
    - represents the authenticated user
- Credentials:
    - credentials used for authentication, such as a password
    - typically cleared after successful authentication
- Authorities:
    - permissions or roles granted to the user
- Authenticated:
    - indicates whether the authentication has been successfully established

## Access Authentication information

Once authenticated this user information can be:

- from the class `SecurityContextHolder`:

```java
Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
```

- from controller as a parameter `Authentication`

```java
@Controller
class MyController {
    @GetMapping("/test")
    String test(Authentication authentication) {}
}
```

## SecurityContext

Spring Security stores the current Authentication inside a SecurityContext.

```
SecurityContextHolder
        ↓
SecurityContext
        ↓
Authentication
```

The `SecurityContextHolder` provides access to the SecurityContext associated with the current execution.

```java
SecurityContextHolder
    .getContext()
    .getAuthentication();
```

After successful authentication, the authenticated Authentication is stored in the SecurityContext.

## AuthenticationManager

AuthenticationManager is the component that coordinates the authentication process.

```
Authentication Filter
        ↓
AuthenticationManager
        ↓
AuthenticationProvider
```

The `AuthenticationManager` delegates the authentication request to an AuthenticationProvider that supports the type of Authentication being processed.


## AuthenticationProvider

An AuthenticationProvider performs authentication for a particular type of credentials.

### `authenticate()`

This method performs the authentication process.

For the standard username/password authentication flow, the provider typically:

    - gets the username from the incoming Authentication
    - loads the user using UserDetailsService
    - verifies the password using PasswordEncoder
    - creates and returns an authenticated Authentication

### `supports()`

Tells Spring Security which type of Authentication the provider can handle.

```java
public interface AuthenticationProvider {
    Authentication authenticate(Authentication authentication) throws AuthenticationException;

    boolean supports(Class<?> authentication);
}
```

## DaoAuthenticationProvider

DaoAuthenticationProvider is the standard AuthenticationProvider implementation for username/password authentication.

- `UserDetailsService` to retrieve the user
- `PasswordEncoder` to verify the password

```java
@Bean
public DaoAuthenticationProvider authenticationProvider(
        UserDetailsService userDetailsService,
        PasswordEncoder passwordEncoder) {

    DaoAuthenticationProvider provider =
        new DaoAuthenticationProvider(userDetailsService);

    provider.setPasswordEncoder(passwordEncoder);

    return provider;
}
```

## UserDetailService

UserDetailsService is a Spring Security interface responsible for loading user information during authentication.

- uses an implementation of `DaoAuthenticationProvider`
- does not authenticate the user itself
- responsibility is to find the user's information, usually from a database or another data source

```java
public interface UserDetailsService {
    UserDetails loadUserByUsername(String username);
}
```

### Implement UserDetailsService

The implementation retrieves the user and returns a UserDetails.

- implement interface `UserDetailsService`
- create service that retrieve the user from database
- `loadUserByUsername()`: 

```java
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) {

        // Find user...

        return User.withUsername(username)
            .password("{noop}password")
            .roles("USER")
            .build();
    }
}
```

### UserDetail

UserDetails represents the user information that Spring Security needs during authentication and authorization.

It contains information such as:

- username
- password
- authorities
- accountNonExpired
- accountNonLocked
- credentialsNonExpired
- enabled

### InMemoryUserDetailsManager

`InMemoryUserDetailsManager` is a Spring Security implementation of UserDetailsService that stores users in memory instead of retrieving them from a database.

- useful for testing, development, examples, and simple applications.

```java
@Bean
public UserDetailsService userDetailsService() {

    UserDetails user = User.withUsername("user")
        .password("{noop}password")
        .roles("USER")
        .build();

    return new InMemoryUserDetailsManager(user);
}
```