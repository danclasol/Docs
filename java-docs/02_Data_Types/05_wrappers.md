# Wrappers

In Java, wrappers (or wrapper classes) are object representations of primitive data types.

Useful when you need to use objects instead of primitives

- e.g.:
  - Generic programming:
    - requires objects, doesn't support primitives
  - Collections:
    - like `ArrayList<Integer>` cannot store primitives
  - Utility methods
    - like `Integer.parseInt()`
  - Nullability: Wrapper objects can be null, primitives cannot
    - `int` or `boolean` can’t be null, they always have a value

## Wrapper list

### `Byte`

```java
byte b = 10;
Byte byteObj = b;  // autoboxing
System.out.println("Byte object: " + byteObj);
```

### `Short`

```java
short s = 1000;
Short shortObj = s;
System.out.println("Short object: " + shortObj);
```

### `Integer`

```java
int i = 12345;
Integer intObj = i;
System.out.println("Integer object: " + intObj);
```

### `Long`

```sql
long l = 999999L;
Long longObj = l;
System.out.println("Long object: " + longObj);
```

### `Float`

```sql
float f = 5.75f;
Float floatObj = f;
System.out.println("Float object: " + floatObj);
```

### `Double`

```java
double d = 3.14159;
Double doubleObj = d;
System.out.println("Double object: " + doubleObj);
```

### `Character`

```java
char c = 'A';
Character charObj = c;
System.out.println("Character object: " + charObj);
```

### `Boolean`

```java
boolean bool = true;
Boolean boolObj = bool;
System.out.println("Boolean object: " + boolObj);
```

## Converting primitive to wrapper

### Autoboxing

The automatic conversion of primitive types to the object of their corresponding wrapper classes is known as autoboxing.

```java
int x = 5;
Integer y = x;
```

### Manual boxing

Also can be done manually

```java
Integer manual = Integer.valueOf(42);
```

## Converting wrapper to primitive

### Unboxing

Automatically converting an object of a wrapper class to its corresponding primitive type is known as unboxing.

```java
Integer a = 10;
int b = a;
```

## Manual unboxing

Wrappers have useful methods to convert a wrapper to a primitive

```java
int parsed = Integer.parseInt("123");
```
