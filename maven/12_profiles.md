# Profiles

Profiles allow you to customize builds for different environments (e.g., dev, prod).

```xml
<profiles>
  <profile>
    <id>dev</id>
    <properties>
      <db.url>jdbc:mysql://localhost/devdb</db.url>
    </properties>
  </profile>

  <profile>
    <id>prod</id>
    <properties>
      <db.url>jdbc:mysql://prodserver/mydb</db.url>
    </properties>
  </profile>
</profiles>
```

Activate a profile with:

```xml
mvn clean install -Pprod
```
