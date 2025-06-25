# Manager

The Tomcat Manager is a built-in web application in Apache Tomcat that allows you to deploy, undeploy, reload, and manage web applications through a web browser.

- Make sure the folder `C:\path\to\tomcat\webapps\manager` exists
- accessible at: http://localhost:8080/manager/html
- view deployed applications
- manage deployed applications
- run diagnostics

## Add users and roles

You can create roles and users in the file `tomcat-users.xml`

```
C:\tomcat\conf\tomcat-users.xml
```

To access to manager application you need a user with the role `manager-gui`

```xml
<role rolename="manager-gui"/>
<user username="admin" password="admin123" roles="manager-gui"/>
```

## Applications Table

- Path
- Version
- Display name
- Running (true/false)
- Sessions
- Commands
  - start
  - stop
  - reload
  - undeploy
  - expire sessions

## Deploy

Deploy directory or WAR file located on server
