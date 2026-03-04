# Clean plugin

The clean plugin is responsible for removing files generated during the build process.
- delete the `target/` directory (by default)
- remove compiled classes
- remove packaged JAR/WAR files
- remove any other generated build artifacts
```sh
mvn clean
```

## Configuration

```xml
Clean Plugin Configuration

The clean plugin can be configured in your pom.xml:

<build>
    <plugins>
        <plugin>
            <artifactId>maven-clean-plugin</artifactId>
            <version>3.3.2</version>
            <configuration>
                <filesets>
                    <fileset>
                        <directory>logs</directory>
                    </fileset>
                </filesets>
            </configuration>
        </plugin>
    </plugins>
</build>
```