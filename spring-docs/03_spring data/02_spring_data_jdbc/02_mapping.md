# Mapping

In Spring Data JDBC, entity mapping is simpler and more explicit than in JPA. It uses annotations and naming conventions to map Java objects to database tables, but with fewer features than JPA.

- support is provided by the `MappingJdbcConverter`
- not supported
  - lazy loading
  - `@ManyToOne`, `@OneToOne`, `@JoinColumn`
  - Entity graphs
  - Cascading with `CascadeType`

## Annotations

### `@Id`

Applied at the field level to mark the primary key.

```java
@Id long id;
```

### `@Table`

Applied at the class level to indicate this class is a candidate for mapping to the database.

- specify the name of the table where the database is stored

```java
@Table("CUSTOM_TABLE_NAME")
class MyEntity {
}
```

### `@Transient`

Excludes the field where it is applied from being stored in the database

- by default, all fields are mapped to the row
- cannot be used within a persistence constructor as the converter cannot materialize a value for the constructor argument

### `@PersistenceCreator`

Marks a given constructor or static factory method

- even a package protected one
- use when instantiating the object from the database
- constructor arguments are mapped by name to the values in the retrieved row

### `@Value`

Use a Spring Expression Language statement to transform a key’s value retrieved in the database before it is used to construct a domain object

- annotation from Spring Framework
- within the mapping framework it can be applied to constructor arguments

```java
@Value("#root.myProperty")
```

### `@Column`

Applied at the field level to describe the name of the column as it is represented in the row, letting the name be different from the field name of the class.

- always quoted when used in SQL statements
- gor most databases, this means that these names are case-sensitive
- can use special characters in these names (not recommended)

```java
@Column("CUSTOM_COLUMN_NAME")
String name;
```

### `@Version`

Applied at field level is used for optimistic locking and checked for modification on save operations. The value is null (zero for primitive types) is considered as marker for entities to be new. The initially stored value is zero (one for primitive types).

The version gets incremented automatically on every update.

## Map Collections

The `MappedCollection` annotation can be used on a reference type (one-to-one relationship) or on Sets, Lists, and Maps (one-to-many relationship).

- `1-to-N` mapping via a foreign key in the items table (_MY_ENTITY_ID_)
-

```java
@MappedCollection(idColumn = "MY_ENTITY_ID")
Set<MySubEntity> subEntities;
```

## Embedded entities

Embedded entities are used to have value objects in your java data model, even if there is only one table in your database.

```java
@Embedded(onEmpty = USE_NULL)
EmbeddedEntity embeddedEntity;
```
