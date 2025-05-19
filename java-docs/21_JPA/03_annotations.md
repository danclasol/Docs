# Annotations

### `@Entity`

Marks a class as a JPA entity.

By default, it will the class name to map with a table with the same name

```java
@Entity
public class User {
}
```

### `@Table`

Specifies the table name.

By default, JPA maps your entity to a table with the same name as the class but if it has a different name, it will not be mapped automatically.

```java
@Entity
@Table(name = "user")
    public class User {
}
```

### `@Id`

Specifies the primary key of the entity

```java
@Id
private Long id;
```

Defines how the primary key value is automatically generated

The _GenrationType_ sets how the id will be generated:

- IDENTITY
- AUTO
- SEQUENCE
- UUID
- TABLE

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

### `@Column`

Maps a field to a specific column in the table.

You can customize the column name, length, nullable, etc

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

### `@Temporal`

Maps a Date to a SQL column.

```java
@Temporal(TemporalType.DATE)
private Date eventDate;
```

Timestamp can also be mapped.

```java
@Temporal(TemporalType.TIMESTAMP)
private Date createdAt;
```

Time can alaso be mapped

```java
@Temporal(TemporalType.TIME)
private Date eventTime;
```

### `@OneToOne`

Used for defining One to One relationships between entities

```java
@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
private Profile profile;
```

### `@OneToMany`

```java
@OneToMany(mappedBy = "user")
private List<Order> orders;
```

### `@ManyToMany`

```java
@ManyToOne
@JoinColumn(name = "user_id")
private User user;
```
