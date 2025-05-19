# Java Persistance API (JPA)

> Java Persistence API is now known as Jakarta Persistence (JPA)

JPA is a ORM (Object Relational Mapping) that allows you to manage, access, and manipulate data stored in relational databases using an object-oriented approach.

- JPA lets you map Java classes to database tables using annotations like `@Entity`, `@Id`, `@Column`, and others

- JPA is commonly used with implementations like Hibernate, EclipseLink, or OpenJPA, which provide the actual functionality based on the JPA specification.

## ORM

Object-Relational Mapping (ORM) is the process of converting Java objects to database tables.

In other words, this allows us to interact with a relational database without any SQL

## Hibernate

Hibernate is one of the most popular Java ORM frameworks in use today.

Additionally, Hibernate is a standard implementation of the JPA specification, with a few additional features that are specific to Hibernate.

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


