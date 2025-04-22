# Type Casting

Typecasting is the process of converting the value of a single data type into another data type.

This conversion is done either:

- automatically: compiler performs the automatic conversion
- manually: a programmer does the manual conversion

## Importance of Type Casting

Type conversion and casting in Java bear huge importance.

- _Preventing Data Loss_:

  - When we change data from one type to another, we need to ensure that we do not lose any valuable information
  - Type casting helps us convert data safely while keeping its integrity intact

- Making Operations Work:

  - Imagine trying to mix a glass of water with a cup of sugar
  - Some operations can not work with different data types
  - Type casting makes these operations possible by making data types compatible

- Efficient Memory Use:

  - Type casting and type conversion in Java help manage memory better
  - Sometimes, a larger data type might be used for a smaller value. This can waste memory
  - Type casting lets us use the right size for the right data

- Handling User Input:

  - When we get input from users, it is usually in text form. But, we need numbers for calculations
  - Type casting helps convert this text into numbers for proper processing

- Better Programming Control:
  - Java is a strongly-typed language, which means it is strict about data types
  - Type casting and type conversion in Java allow programmers to take control and ensure the right data type is used at the right time

## Types of Type Casting

### Widening Type Casting

Also called upcasting, this happens automatically when converting a smaller type to a larger type.

```
byte -> short -> char -> int -> long -> float -> double
```

- performed automatically
- is safe: there is no risk of data loss
- data types must be compatible

Example

```java
int myInt = 10;
double myDouble = myInt;  // automatic casting: int → double

System.out.println(myInt);      // 10
System.out.println(myDouble);   // 10.0
```

### Narrowing Type Casting

Also called downcasting or explicit type casting, this must be done manually when converting from a larger type to a smaller one.

```
double -> float -> long -> int -> char -> short -> byte
```

- must be done manually
- unsafe: data loss might occur due to the smaller range of allowed values of the lower data type
- cast operator helps in explicit casting

Example

```java
double myDouble = 9.78;
int myInt = (int) myDouble;   // manual casting: double → int

System.out.println(myDouble); // 9.78
System.out.println(myInt);    // 9 (decimal part lost)
```
