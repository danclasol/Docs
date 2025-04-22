# Records

Special kind of Java class which has a concise syntax for defining immutable data-only classes.

- are immutable, no setter methods are generated
- is final, you cannot create subclasses (subrecords)

Can be useful for holding:

- records returned from a database query
- records returned from a remote service call
- records read from a CSV file
- similar types of use cases

## Creating Records

A Java Record consist of

- can have multiple constructors
- data fields which corresponds to member variables in a regular Java class
- auto generates getter methods, toString(), hashcode() and equals() methods for these data fields

```java
public record Vehicle(String brand, String licensePlate) {}
```

## Using Records

You can use a Java Record just like you use other Java classes, by creating instances of the record type using the Java new keyword.

```java
Vehicle vehicle = new Vehicle("Mercedes", "UX 1238 A95");
```

## Methods

### Instance Methods

You can add instance methods to a Java Record definition

```java
public record Vehicle(String brand, String licensePlate) {

    public String brandAsLowerCase() {
        return brand().toLowerCase();
    }
}
```

### Static Methods

It is also possible to add static methods to a Java Record definition

```java
public record Vehicle(String brand, String licensePlate) {

    public static String brandAsUpperCase(Vehicle vehicle) {
        return vehicle.brand.toUpperCase();
    }

}
```
