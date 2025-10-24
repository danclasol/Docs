# Multi-Module Projects

## Parent POM

Defines shared settings for all modules.

```xml
<project>
  <groupId>com.example</groupId>
  <artifactId>parent-project</artifactId>
  <version>1.0.0</version>
  <packaging>pom</packaging>

  <modules>
    <module>module-a</module>
    <module>module-b</module>
  </modules>
</project>
```

## Child module POM

```xml
<parent>
  <groupId>com.example</groupId>
  <artifactId>parent-project</artifactId>
  <version>1.0.0</version>
</parent>

<artifactId>module-a</artifactId>
```

## Dependency Management (Advanced)

For multi-module projects or dependency version control, use `<dependencyManagement>`.

Example (in a parent POM):

```xml
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>3.2.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
```

This lets child projects use dependencies without repeating versions.
