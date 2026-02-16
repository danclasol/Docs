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

## Common plugin

- maven-compiler-plugin Compiles Java source code
- maven-surefire-plugin Runs unit tests
- maven-jar-plugin Packages the JAR
- maven-install-plugin Installs artifact to local repo
- maven-deploy-plugin Deploys artifact to remote repo


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