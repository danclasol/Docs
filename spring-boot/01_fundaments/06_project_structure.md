# Project structure

Every Spring Boot project has the following structure

```
spring-boot-project/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── demo/
│   │   │               ├── DemoApplication.java      # Main class
│   │   │               ├── controller/               # REST Controllers
│   │   │               ├── service/                  # Business logic
│   │   │               ├── repository/               # Data access layer
│   │   │               ├── model/ or entity/         # JPA entities
│   │   │               ├── dto/                      # Data Transfer Objects
│   │   │               ├── config/                   # Configuration classes
│   │   │               ├── exception/                # Custom exceptions
│   │   │               ├── security/                 # Security configuration
│   │   │               └── util/                     # Utility classes
│   │   │
│   │   └── resources/
│   │       ├── application.properties/application.yml
│   │       ├── static/            # CSS, JS, Images
│   │       ├── templates/         # Thymeleaf templates
│   │       └── data.sql/schema.sql
│   │
│   └── test/
│       └── java/
│           └── com/example/demo/
│               └── DemoApplicationTests.java
│
├── target/                        # Generated after build (Maven)
├── pom.xml                        # Maven dependencies
└── README.md
```

## Folder structure

The folder `src` contains the code of our application. 

- `main`: contains the code of the application
    - packaged during compiltion
- `test`: contains the test of the application
    - executed during compilation
    - but not this code is not packaged