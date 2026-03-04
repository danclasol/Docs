# Custom plugins

A Maven custom plugin is a plugin you create to add your own build logic to the Maven lifecycle (e.g., code generation, validation, deployment tasks, automation steps).

- written in Java 
- packaged as `maven-plugin`

## Create a Maven Plugin Project

Generate a plugin using the Maven archetype:

- creates a plugin project structure

```sh
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=my-custom-plugin \
  -DarchetypeArtifactId=maven-archetype-plugin
```