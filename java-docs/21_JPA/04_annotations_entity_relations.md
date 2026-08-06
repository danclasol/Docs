# Entity Relationships

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
