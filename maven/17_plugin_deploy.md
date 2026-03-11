# Deploy plugin

Used to build your project and upload the generated artifact (such as a JAR or WAR file) to a remote repository.

- artifact generated during the package phase
- uses the `distributionManagement` section in the `pom.xml`
- iploads the artifact and its metadata (.pom, checksums, etc.) to a remote repository

## Configuration

Usually, you don’t need to configure it explicitly, because Maven includes it by default.

However, you can configure it in pom.xml if needed:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-deploy-plugin</artifactId>
      <version>3.1.1</version>
    </plugin>
  </plugins>
</build>
```

For the plugin to work, the pom.xml must define where to deploy:

- repository → for release versions
- snapshotRepository → for -SNAPSHOT versions

```xml
<distributionManagement>
  <repository>
    <id>company-releases</id>
    <url>https://repo.example.com/maven-releases</url>
  </repository>
  <snapshotRepository>
    <id>company-snapshots</id>
    <url>https://repo.example.com/maven-snapshots</url>
  </snapshotRepository>
</distributionManagement>
```

## Goals

### `:deploy` 
Deploys the artifact to the remote repository

### `:deploy-file`

Deploys a specific artifact manually

```sh
mvn deploy:deploy-file \
  -Dfile=myapp.jar \
  -DgroupId=com.example \
  -DartifactId=myapp \
  -Dversion=1.0 \
  -Dpackaging=jar \
  -DrepositoryId=company-releases \
  -Durl=https://repo.example.com/maven-releases
```