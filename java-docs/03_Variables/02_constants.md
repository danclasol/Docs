# Constants

Constants are like variables, but their value can't be changed once assigned.

- use the `final` keyword
- use uppercase letters (by convention)

### Example

```java
final double PI = 3.14159;
final int MAX_USERS = 100;
```

You must assign a value when declaring a constant.

Trying to change it later will cause a compile-time error:

```java
PI = 3.14; // This will cause an error
```
