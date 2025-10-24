# Project Object Model (pom)

Maven uses a configuration file called `pom.xml` (_Project Object Model_) to:

- describes, configures and customized a Maven Project
- maven reads the `pom.xml` file to build a project
- defines the "_address_" for the project artifact using a coordinate system
- dependencies (libraries and frameworks)
- Specifies project information, plugin, goals, dependencies and profiles

## Project Metadata

### `<modelVersion>`

Version of the POM model

- always 4.0.0

```xml
<modelVersion>4.0.0</modelVersion>
```

### `<groupId>`

Unique ID for your project’s organization or domain.

```xml
<groupIdId>com.example.dev</groupIdId>
```

### `<artifactId>`

The name of the project or module.

```xml
<artifactId>myApplication</artifactId>
```

### `<version>`

The specific version (e.g., 1.0.0, 1.0.0-SNAPSHOT)

```xml
<version>myApplication</version>
```

### `<name>`

Human-readable project name.

```xml
<description>My first web application</description>
```

### `<description>`

Description of the project.

```xml
<description>My first web application</description>
```

### `<packaging>`

Defines how the project is packaged:

- jar
- war
- pom

```xml
<packing>JAR</packing>
```

### `<developers>`

The `<developers>` section lists the main authors or maintainers of the project.

This metadata appears in generated documentation or when publishing artifacts to repositories like Maven Central.

```xml
<developers>
  <developer>
    <id>jclark</id>
    <name>John Clark</name>
    <email>john.clark@example.com</email>
  </developer>
</developers>
```

### `<organization>`

It defines the company or group behind the project.

```xml
<organization>
  <name>Clark Gómez Software</name>
  <url>https://clarkgomez.com</url>
</organization>
```

### `<licenses>`

If your project is open source or shared, you should include the license information:

```xml
<licenses>
  <license>
    <name>Apache License, Version 2.0</name>
    <url>https://www.apache.org/licenses/LICENSE-2.0</url>
    <distribution>repo</distribution>
  </license>
</licenses>
```

### `<scm>`

Source Control Management, specifies where your project’s source code is stored

- typically GitHub, GitLab, or Bitbucket
- helps Maven (and plugins like maven-release-plugin) connect to your code repository

```xml
<scm>
  <connection>scm:git:git://github.com/clarkgomez/myapp.git</connection>
  <developerConnection>scm:git:ssh://github.com/clarkgomez/myapp.git</developerConnection>
  <url>https://github.com/clarkgomez/myapp</url>
  <tag>HEAD</tag>
</scm>
```

### Properties

Use properties to avoid repeating values.

```xml
<properties>
  <java.version>17</java.version>
  <spring.version>6.0.0</spring.version>
</properties>

<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-core</artifactId>
  <version>${spring.version}</version>
</dependency>
```

### Build Section

The `<build>` section defines how the project is built, including:

- Output directories
- Plugins (for compiling, testing, packaging)
- Build resources

Example:

```xml
<build>
  <sourceDirectory>src/main/java</sourceDirectory>
  <testSourceDirectory>src/test/java</testSourceDirectory>

  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.10.1</version>
      <configuration>
        <source>17</source>
        <target>17</target>
      </configuration>
    </plugin>

    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-jar-plugin</artifactId>
      <version>3.3.0</version>
      <configuration>
        <archive>
          <manifest>
            <mainClass>com.example.Main</mainClass>
          </manifest>
        </archive>
      </configuration>
    </plugin>
  </plugins>
</build>
```
