# Entity Relationships

JPA provides annotations to define relationships between entities.

## Relations

### `@OneToOne`

Used to define a one-to-one relationship between two entities.

- `mappedBy`: specifies the field that owns the relationship in the other entity
- `cascade`: specifies which operations are propagated to the related entity

```java
@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
private Profile profile;
```

### `@OneToMany`

Used to define a one-to-many relationship.

- `mappedBy`: specifies the field in **Order** that owns the relationship

```java
@OneToMany(mappedBy = "user")
private List<Order> orders;
```

The other side would typically contain:

```java
@ManyToOne
@JoinColumn(name = "user_id")
private User user;
```

### `@ManyToMany`

Used to define a many-to-many relationship between entities.

A join table is typically used to store the relationship:

- `@JoinTable`: defines the intermediate table used to store the relationship
- `joinColumns`: foreign key referring to the entity that owns the relationship
- `inverseJoinColumns`: foreign key referring to the other entity

```java
@ManyToMany 
@JoinTable( 
    name = "user_role", 
    joinColumns = @JoinColumn(name = "user_id"), 
    inverseJoinColumns = @JoinColumn(name = "role_id") ) 
private Set<Role> roles;
```

## Relationship Direction

Relationships can be unidirectional or bidirectional.

### Unidirectional

Only one entity has a reference to the other entity.

- **Order** knows about **User**
- but **User** does not have a reference to **Order**

```java
@ManyToOne
@JoinColumn(name = "user_id")
private User user;
```


### Bidirectional

Both entities have a reference to each other.

```java
@OneToMany(mappedBy = "user")
private List<Order> orders;
```
```java
@ManyToOne
@JoinColumn(name = "user_id")
private User user;
```

## Relationship Configuration

### mappedBy

Indicates that the relationship is mapped by a field in the other entity.

```java
@OneToMany(mappedBy = "user")
private List<Order> orders;
```

### fetch

Controls when the associated entity is loaded.

- `FetchType.LAZY`: loaded when it is accessed
- `FetchType.EAGER`: loaded immediately with the entity


```java
@OneToMany(
    mappedBy = "user",
    fetch = FetchType.LAZY
)
private List<Order> orders;
```

Generally, LAZY is preferable for collections to avoid unnecessarily loading large amounts of data.

### cascade

Defines which operations are propagated from one entity to its related entities.

```java
@OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL
)
private List<Order> orders;
```

Available cascade types:

- `CascadeType.PERSIST`
- `CascadeType.MERGE`
- `CascadeType.REMOVE`
- `CascadeType.REFRESH`
- `CascadeType.DETACH`
- `CascadeType.ALL`

### orphanRemoval

Automatically removes an entity that is removed from a relationship collection.

```java
@OneToMany(
    mappedBy = "user",
    orphanRemoval = true
)
private List<Order> orders;
```

## Foreign key mapping

### `@JoinColumn`

Used to specify the foreign key column that maps a relationship between entities.

- `name`: specifies the foreign key column name 
- `nullable`: specifies whether the foreign key can contain `NULL`
- `unique`: specifies whether the column must contain unique values
- `referencedColumnName`: specifies the column in the referenced table
    - usually omitted because id is the default referenced column

```java
@JoinColumn(
    name = "user_id",
    nullable = false,
    unique = true
)
private User user;
```

### `@JoinTable`

Defines an intermediate table used to store a relationship.

It is especially common with `@ManyToMany`.

- `name`: name of the intermediate table
- `joinColumns`: foreign key referring to the entity that owns the relationship
- `inverseJoinColumns`: foreign key referring to the other entity

```java
@ManyToMany
@JoinTable(
    name = "user_role",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id")
)
private Set<Role> roles;
```