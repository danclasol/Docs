# Maven Instalation

## Prerequisites

### Java

You need a Java Development Kit (JDK) installed.

- set the `JAVA_HOME` environment variable to the path of your JDK installation or have the java executable on your `PATH`

- current stable version 3.9.11 requires JDK 8+, but any recent version will work just fine

## Instalation

- Download the Apache Maven binary distribution archive

  - https://maven.apache.org/download.cgi

- Extract the distribution archive in any directory
- Add the bin directory of the created directory to the `PATH` environment variable
  - Add new entry to _PATH_
  - "C:/Program Files/apache-maven-3.9.11/bin"
- Confirm correct instalation by executing this command in a shell
  ```sh
  mvn -v
  ```
