# Requirements

### Java

You need Java SDK v17 or higher

```sh
java -version
```

### Maven

You must have mv install in your computer

```sh
mvn -version
```

# Using Spring initializr

Use this website to create a project with Spring boot.

https://start.spring.io/

### 1. Select the following options:

- **Project**: Maven, Gradle
- **Lenguage**: Java, Kotlin, Groovy
- **Spring Boot version**: Pick the latest stable version (latest 3.4.2 in 12/02/2025)
- **Project Metadata**:
  - group, artifact, name, descrption
  - Packing: Jar or War
  - Java version: 21

### 2. Add dependencies

Select the dependencies you need. For example Spring Web, Spring Data JPA, PostgreSQL, Thymeleaf

### 3. Download project

Click on 'Generate' button to Generate project and download the _zip_ file with the project

### 4. Open project on IDE

Extract the project in your workspace and open it with your IDE.

# Using Spring Boot CLI (Command Line)

### 1. Install Spring Boot CLI

```sh
sdk install springboot # If using SDKMAN
brew install spring-boot-cli # On macOS (Homebrew)
```

### 2. Create a new project

```sh
spring init --dependencies=web,lombok,jpa spring-demo
```

### 3. Open project folder

```sh
cd spring-demo
```

# Using IntelliJ IDEA / Eclipse

1. Open the IDE
2. Create a New Project → Spring Boot → Spring Initializr
3. Configure Dependencies & Generate Project

# Run the Application

## Using IntelliJ

Run the `main()` method in the generated `Application.java` file
- Open the main class (e.g., `Application.java`)
- Click _Run_

## Using Command Line

```sh
mvn spring-boot:run
```
