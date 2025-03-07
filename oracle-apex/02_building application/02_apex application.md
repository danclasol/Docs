# APEX Application

An APEX application is an HTML interface that exists on top of database objects, such as tables or procedures.

Is a collection of pages that are linked together using navigation menus, tabs, buttons, or hypertext links

## Application Page

A page is the basic building block of an application. Every application consists of one or more pages.

To view a rendered version of your APEX application, you run or submit it to the Oracle APEX engine.

## APEX Engine

The APEX engine dynamically renders and processes pages based on the data stored in database tables.

The APEX engine can either:

- run pages individually
- run an entire application

## Page Processsing and Page Rendering

When you run an APEX application, the APEX engine relies on two processes:

- _show page_: page rendering process that assembles attributes, regions, items, and buttons into your viewable history HTML page

  - when you request a page using a URL, the engine is running Show Page

- _accept page_: forms page processing, computations, validations, processes, and branching
  - when you submit a page, the engine is running Accept Page or performing Page Processing, during which it saves the submitted values in the session cache and then performs any computations, validations, or processes

You can control how your pages and page components display and when processes, competitions, and validations are executed.

## Application User Interface

Universal Theme is a user interface for Oracle APEX that provides:

- components and building blocks necessary to build practically any type of business application
- without becoming an expert in UI design, HTML, CSS, or JavaScript
- responsive design
- versatile user interface
- easy customization

## Session State Management

Session state enables developers to store and retrieve values for a user as the user navigates between different application pages.

### Session ID

The Oracle APEX engine establishes a unique session ID assigned to a specific user that persist across page views.

- session ID is displayed in the URL for a page request
  - third parameter in the URL

```
https://apex.example.com/ords/mycompany/r/hr-app/update-employess?session=12357485443
```

### Sessions

Sessions established persistence across page views.

- each session is assigned a unique identifier or Session ID
- any numner of sessions can exists in the database at the same time
- an user can also run multiple instances of an application simultaneously in differents browsers
- sessions ares logically and physically distinct from Oracle database sessions used to service page requets

## Application URL Sintax

APEX application support two types of URL syntax:

- f?p syntax (APEX release before 20.1)
- Friendly URL syntax (APEX release 20.1 or later)
  - existing applications can use Friendly URLs by editing the Friendly ULRs attribute in the application definition

Friendly URL syntax creates a URL structure that using standard web parameter syntax identifies:

- address of Oracle APEX
- application
- page

### Syntax

```
hostname:port/ords/r/path_prefix/app_alias/page_alias?parameters
```

### Example

```
hostname:port/ords/r/mycompany/hr-app/update-employees?session=12321732183
```

### Customize Friendly URL

You can customize a Friendly URL by editing:

- path prefix: in the workspace administration
- application alias: in the application definition
- page alias: in the Page Designer
