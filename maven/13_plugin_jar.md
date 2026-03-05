# Plugin JAR

Used to create a `JAR` file from your compiled project. 
- packages the compiled `.class` files and resources from `target/classes` into a `.jar` during the package phase of the Maven lifecycle.

Normally you don’t need to configure it because Maven runs it automatically when the project packaging type is jar.

- the `jar` will be generated in `target/my-app-1.0.0.jar`

```sh
mvn package
```

## JAR goal

You can also run the jar plugin but it will not automatically compile your project first
- does NOT run the full Maven lifecycle
- only generates `jar` file

```sh
mvn jar:jar
```

You can also set properties

```sh
mvn jar:jar -Djar.fileName=test -Djar.forceCreation=true
```


## Configuration

If you want to customize the JAR, you configure the plugin inside build/plugins.

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-jar-plugin</artifactId>
      <version>3.3.0</version>
      <configuration>
        <fileName>test</filename>
        <forceCreation>test</forceCreation>
      </configuration>
    </plugin>
  </plugins>
</build>
```