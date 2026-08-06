# Configuration Properties

## Hibernate

### `spring.jpa.hibernate.ddl-auto`

Spring provides a JPA-specific property that Hibernate uses for DDL generation

- `create`: first drops existing tables and then creates new table

- `update`: object model is created based on the mappings (annotations or XML) 
    - compares the existing schema, and then updates the schema according to the difference
    - never deletes the existing tables or columns even if they are no longer required by the application

- `create-drop`: similar to create, with the addition that Hibernate will drop the database after all operations are completed
    - typically used for unit testing

- `validate`: only validates whether the tables and columns exist; otherwise, it throws an exception

- `none`: turns off the DDL generation