# Java Persistance API (JPA)

JPA is a ORM (Object Relational Mapping) that allows you to manage, access, and manipulate data stored in relational databases using an object-oriented approach.

- JPA lets you map Java classes to database tables using annotations like `@Entity`, `@Id`, `@Column`, and others

- JPA is commonly used with implementations like Hibernate, EclipseLink, or OpenJPA, which provide the actual functionality based on the JPA specification.

## Annotations

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

## Example

```java
@Entity
@Table(name = "User")
public class User {
    @Id
    private Long id;
    private String name;
    @Column(name = image_url)
    private String imageURL;

    // getters and setters
}
```

## JPA Repository

- JPARepository<User, Long>

```java
public interface UserRepository extends JpaRepository<User, Long> {

}
```

- UserRepository
- findAll()

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @GetMapping("/")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
```
