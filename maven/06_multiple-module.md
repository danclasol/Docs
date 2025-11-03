# Multi-Module Projects (Inheritance)

In Maven, inheritance allows you to share configuration (like dependencies, plugins, or properties) across multiple projects by using a parent POM.

This is a powerful feature for:

- managing large multi-module projects
- enforcing consistent build settings across several independent modules

### Basic Concept

- parent POM defines common configuration.
- child POM inherits everything from the parent, and can override or extend it.

## Parent POM

Defines shared settings for all modules.

- properties
- modules
- dependencies
- plugins

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>parent-project</artifactId>
  <version>1.0.0</version>
  <packaging>pom</packaging>

  <modules>
      <module>module-a</module>
      <module>module-b</module>
  </modules>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>3.3.0</version>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <build>
    <pluginManagement>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.11.0</version>
          <configuration>
            <source>${java.version}</source>
            <target>${java.version}</target>
          </configuration>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>
```

## Child module POM

Child modules inherences parent configuration

- dependencies

  - children declare dependencies without repeating versions
  - version is inherited from parent’s dependencyManagement

- plugins

  - defines plugin versions/config for reuse in child modules

- relativePath
  - points to the parent POM’s location (useful if not in the same directory structure)

```xml
<project>
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>parent-project</artifactId>
        <version>1.0.0</version>
        <relativePath>../pom.xml</relativePath>
    </parent>

    <artifactId>module-a</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

## Super POM

The Super POM is the default parent that all Maven projects implicitly inherit from, unless you explicitly override some of its configuration.

- defines Maven’s default behavior
- don’t need to define manually
  — Maven automatically applies it under the hood.

### Default configuration

- default directory layout
  - `src/main/java`
  - `src/test/java`
- default plugin configurations
- default repositories
  - https://repo.maven.apache.org/maven2
- default goals
  - compile, test, package

## Effective POM

The Effective POM is the merged configuration from:

- super POM
- parent POM(s)
- your project POM

To view the effective POM, run this in your project directory

```sh
mvn help:effective-pom
```
