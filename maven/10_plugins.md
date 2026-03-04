# Plugins

A plugin is a group of goals, and a plugin only belongs to a specific plugin.

Plugin can be understood as a Java class
- a class groups multiple methods
- a goal is like a method in a class
- when a phase is executed is like the main deciding which methods to call in a certain order

## Examples

For example, `maven-compiler-plugin` plugin has the following goals:
- `compiler:compile`
- `compiler:testCompile`

Goals aren’t necessarily all bound to the same phase.

For example, `maven-failsafe-plugin` plugin has two main goals configured here:

- `integration-test`: run integration tests
- `verify: verify` all integration tests passed

```xml
<build>
    <plugins>
        <plugin>
            <artifactId>maven-failsafe-plugin</artifactId>
            <version>${maven.failsafe.version}</version>
            <executions>
                <execution>
                    <goals>
                        <goal>integration-test</goal>
                        <goal>verify</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

## Common plugins

There are available a list of plugin in the Maven repository: https://maven.apache.org/plugins/

The most commot puligns are:

- `maven-compiler-plugin`: compiles Java source code
- `maven-surefire-plugin`: runs unit tests
- `maven-jar-plugin`: packages the JAR
- `maven-install-plugin`: installs artifact to local repo
- `maven-deploy-plugin`: deploys artifact to remote repo


## Common commands

### `help`

We can use the following command to list all goals in a specific plugin:
```sh
mvn <PLUGIN>:help
```
### `<goal>`

To run a specific goal without executing its entire phase (and the preceding phases), we can use the command:
```sh
mvn failsafe:integration-test
```

## Plugin properties

The behaviour of a plugin can be customize using properties.

### In Command line

You can override properties at runtime:
```sh
mvn compiler:compile -Dmaven.compiler.verbose=true
```
 
### In `pom.xml`
```xml
<build>
    <pluginManagement>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.2</version>
                <configuration>
                      <verbose>true</verbose>
                </configuration>
            </plugin>
        </plugins>
    </pluginManagement>
</build>
```
