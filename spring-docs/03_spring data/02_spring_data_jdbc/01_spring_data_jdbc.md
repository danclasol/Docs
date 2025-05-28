# Spring Data JDBC

Spring Data JDBC is a module of Spring Data that offers a simple and lightweight way to interact with relational databases using plain _JDBC_.

- avoid the complexity of an ORM like Hibernate (used in Spring Data JPA)
- provides most of the Spring Data JPA features
- relies on plain JDBC, using simple SQL queries

## Spring Data JDBC vs Spring Data JPA

- ✅ not as complex
- ✅better performance due to direct communication with database
- ❌ doesn’t offer schema generation
- ❌ doesn’t provide cache, lazy loading, write-behind
- ❌ coupling with specific database vendor, you need to set the specific dialect for the project

## Common Use

Use Spring Data JDBC instead of Spring Data JPA when:

- require full control over SQL queries
- need performance optimization
- working with a simple database structure without complex relationships

## ORM

Spring Data JDBC is not a ORM framework like Hibernate. Instead, it provides a lightweight mapping layer between Java objects and relational tables, focusing on simplicity and transparency.

Unlike JPA, Spring Data JDBC does not support:

- Lazy loading
- Entity lifecycle callbacks (e.g. `@PrePersist`, `@PostLoad`)
- Proxy objects
- Cascading operations (CascadeType.ALL, etc.)
- Advanced relationship annotations (`@ManyToOne`, `@OneToMany`, etc.)

## Data Access using Spring JDBC

There are a number of options for selecting an approach to form the basis for your JDBC database access.

Spring framework provides the following approaches for JDBC database access:

- JdbcTemplate
- NamedParameterJdbcTemplate
- SimpleJdbcTemplate (deprecated)
- SimpleJdbcInsert
- SimpleJdbcCall

## Supported databases

Spring Data JDBC includes direct support for the following databases:

- DB2
- H2
- HSQLDB
- MariaDB
- Microsoft SQL Server
- MySQL
- Oracle
- Postgres

## Dialects

Spring Data JDBC uses implementations of the interface Dialect to encapsulate behavior that is specific to a database or its JDBC driver.

- Spring Boot auto-detects dialects based on JDBC URL

Used for:

- SQL generation (INSERT, UPDATE, DELETE, SELECT)
- Identifier escaping (for reserved words)
- Type conversion (e.g. handling UUID, boolean, timestamp)
- Pagination (LIMIT/OFFSET, native to dialect)
