# Encrypt passwords

When using passwords for servers like Apache Tomcat is recommended to encrypyt the passwords inside your Maven configuration.

- instead of writing this in plain text:
```xml
<password>mySecret123</password>
```

- store it encrypted

```xml
<password>{COQLCE6DU6GtcS5P=}</password>
```

## Create a master password

Create a master password
- it will create something like this `{jSMOWnoPFqzXNk0y3z4aQ==}`

```sh
mvn --encrypt-master-password
```

Copy this to `~/.m2/settings-security.xml`

```xml
<settingsSecurity>
  <master>{jSMOWnoPFqzXNk0y3z4aQ==}</master>
</settingsSecurity>
```

## Encrypt your actual password

Encrypt the password you will be using in the maven configuration files.
- example output: `{COQLCE6DU6GtcS5P=}`

```sh
mvn --encrypt-password mySecret123
```

For example, use it in `settings.xml`
```xml
<servers>
  <server>
    <id>tomcat-server</id>
    <username>admin</username>
    <password>{COQLCE6DU6GtcS5P=}</password>
  </server>
</servers>
```