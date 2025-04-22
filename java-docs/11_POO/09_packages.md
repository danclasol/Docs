# Packages

A package is a namespace that groups related classes, interfaces, enums, and sub-packages.

Think of packages like folders on your computer. They help keep code organized, modular, and reusable.

- organization:
  - keeps related classes together
  - e.g., models, controllers, services
- avoid name conflicts
  - two classes with the same name can exist in different packages
- access control:
  - helps restrict access using access modifiers
- modularity:
  - makes your OOP design clean and maintainable
- reusability:
  - you can reuse whole packages across projects

## Declare a package

```java
package com.myapp.models;

public class User {
    private String name;
    // ...
}
```

## Import a Package

If you want to use that class elsewhere

```java
import com.myapp.models.User;

public class Main {
    public static void main(String[] args) {
        User u = new User();
    }
}
```
