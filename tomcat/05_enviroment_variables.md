# Enviroment variables

### `JAVA_HOME`

Points to the Java JDK or JRE Tomcat will use.

- required to use Tomcat

### `JAVA_OPTS`

A general-purpose variable for passing Java options like heap size, GC settings, etc.

- used in all Tomcat scripts, including `startup.bat`, `shutdown.bat`, etc.
- can unintentionally affect things like shutdown if misused

```cmd
set JAVA_OPTS=-Xms512m -Xmx1024m -Dapp.env=prod
```

### `CLASSPATH`

Used to include additional Java classes or JARs.

- usually handled automatically
- rarely needed

### `CATALINA_OPTS`

Java options used only when starting the Tomcat server.

- use for memory, GC, custom system props
- preferred place to set server-specific settings
- does not affect `shutdown.bat` or other utility scripts

```cmd
set CATALINA_OPTS=-Xms512m -Xmx1024m -Denv.path=C:/app_env
```

### `CATALINA_HOME`

Root directory of the Tomcat installation.

- used internally by Tomcat scripts

### `CATALINA_BASE`

Allows multiple Tomcat instances to use the same `CATALINA_HOME` with separate configs/logs/webapps.

### `LOGGING_CONFIG`

Specifies custom logging configuration file, e.g. for Log4j.

### `LOGGING_MANAGER`

Set if using custom Java logging manager class.
