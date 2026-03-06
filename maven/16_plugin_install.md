# Install plugin

Copies a built artifact into the local Maven repository so that other projects on the same machine can use it as a dependency.

Normally, we run the entire Maven build lifecycle up to the install phase.
```sh
mvn install
```

## Goals

The plugin mainly provides the goal:

### `:install`

Installs the current project's artifact into the local Maven repository.
- skipping the Maven lifecycle

```sh
mvn install:install
```

### `install:install-file`

Installs a specific external file into the local repository.

This is used when the artifact is not available in Maven repositories.

```sh
mvn install:install-file \
-Dfile=library.jar \
-DgroupId=com.example \
-DartifactId=library \
-Dversion=1.0 \
-Dpackaging=jar
```