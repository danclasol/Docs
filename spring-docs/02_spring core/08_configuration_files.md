# Configuration Files

Spring configuration files are used to define the beans, dependencies, and infrastructure components of a Spring application. These configurations instruct the Spring container on what objects to create, how to wire them, and what resources to use.

There are two primary types of configuration:

## XML-based configuration

- still supported
- outdated for most modern Spring projects
- located in `src/main/resources`

## Java-based configuration

- strongly typed
- more readable
- easier to refactor
- located in `src/main/java`

## Properties/YAML files

- `application.properties`
- `application.yml`

## Externalization

In Spring configuration can have the way of externalization

- File Configuration
- Enviroment Variables
- External systems
