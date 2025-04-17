# String Class Functions

## `length()`

Returns the length of the string

```java
String str1 = "Hello";
System.out.println(str1.length()); // 4
```

## `charAt(index)`

Returns char at a specific position

```java
String str1 = "Hello";
System.out.println(str1.charAt(0)); // "H"
```

## `toUpperCase()`

Changes text to upper case

```java
String str1 = "hello";
System.out.println(str.toUpperCase()); // "HELLO"
```

## `toLowerCase()`

Changes text to lower case

```java
String str1 = "HELLO";
System.out.println(str.toLowerCase()); // "hello"
```

## `equals()`

Checks content equality

```java
String str1 = "Hola";
System.out.println(str1 + ".equals->" + str1.equals("Hola"));
```

## `equalsIgnoreCase()`

Case-insensitive comparison

```java
String str1 = "Hola";
System.out.println(str1 + ".equals->" + str1.equalsIgnoreCase("HOLA"));
```

## `isEmpty()`

```java
String str1 = "Test123";
String str2 = "";
System.out.println(str1 + ".isEmpty() ->" + str1.isEmpty()); // false
System.out.println(str2 + ".isEmpty() ->" + str2.isEmpty()); // true
```

## `isBlank()`

```java
String str1 = "Test123";
String str2 = "";
System.out.println(str1 + ".isBlank() ->" + str1.isBlank()); // false
System.out.println(str2 + ".isBlank() ->" + str2.isBlank()); // true
```

## `trim()`

Removes leading and trailing spaces

```java
String str4 = " Test \u2005";
String str5 = " Test ";
System.out.println(str4 + ".trim() ->" + str3.trim());;
```

## `strip()`

Remove strange characters as `\n`

```java
System.out.println(str5 + ".strip() ->" + str5.strip());
```

## `stripLeading()`

Remove left spaces

```java
System.out.println(str4 + ".stripLeading() ->" + str5.stripLeading());
```

## `stripTrailing()`

Remove right spaces

```java
System.out.println(str4 + ".stripTrailing() ->" + str5.stripTrailing());
```

## `repeat()`

Repites the string a numer of times

```java
System.out.println(str1 + ".repeat() ->" + str1.repeat(3));
System.out.println(str1 + ".lines() ->" + str1.lines().collect(Collectors.toList()));
```

## `substring()`

Extracts a part of the string

```java
System.out.println(str3 + ".substring(2) ->" + str3.substring(2));
```

## `replace`

Replace characters

```java
System.out.println(str3 + ".replace(H,X) ->" + str3.replace("H","X"));
```

## `concat`

Concatenates two strings

```java
System.out.println("cama.concat(leon)->" + "cama".concat("leon"));
```

## Type Conversion

```java
//Devuelve un entero convertido cadena
System.out.println("String.valueOf(34)->" + String.valueOf(34));

//Transforma un string en una lista
String str7 = "1,2,3,4,5";
List<String> lista = str7.lines().collect(Collectors.toList());
System.out.println(str7 + ".lines() ->" + lista);
```
