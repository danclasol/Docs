# Tomcat

Apache Tomcat is a free, open-source web server and servlet container developed by the Apache Software Foundation.

Tomcat is a server that executes Java code on the web, especially:

- Java Servlets
- JavaServer Pages (JSP)
- Web applications packaged as `.war` files

## What Tomcat Does

- HTTP Server
  - Handles web traffic (like a basic web server)
- Servlet Engine
  - Executes Java servlets (Java classes that respond to HTTP requests)
- JSP Engine
  - Compiles `.jsp` pages into servlets
- WAR Deployment
  - Runs full Java web apps packaged in `.war` files
- Management App
  - Lets you manage apps through a web interface (`/manager/html`)

## Versions

- Tomcat 11
- Tomcat 10
- Tomcat 9

## Start Tomcat server

Open a terminal with Admin privileges and execute the following file

- `C:\Program Files\Apache Tomcat\apache-tomcat-11.0.8\bin`
- `localhost:8080` - should show Tomcat running server

```
startup.bat
```

## Stop Tomcat server

Open a terminal with Admin privileges and execute the following file

- `C:\Program Files\Apache Tomcat\apache-tomcat-11.0.8\bin`

```
shutdown.bat
```
