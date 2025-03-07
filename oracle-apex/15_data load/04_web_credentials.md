# Web Credentials

Web Credentials allow secure connections to external REST services or REST-enabled SQL services.

- securely stored and encrypted
- stored at the workspace level, accesible across all applications

## Proteccion

Protect Web credentials by adding valid URLs to the Valid for URL attribute

- APEX checks if the URL matches the defined URLs before using the web credential
- if it donesn't match, APEX raises a runtime error

## Authentication Types

- Basic Authentication
- OAuth2 Client Credentials Flow
- HTTP Header
- URL Query String
- OCI

## Database Credential

Web credentials (Basic Authentication or OAuth2 Client Credentials types) can reference a database credential to store the Client ID and Client Secret

All HTTP requests use the application's parsing schema context, requiring PL/SQL network ACLs to be granted to that schema.

Database credentials are maintained entirely by the database.

Valid for URLs Attribute is disabled when using a database credential

## Create Web Credentials

To create a web credential:

- navigate to App Builder > Workspace Utilities > Web Credentials
- click Create button
- enter details
  - Name
  - Authentication Type: Basic Authentication
  - Client ID or Username
  - Client Secret or Password
  - Valid for URLs
