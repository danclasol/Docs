# Migrating

For migrating applications, we need scripts for all the database objects (DML)

Migration also involves moving data from development to production enviroment (DDL)

For migrating an application, development environment and production enviroment must have the same version of APEX running.

Update the target APEX enviroment prior to importing the application in case of version mismatch

## Generate Database Objects Scripts (DDL)

To generate the DDL Script go to the home page of the application and click on Supporting Objects

![Supporting Objects](images/supporting_objects.png)

Under Installation section, click on Installation Scripts

![Installation Script](images/supporting_objects_install_scripts.png)

Click on Create and select Create from Database Object

![alt text](images/scripts_from_database_object.png)

### Script Attributes

Enter the Script Attributes

- Name
- Object Type:
  - index, table, package, procedure, sequence, trigger, view

![alt text](images/scripts_from_database_object_attributes.png)

### Define Scripts

Select the object from the list

![alt text](images/script_from_database_object_define.png)

Confirm the details and click on Create

![alt text](images/script_from_database_objcect_confirm.png)

## Generate Data Package Scripts (DDL)

To generate the DDL Script go to the home page of the application and click on Supporting Objects

![Supporting Objects](images/supporting_objects.png)

Under Installation section, click on Installation Scripts

![Installation Script](images/supporting_objects_install_scripts.png)

Click on Create and select Create from Data Package

![Data Package Create](images/data_package_create.png)

### Script Attributes

Enter the Script Attributes

- Name
- Select Tables

![Data Package Script](images/data_package_script.png)

### Define Scripts

Confirm the details and click on Create

![Data Package Define](images/data_package_script_define.png)

## Export Application

To export an application, navigate to the home page and click on Export/Import

![Export / Import](images/export_import.png)

Select among the different options

- Readable Format
  - human-readable YAML version of the application meta-data
  - used to review differences between versions of an application when checked into a Version Control System
- Supporting Object Definitions
- Split into Multiple Files
  - separate files for each page, shared component, and so forth
- Public Reports

![Export Application](images/export_application.png)

Click on Export

## Import Application

To import an application, navigate to App Builder > Import

![Import](images/import.png)

Upload the zip with the exported application

![Import File](images/import_file.png)

Select the installation options

- Parsing Schema
- Build Status
- Install As Application
  - Auto Assign New Application
  - Reuse Application ID From Imported Application
  - Change Application ID

![Import Install](images/import_install.png)

![Import Installed](images/import_finish.png)
