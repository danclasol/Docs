# Connection to database

## Add dependencies

### JPA

- https://mvnrepository.com/artifact/jakarta.persistence/jakarta.persistence-api

```xml
<dependency>
    <groupId>jakarta.persistence</groupId>
    <artifactId>jakarta.persistence-api</artifactId>
    <version>3.2.0</version>
</dependency>
```

### Hibernate

- https://mvnrepository.com/artifact/org.hibernate.orm/hibernate-core

```xml
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>6.6.13.Final</version>
</dependency>
```

### H2 database

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <version>2.2.224</version>
</dependency>
```

### Database Driver

- mysql: https://mvnrepository.com/artifact/com.mysql/mysql-connector-j

```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>9.2.0</version>
</dependency>
```

## Persistence Unit

A Persistence Unit is a configuration that includes the database connection settings and the list of entities.

It’s defined in the persistence.xml file.

- `src/main/resources/META-INF/persistence.xml`

```xml
<persistence xmlns="https://jakarta.ee/xml/ns/persistence"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="https://jakarta.ee/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd"
             version="3.0">

    <persistence-unit name="my-pu" transaction-type="RESOURCE_LOCAL">
        <class>com.example.User</class>

        <properties>
            <property name="jakarta.persistence.jdbc.driver" value="org.h2.Driver"/>
            <property name="jakarta.persistence.jdbc.url" value="jdbc:h2:mem:testdb"/>
            <property name="jakarta.persistence.jdbc.user" value="sa"/>
            <property name="jakarta.persistence.jdbc.password" value=""/>

            <property name="hibernate.dialect" value="org.hibernate.dialect.H2Dialect"/>
            <property name="hibernate.hbm2ddl.auto" value="update"/>
            <property name="hibernate.show_sql" value="true"/>
        </properties>
    </persistence-unit>
</persistence>
```

## EntityManagerFactory

The main interface used to interact with the persistence context (used for CRUD operations).

```java
public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("examplePU");
        EntityManager em = emf.createEntityManager();

        em.getTransaction().begin();

        User user = new User();
        user.setName("Alice");
        user.setEmail("alice@example.com");
        em.persist(user);

        em.getTransaction().commit();
        em.close();
        emf.close();
    }
}
```
