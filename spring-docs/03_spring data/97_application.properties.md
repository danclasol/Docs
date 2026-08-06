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

# Spring Data JPA

### `spring.jpa.hibernate.ddl-auto`

- `none`:	hibernate does not modify the schema.
- `validate`:	verifies that the schema matches the entities.
- `update`: updates the schema without dropping existing data.
- `create`: drops and recreates the schema at startup.
- `create-drop`: creates the schema at startup and drops it on shutdown.

```xml
spring.jpa.hibernate.ddl-auto=create
```

### `spring.jpa.defer-datasource-initialization`

Wait until Hibernate has created the schema

```xml
spring.jpa.defer-datasource-initialization=true
```

### `spring.jpa.show-sql`

Show generated SQL statements.

```xml
spring.jpa.show-sql=true
```

### `spring.jpa.properties.hibernate.format_sql`

Formats the SQL output.

```xml
spring.jpa.properties.hibernate.format_sql=true
```

# H2

### `spring.h2.console.enabled`

Enable console for h2 database.

Console available in `http://localhost:8080/h2-console`

```xml
spring.h2.console.enabled=true
```
