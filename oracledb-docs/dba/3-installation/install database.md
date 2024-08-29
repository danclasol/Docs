# Install Oracle Database

## Create an Oracle account

We need a Oracle account to download the software.

- Free account: https://profile.oracle.com/myprofile/account/create-account.jspx

## Download the installer

Descargar la version especifica para el sistema operativo donde vayamos a instalar la base de datos.

- Oracle Database 21c for Windows x64: https://www.oracle.com/database/technologies/oracle21c-windows-downloads.html

- Oracle Database 21c for Linux: https://www.oracle.com/database/technologies/oracle21c-linux-downloads.html

## Installation Assitance

Follow the assistant:

### Configuration Option

- [x] Create and configurate a single instance database

- [_] Set Up Software Only

### Database Installation Options

- [x] Desktop class: si lo vamos a instalar en un ordenador normal

- [_] Server class: si lo vamos a instalar en un ordenador servidor

### Oracle Home User

- [x] User virtual Account: para simplificar usar esta opcion
- [_] User Existing Windows User
- [_] Create New Windows User
- [_] Use Windows Bulit-in Account

### Typical Installation

- Oracle Base: localizacion de la carpeta de instalacion
- Software location: localizacion fichero instalacion
- Database edition: Enterprise Edition
- Character Set: Unicode (AL32UTF8)
- **Global Database name**: **orcl**
- Password: []
- Pluggable database name: **orclpdb**

### Summary

- Next

### Install Product

- Install
