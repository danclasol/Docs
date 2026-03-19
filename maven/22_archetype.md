# Archetypes

A Maven archetype is a template for creating projects. Instead of setting everything up manually, you run a command and Maven generates the project for you.

## Popular templates

- `maven-archetype-quickstart`: creates a simple Java project
- `maven-archetype-webapp`: template for web applications
- `maven-archetype-archetype`: used to create your own archetypes

## Using archetype

For example, to create a web application
- `groupId`: your company/package (e.g., com.example)
- `artifactId`: project name (my-webapp)
- `archetypeArtifactId`: template (maven-archetype-webapp)
- `interactiveMode=false`: skips prompts

```sh
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=my-webapp \
  -DarchetypeArtifactId=maven-archetype-webapp \
  -DinteractiveMode=false
```

## Create custom archetype

You can create an Archetype from an existing project.

### Start with a Project

Create a normal Maven project, that will be the archetype template:

- add dependencies
- configure `pom.xml`
- add folder structure
- add base classes

### Generate the Archetype

Generate the archetype using your project
- maven will create a new folder: `target/generated-sources/archetype/`
- contains your archetype project

```sh
mvn archetype:create-from-project
```

Install the Archetype Locally

- Move into that folder: `target/generated-sources/archetype`
- now your archetype is available locally

```sh
mvn install
```

### Using custom Archetype

To create a new project using a custom archetype

```sh
mvn archetype:generate \
  -DarchetypeGroupId=com.example \
  -DarchetypeArtifactId=my-custom-archetype \
  -DarchetypeVersion=1.0-SNAPSHOT \
  -DgroupId=com.test \
  -DartifactId=new-project \
  -DinteractiveMode=false
```