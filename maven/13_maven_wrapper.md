# Maven Wrapper

Maven Wrapper is a handy tool for running Maven builds without requiring Maven to be installed on your system.

- ensures build consistency across all environments
- avoids incompatibility problems between different machines
  - everyone on your team uses the same Maven version
- makes CI/CD pipelines simpler (no need to preinstall Maven)
- common in professional Java projects and frameworks like Spring Boot
- no installation needed

## Running wrapper

On macOS/Linux

```sh
./mvnw clean install
```

On Windows

```sh
mvnw.cmd clean install
```

## Add the Maven Wrapper to project

If your project doesn’t already have it, you can add it with one command:

```sh
mvn -N io.takari:maven:wrapper
```

## Files Included in the Maven Wrapper

When the Maven Wrapper is set up, you’ll find these in your project:

### `.mvn/wrapper/maven-wrapper.jar`

The executable JAR that bootstraps Maven.

### `.mvn/wrapper/maven-wrapper.properties`

Configuration file (specifies which Maven version to use).

### `mvnw`

Shell script for macOS/Linux.

### `mvnw.cmd`

Batch script for Windows.
