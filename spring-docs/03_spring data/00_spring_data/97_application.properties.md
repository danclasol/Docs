# Spring Data

## Initialization

### `spring.sql.init.mode=always`

Execute schema.sql and data.sql

```xml
spring.sql.init.mode=always
```

### `spring.sql.init.schema-locations`

Set schema script location

```xml
spring.sql.init.schema-locations=classpath:schema.sql
```

### `spring.sql.init.data-locations`

Set data script location

```xml
spring.sql.init.data-locations=classpath:data.sql
```

## Datasource

### `spring.datasource.url=jdbc`

Specifies the JDBC URL that Spring Boot uses to connect to the database.

- H2 (in-memory)

```xml
spring.datasource.url=jdbc:h2:mem:testdb
```

- H2 (file)

```xml
spring.datasource.url=jdbc:h2:file:./data/testdb
```
- MySQL

```xml
spring.datasource.url=jdbc:mysql://localhost:3306/movies_db
```

### `spring.datasource.username`

```xml
spring.datasource.username=root
```

### `spring.datasource.password`

```xml
spring.datasource.password=secret
```

### `spring.datasource.driver-class-name`

```xml
spring.datasource.passwordriver-class-named=om.mysql.cj.jdbc.Driver
```
