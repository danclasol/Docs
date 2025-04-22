# Wildcards

Used when you don’t know the exact type, but want to allow flexibility

- `<?>` — Unknown type
- `<? extends T>` — Any subtype of T
- `<? super T>` — Any supertype of T

## `<?>` Unknown type

You only care about reading, not writing

- `List<?>` means a list typed to an unknown type
- could be a `List<String>`, `List<Integer>`
- can only read from the collection
- can add element to the list as you do not know what type the List is typed to

```java
public void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}
```

## `<? extends T>` Some subtype of `T`

You want to read items as `T` or its subclass

- `List<? extends A>` means a List of objects that are instances of the class _A_, or subclasses of _A_
- safe to read the instances of the collection
- safe to cast them to A instances
- not safe to add elements

```java
public void processElements(List<? extends A> elements){
   for(A a : elements){
      System.out.println(a.getValue());
   }
}
```

## `<? super T>` Some supertype of T

You want to safely write (add) objects of type T

- `List<? super A>` means that the list is typed to either the _A_ class, or a superclass of _A_
- safe to insert instances of _A_ or subclasses of _A_
- elements inserted here are either _A_ instances, or instances of _A_'s superclass
- not safe to read specific types, you’ll get Object

```java
public static void insertElements(List<? super A> list){
    list.add(new A());
    list.add(new B());
    list.add(new C());
}
```
