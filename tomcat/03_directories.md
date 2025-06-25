# Directories and Files

## `/bin`

Scripts to start/stop Tomcat

- `startup.bat`/`startup.sh`:
  - start Tomcat server in Windows/Linux
- `shutdown.bat`/`shutdown.sh`
  - stops Tomcat server in Windows/Linux
- `catalina.bat`/`catalina.sh`
  - main script used by the startup/shutdown files
- `setenv.bat`/`setenv.sh`
  - set environment variables
  - optional file

## `/webapps`

Folder to add you WARs file to deploy

- `ROOT/` - default app served at `/` (homepage)
- `manager/`
  - Tomcat Web Manager GUI
- `host-manager/ `
  - host management web GUI
- `.war` files

## `/conf`

Configuration files

- `server.xml`
  - main configuration file: connectors, hosts, ports, etc
- `tomcat-users.xml`
  - User and role definitions for accessing the manager/host-admin apps
- `web.xml`

  - global default settings for all web applications

- `context.xml`
  - default context settings for all apps
- `logging.properties`
  - java logging configuration

## `/logs`

Log output

- `catalina.out`/`catalina.YYYY-MM-DD.log` - main Tomcat log file

- `localhost.log`/`host-manager.log`/`manager.log`

  - per-application logs

- `stderr.log`/`stdout.log`
  - logs from standard output/error (Windows only)

## `lib/`

Internal Tomcat libraries, servlet API, JSP API, etc.

- you generally don’t need to touch this unless adding core server extensions

## `temp/`

Temporary runtime data

## `work/`

JSP cache and sessions

- cleared automatically on server restart
