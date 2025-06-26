# Components

## Server

Top-level component that represents the entire Tomcat instance.

Contains Service elements.

## Service

Connects network requests (via Connectors) to the processing engine (Engine).

## Connector

Handles client requests (e.g. HTTP on port 8080, HTTPS on port 8443).

Converts socket requests into servlet requests.

## Engine

Core request-processing unit that passes requests from Connectors to the correct Host.

## Host

Represents a virtual host (e.g., localhost, myapp.com) — allows running multiple sites/apps.

- Can be configured in `conf/server.xml` file
- `appBase`: set the folder where WAR should be store
  - default `webapps`
- `unpackWARs`: unpack WARS automatically
- `autoDeploy`: deploy automatically when a new `war` is detected in appBase folder
  - in production is recommened to set to `false`

```xml
<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">
</Host>
```

## Context

Represents a single web application (a WAR file or folder). It’s the lowest level of the hierarchy.

## Loader

Loads classes and resources for each web application (separate classloader per app).

## Realm

Handles authentication and authorization (e.g., file-based, JDBC, JAAS, etc.).

## Manager

Manages the lifecycle of web apps (deploy, reload, undeploy, etc.).

## Valve

Special filters that can intercept and modify requests/responses.

## Pipeline

Contains and organizes multiple Valves for a component.

## Session Manager

Tracks user sessions and stores session data (memory, file, database, etc.).
