# Valves

Special filters that can intercept and modify requests/responses.

Configured and executed at the Tomcat server level, not within your web application.

- only available in Tomcat
- similar to Servlet filters, but better performance
- allow IP filtering,access logging, redirects, custom authentication, etc

## Common uses

- need server-wide behavior, not just for a single app.
- intercept requests before servlet filters
- need access control, logging, or monitoring at the Tomcat level
- performance or security features without modifying your web app

## Common buildt-in Valves

### AccessLogValve

Logs every request to a file. Useful for traffic monitoring or audits.

### RemoteAddrValve

Allows or blocks requests based on the client's IP address.

```xml
<Valve className="org.apache.catalina.valves.RemoteAddrValve"
       allow="192\.168\.1\.\d+|127\.\d+\.\d+\.\d+" />
```

### RequestDumperValve

Dumps all request and response headers to the console or log. Helpful for debugging.

### SingleSignOn Valve

Allows Single Sign-On between multiple web applications running under the same Engine.

## Configuration

Valves are configured in Tomcat's `server.xml` file.

### Define at Engine level

Affects all virtual hosts `<Host>` and web applications within this engine.

```xml
<Engine name="Catalina" defaultHost="localhost">
    <Valve
       className="org.apache.catalina.valves.AccessLogValve"
       directory="logs" prefix="engine_access" suffix=".txt"
       pattern="%h %l %u %t &quot;%r&quot; %s %b" />
</Engine>
```

### Define at Host level

Affects all web applications within that specific virtual host.

```xml
<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">
    <Valve
       className="org.apache.catalina.valves.RemoteAddrValve"
       allow="127\.\d+\.\d+\.\d+" />
</Host>
```

## Define at Context level

Affects a specific web application.

This can be done either:

- `server.xml` (not recommended)
- `context.xml` context-specific (recommended)

### Inside `conf/[engine]/[host]/[appName].xml`

```xml
<Context path="/myapp" docBase="myapp">
       <Valve className="org.apache.catalina.valves.RequestDumperValve" />
</Context>
```
