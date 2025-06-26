# JDBC

Apache Tomcat provides a JDBC connection pool, called the Tomcat JDBC Connection Pool.

It manages a pool of database connections, so your application can reuse them efficiently, instead of opening and closing a new database connection for every request.

- integrated with Tomcat
- high performance and low overhead
- easy to configure

## Configuration

### Create Resource

Recommended to configure it in `context.xml` file

- `name`: JNDI name used to look up the DataSource from your application
- `auth`: usually set to _Container_, meaning Tomcat manages this resource.
- `type`: Java type of the resource. For JDBC, always javax.sql.DataSource
- `driverClassName`: fully qualified name of the JDBC driver class
  - depend on the database client
  - MySQL, PostgreSQL, Oracle
- `url`: JDBC URL of your database
- `user/pass`: database username and password
- `maxIdle`: maximum number of idle connections (to prevent overuse of resources)
- `minIdle`: minimum number of idle (ready) connections in the pool

```xml
<Context>
  <Resource
    name="jdbc/MyDB"
    auth="Container"
    type="javax.sql.DataSource"
    driverClassName="oracle.jdbc.driver.OracleDriven"
    url="jdbc:oracle://localhost:3306/mydatabase"
    username="dbuser"
    password="dbpass"
    maxActive="50"
    maxTotal="15"
    maxIdle="3" />
</Context>
```

### Usage in web app

```xml
<resource-ref>
    <description>DB Connection</description>
    <res-ref-name>jdbc/MyDB</res-ref-name>
    <res-type>javax.sql.DataSource</res-type>
    <res-auth>Container</res-auth>
</resource-ref>
```

Java code

```java
Context initContext = new InitialContext();
DataSource ds = (DataSource) initContext.lookup("java:comp/env/jdbc/MyDB");
Connection conn = ds.getConnection();
```
