# Plugin WAR

Used to package a Java web application into a `WAR` file (Web Application Archive).

- packages the compiled `.class` files and resources from `target/classes` into a `.war` during the package phase of the Maven lifecycle.

Normally you don’t need to configure it because Maven runs it automatically when the project packaging type is war.

- the `war` will be generated in `target/my-app-1.0.0.war`

```sh
mvn package
```

## WAR goal

You can also run the war plugin but it will not automatically compile your project first
- does NOT run the full Maven lifecycle
- only generates `war` file

```sh
mvn war:war
```

You can also set properties

```sh
mvn war:war -Dwar.failOnMissingWebXml=false
```

## Configuration

If you want to customize the JAR, you configure the plugin inside build/plugins.

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-war-plugin</artifactId>
      <version>3.4.0</version>
      <configuration>
        <failOnMissingWebXml>false</failOnMissingWebXml>
<       /configuration>
    </plugin>
  </plugins>
</build>
```