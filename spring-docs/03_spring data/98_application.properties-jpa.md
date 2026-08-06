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

### `spring.jpa.properties.hibernate.format_sql`

Formats the SQL output.

```xml
spring.jpa.properties.hibernate.format_sql=true
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

### `spring.jpa.hibernate.naming.physical-strategy`

Specifies the Physical Naming Strategy that Hibernate uses to convert logical table and column names into their actual names in the database.

- Spring Boot (default)	
    - BookAuthor → book_author
- PhysicalNamingStrategyStandardImpl	
    - BookAuthor → BookAuthor

```xml
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
```