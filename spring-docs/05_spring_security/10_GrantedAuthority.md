# GrantedAuthority

GrantedAuthority is the abstraction Spring Security uses for permissions/roles.

```java
public interface GrantedAuthority {

    String getAuthority();
}
```

## SimpleGrantedAuthority

SimpleGrantedAuthority is a Spring Security implementation of the GrantedAuthority interface.

It represents an authority granted to an authenticated user, such as:

- `ROLE_USER`
- `ROLE_ADMIN`
- `READ_BOOKS`
- `WRITE_BOOKS`
- `DELETE_BOOKS`

```java
GrantedAuthority authority =
    new SimpleGrantedAuthority("ROLE_USER");
```

## With UserDetails

`GrantedAuthority` objects are assigned to a `UserDetails` and later become part of the user's Authentication.

```java
UserDetails user = User.withUsername("user")
    .password(passwordEncoder.encode("password"))
    .authorities(
        new SimpleGrantedAuthority("ROLE_USER"),
        new SimpleGrantedAuthority("READ_BOOKS")
    )
    .build();
```

In a database-backed application, authorities are typically retrieved from the database by the `UserDetailsService` and mapped to `GrantedAuthority` objects.

```java
private Set<GrantedAuthority> getAuthorities(final UserEntity userEntity) {
    return userEntity.getRoles().stream()
        .flatMap(role -> role.getAuthorities().stream())
        .map(authority -> new SimpleGrantedAuthority(authority.getName()))
        .collect(Collectors.toSet());
}
```

The resulting authorities are then passed to `UserDetails`.

```java
Set<GrantedAuthority> authorities =
    getAuthorities(userEntity);

return User.withUsername(userEntity.getUsername())
    .password(userEntity.getPassword())
    .authorities(authorities)
    .build();
```