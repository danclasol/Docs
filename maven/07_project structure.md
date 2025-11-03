## Maven Project Structure

The Standard Directory Layout refers to the common, organized structure of folders and files in a Maven projects.

- reduces maven configuration, automatically knows where to find sources, tests, and resources
- easy integration with IDEs
- allows users familiar with one Maven project to immediately

Standard Directory Layout

- https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html

## Standard Layout

### `src/main/java`

Contains main Java source code

### `src/main/resources`

Application/Library resources

- application.properties

### `src/main/filters`

Resource filter files

### `src/main/webapp`:

- Web application sources
- Only for web apps
- Contains web assets like HTML, JSPs, CSS, and JS

### `src/test/java`:

- Contains unit and integration tests

### `src/test/resources`:

- Test resources

### `src/test/filters`:

- Test resource filter files

### `src/it`:

- Integration Tests (primarily for plugins)

### `src/assembly`:

- Assembly descriptors

### `src/site`

Site

### `LICENSE.txt`:

Project's license

### `NOTICE.txt`:

Notices and attributions required by libraries that the project depends on

### `README.txt`

Project's readme

### `target`

- created by Maven during build
- holds compiled classes, packaged .jar or .war, and temporary files

### `pom.xml`

Defines project information, dependencies, and build settings.

### `.mvn/`

Hidden folder contains configuration files used by the Maven Wrapper.

### `mvnw`

This is a shell script used on Linux or macOS.

- can be run like this
- checks if Maven is installed locally
- if not, it downloads the specified version into the project’s `.mvn` directory and then runs the command

  ```sh
  ./mvnw clean install
  ```

### `mvnw.cmd`

The Windows batch file equivalent of mvnw.

- run it like this on Windows
  ```sh
  mvnw.cmd clean install
  ```
