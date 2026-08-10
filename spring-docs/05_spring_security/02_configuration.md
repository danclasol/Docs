# Security Configuration

Spring Security is primarily configured through a `SecurityFilterChain` bean. 

- `SecurityFilterChain` bean defines how Spring Security should handle incoming HTTP requests

- `@EnableWebSecurity`: enables Spring Security's web security infrastructure

- `HttpSecurity`: injected bean to create SecurityFilterChain bean

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.build();
    }
}
```

## HttpSecurity

HttpSecurity is the API used to configure Spring Security's HTTP security features.

Each method configures a different part of the security infrastructure.

```java
http
    .csrf(...)
    .authorizeHttpRequests(...)
    .formLogin(...)
    .httpBasic(...)
    .logout(...);
```

## WebSecurity

`WebSecurity` is a Spring Security infrastructure class responsible for configuring the web-level security integration.

- operates at a level outside the SecurityFilterChain
- normally use to configure requests that should bypass Spring Security entirely
- activate/deactivate SecurityFilterChain for specific paths
- reject specific requests

We can customized by creating a `WebSecurityCustomizer` bean:

- ex: exclude static resources from Spring Security processing

```java
@Bean
public WebSecurityCustomizer webSecurityCustomizer()  {
    return web -> web
            .ignoring()
            .requestMatchers(
                "/css/**",
                "/js/**",
                "/images/**",
                "/favicon.ico"
            );
}
```
