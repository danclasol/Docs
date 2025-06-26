# ListCrudRepository

`ListCrudRepository` is a specialized interface that extends `CrudRepository` but returns `List` instead of `Iterable` for collection results.

- introduced in Spring Data (starting from version 3.0)
- cleaner, more modern alternative to CrudRepository
- use when you frequently deal with lists
- shared interface in all Spring Data modules

## Example

- `CrudRepository`: methods return `Iterable<T>` objects
- `ListCrudRepository` method return a `List<T>` objects

```java
public interface BookRepository extends ListCrudRepository<Book, Long> {
    List<Book> findByAuthor(String author);
}
```
