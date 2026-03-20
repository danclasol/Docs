# Tomcat

Apache Tomcat is an open-source Java servlet container and HTTP web server developed by the Apache Software Foundation.
- runs Java web applications (e.g., Spring, Struts)
- hosts microservices and REST APIs
- deploying WAR (Web Application Archive) files
- serves as a backend for enterprise and startup applications


# Maven Tomcat Plugin

The Tomcat Plugin integrates Apache Tomcat with Maven to simplify the development and deployment of Java web applications.  
- provides goals to manipulate `WAR` projects directly within the Tomcat servlet container
- enables to run, deploy, and manage web applications without needing a standalone Tomcat installation


## Configuration

Add plugin to `pom.xml`

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.tomcat.maven</groupId>
      <artifactId>tomcat7-maven-plugin</artifactId>
      <version>2.2</version>
      <configuration>
        <url>http://localhost:8080/manager/text</url>
        <server>tomcat-server</server>
        <path>/myapp</path>
      </configuration>
    </plugin>
  </plugins>
</build>
```

Configure credentials

- Maven settings.xml:

```xml
<servers>
  <server>
    <id>tomcat-server</id>
    <username>admin</username>
    <password>password</password>
  </server>
</servers>
```

## Goals

### `:deploy`
First deploy

```sh
mvn tomcat9:deploy
```

### `:redeploy`

- stops the running app in Tomcat
- uploads the new WAR
- starts it again

```sh
mvn tomcat9:redeploy
```
