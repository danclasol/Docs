# PasswordEncoder

PasswordEncoder is a Spring Security interface used to securely hash passwords and verify passwords during authentication.

## BCryptPasswordEncoder

BCryptPasswordEncoder uses the BCrypt password-hashing algorithm.

- one of the most commonly used password encoders in Spring Security

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

### Configure BCrypt

BCrypt has a configurable work factor, which controls how computationally expensive the hashing operation is.

- higher strength makes password hashing more expensive

```java
new BCryptPasswordEncoder(12);
```

## SCryptPasswordEncoder

SCryptPasswordEncoder uses the scrypt password-hashing function.

- unlike BCrypt, scrypt is designed to be both computationally and memory intensive

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return SCryptPasswordEncoder.defaultsForSpringSecurity_v5_8();
}
```

## Argon2PasswordEncoder

Argon2PasswordEncoder uses Argon2, a modern memory-hard password hashing algorithm.

- Spring Security provides an implementation based on Argon2


### Configure  
```java
@Bean
public PasswordEncoder passwordEncoder() {
    return Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
}
```

### Add dependency

It is necessary to add the dependency to `pom.xml` file

```xml
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-jdk18on</artifactId>
</dependency>
```

## Using PasswordEncoder

We can use de PasswordEncoder by injecting the bean

```java
@Bean
public UserDetailsService userDetailsService(
        PasswordEncoder passwordEncoder) {

    UserDetails user = User.withUsername("user")
        .password(passwordEncoder.encode("password"))
        .roles("USER")
        .build();

    return new InMemoryUserDetailsManager(user);
}
```