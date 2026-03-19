# Surefire plugin

The Maven Surefire Plugin is the standard tool used to run unit tests during the Maven test phase of the build lifecycle.

It works with frameworks like:

- JUnit
- TestNG
- Spock Framework

## Configuration

In your `pom.xml`:

- `parallel`: run tests in parallel
- `threadCount`: number of threads
- `includes`: test patterns to run
- `excludes`: tests to skip
- `forkCount`:	JVM forks for tests

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-surefire-plugin</artifactId>
  <version>3.2.5</version>
  <configuration>
    <parallel>methods</parallel>
    <threadCount>4</threadCount>
    <includes>
      <include>**/*Test.java</include>
    </includes>
  </configuration>
</plugin>
```

## Properties

### `test`

Runs a specific test

```sh
mvn -Dtest=UserServiceTest test
```

Run a specific method

```sh
mvn -Dtest=UserServiceTest#shouldCreateUser test
```

### `skipTests`

Skip execution but still compile tests

```sh
mvn -DskipTests
```

Skip compilation and execution

```sh
mvn -Dmaven.test.skip=true
```