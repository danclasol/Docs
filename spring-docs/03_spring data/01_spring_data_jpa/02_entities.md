# Entities

JPA entities are plain Java objects (POJOs) that represent data stored in a relational database. 

Each entity is mapped to a database table, and each instance of the entity corresponds to a row in that table.

>! **NOTE**: Check java-docs/JPA

```java
import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(name = "release_year")
    private Integer releaseYear;

    // Constructors

    public Movie() {
    }

    public Movie(String title, Integer releaseYear) {
        this.title = title;
        this.releaseYear = releaseYear;
    }

    // Getters and setters
}
```