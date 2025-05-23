# Jackson

Jackson is a widely-used library in Java for converting between Java objects and JSON

- works out of the box for most Java types
- supports custom serializers/deserializers
- works with generics
- very widely adopted (used in Spring Boot, for example)

## Adding Jackson to project

In Maven project, add the dependency to your `pom.xml` file

```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.17.0</version>
</dependency>
```

## Serialization

Convert Java objects to JSON

- `ObjectMapper`: main class in Jackson for converting between Java objects and JSON
- `writeValueAsString()`: serialize Java object to JSON string

```java
public class Person {
    public String name;
    public int age;
}

Person p = new Person();
p.name = "Alice";
p.age = 30;

ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(p);
System.out.println(json);
```

The oputput of this code will be:

```json
{ "name": "Alice", "age": 30 }
```

## Deserialization

Convert JSON to Java objects

- `ObjectMapper`: main class in Jackson for converting between Java objects and JSON
- `readValue`: deserialize JSON into Java object

```java
String json = "{\"name\":\"Bob\",\"age\":25}";

ObjectMapper mapper = new ObjectMapper();
Person p2 = mapper.readValue(json, Person.class);
System.out.println(p2.name + " - " + p2.age);
```
