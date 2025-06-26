# Common Annotations

### `@JsonProperty("name")`

Rename a JSON field

```java
@JsonProperty("full_name")
public String name;
```

Output

```json
{ "full_name": "Alice" }
```

### `@JsonIgnore`

Skip a field

```java
public String name;

@JsonIgnore
public String password;
```

Output

```xml
{ "name": "Alice" }
```

### `@JsonInclude(Include.NON_NULL)`

Omit fields that are null from JSON output.

```java
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {
    public String name;
    public String email;
}
```

```sql
new User("Alice", null);
```

Output

```xml
{ "name": "Alice" }
```

### `@JsonFormat`

Format dates/times

```java
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
public Date startTime;
```

Output

```json
{ "startTime": "2025-05-21 14:30" }
```
