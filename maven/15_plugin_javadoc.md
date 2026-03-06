# Javadoc plugin

Used to generate Javadoc documentation from your Java source code.

- generates documentation in `target/site/apidocs`
- can be open in a browser `target/site/apidocs/index.html`

```sh
mvn javadoc:javadoc
```

## Configuration

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-javadoc-plugin</artifactId>
      <version>3.6.3</version>
      <configuration>
        <footer>Test footer</footer>
      </configuration>
      <executions>
        <execution>
          <id>attach-javadocs</id>
          <phase>compile</phase>
          <goals>
            <goal>jar</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```